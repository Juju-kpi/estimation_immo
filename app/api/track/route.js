import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const MAX_DURATION = 60 * 60; // 1h max
const MAX_PAGES = 20;
const MAX_EVENTS = 50;

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, duration, pages = [], events = [], startedAt, endedAt } = body;

    // Validation basique
    if (!userId || !startedAt || !endedAt || typeof duration !== "number") {
      return new Response("Invalid data", { status: 400 });
    }

    // Sanity checks sur les valeurs
    if (endedAt <= startedAt || duration < 0) {
      return new Response("Invalid timestamps", { status: 400 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const country = req.headers.get("x-vercel-ip-country") || null;
    const city = req.headers.get("x-vercel-ip-city") || null;
    const region = req.headers.get("x-vercel-ip-country-region") || null;

    const safeDuration = Math.min(Math.max(0, duration), MAX_DURATION);
    const safePages = pages.slice(0, MAX_PAGES);
    const safeEvents = events.slice(0, MAX_EVENTS);

    // UPSERT atomique sur users — évite la race condition insert/update
    // et fonctionne même si Vercel rejoue la requête
    const { error: upsertError } = await supabase.rpc("upsert_user_session", {
      p_userid: userId,
      p_firstseen: Number(userId.split("-").pop()) || startedAt,
      p_lastseen: endedAt,
      p_duration: safeDuration,
    });

    // Si la fonction RPC n'existe pas encore, fallback sur l'ancienne logique
    if (upsertError && upsertError.code === "PGRST202") {
      // RPC not found — fallback
      await fallbackUpsertUser(userId, startedAt, endedAt, safeDuration);
    } else if (upsertError) {
      console.error("Upsert user error:", upsertError);
      // On continue quand même pour insérer la session
    }

    // INSERT session — on utilise startedAt comme clé d'idempotence
    // Si la même session est envoyée deux fois (retry réseau), on l'ignore silencieusement
    const { error: sessionError } = await supabase
      .from("sessions")
      .insert({
        userid: userId,
        duration: safeDuration,
        pages: safePages,
        events: safeEvents,
        started_at: startedAt,
        ended_at: endedAt,
        ip,
        country,
        city,
        region,
      })
      // Ignore les doublons (nécessite une contrainte UNIQUE sur (userid, started_at) en base)
      .select();

    if (sessionError) {
      // Code 23505 = violation de contrainte unique PostgreSQL (doublon)
      if (sessionError.code === "23505") {
        // Session déjà enregistrée — ce n'est pas une erreur, c'est un retry
        return new Response(JSON.stringify({ success: true, note: "duplicate" }), { status: 200 });
      }
      console.error("Session insert error:", sessionError);
      return new Response("Server error", { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("API /track error:", err);
    return new Response("Server error", { status: 500 });
  }
}

// Fallback si la fonction RPC upsert_user_session n'est pas créée
async function fallbackUpsertUser(userId, startedAt, endedAt, safeDuration) {
  const { data: user } = await supabase
    .from("users")
    .select("userid, totalvisits, totaltime")
    .eq("userid", userId)
    .single();

  const createdAt = Number(userId.split("-").pop()) || startedAt;

  if (!user) {
    await supabase.from("users").insert({
      userid: userId,
      firstseen: createdAt,
      lastseen: endedAt,
      totalvisits: 1,
      totaltime: safeDuration,
    });
  } else {
    await supabase
      .from("users")
      .update({
        lastseen: endedAt,
        totalvisits: (user.totalvisits || 0) + 1,
        totaltime: (user.totaltime || 0) + safeDuration,
      })
      .eq("userid", userId);
  }
}