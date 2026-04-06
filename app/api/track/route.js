import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// 🔒 Anti-spam mémoire
const RATE_LIMIT = new Map();

function isRateLimited(userId) {
  const now = Math.floor(Date.now() / 1000);
  const last = RATE_LIMIT.get(userId) || 0;

  if (now - last < 5) return true; // max 1 requête tous les 5s
  RATE_LIMIT.set(userId, now);
  return false;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { userId, duration, pages = [], events = [], startedAt, endedAt } = body;

    // 🔴 Validation stricte
    if (!userId || !startedAt || !endedAt) {
      return new Response("Invalid data", { status: 400 });
    }

    if (isRateLimited(userId)) {
      return new Response("Too many requests", { status: 429 });
    }

    // 🔹 Clamp payload
    const safeDuration = Math.min(duration, 60 * 60); // max 1h
    const safePages = pages.slice(0, 20);
    const safeEvents = events.slice(0, 50);

    // 🔹 USER
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("userId", userId)
      .single();

    const createdAt = Number(userId.split("-").pop());

    if (!user) {
      await supabase.from("users").insert({
        userId,
        firstSeen: createdAt,
        lastSeen: endedAt,
        totalVisits: 1,
        totalTime: safeDuration,
      });
    } else {
      await supabase
        .from("users")
        .update({
          lastSeen: endedAt,
          totalVisits: (user.totalVisits || 0) + 1,
          totalTime: (user.totalTime || 0) + safeDuration,
        })
        .eq("userId", userId);
    }

    // 🔹 SESSIONS
    await supabase.from("sessions").insert({
      userId,
      duration: safeDuration,
      pages: safePages,
      events: safeEvents,
      started_at: startedAt,
      ended_at: endedAt,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
