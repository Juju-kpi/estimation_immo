import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// 🔒 Anti-spam mémoire
const RATE_LIMIT = new Map();
const RATE_LIMIT_SECONDS = 5;

function isRateLimited(userId) {
  const now = Math.floor(Date.now() / 1000);
  const last = RATE_LIMIT.get(userId) || 0;
  if (now - last < RATE_LIMIT_SECONDS) return true;
  RATE_LIMIT.set(userId, now);
  return false;
}

// 🔹 Limites max
const MAX_DURATION = 60 * 60; // 1h
const MAX_PAGES = 20;
const MAX_EVENTS = 50;

export async function POST(req) {
  try {
    const body = await req.json();

    const { userId, duration, pages = [], events = [], startedAt, endedAt } = body;

    // 🔴 Validation
    if (!userId || !startedAt || !endedAt) {
      console.warn("Invalid payload:", body);
      return new Response("Invalid data", { status: 400 });
    }

    if (isRateLimited(userId)) {
      console.warn(`Rate limit hit for user ${userId}`);
      return new Response("Too many requests", { status: 429 });
    }

    // 🔹 Clamp payload pour éviter abus
    const safeDuration = Math.min(duration, MAX_DURATION);
    const safePages = pages.slice(0, MAX_PAGES);
    const safeEvents = events.slice(0, MAX_EVENTS);

    // 🔹 USER - récupère ou crée
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("userId", userId)
      .single();

    if (userError && userError.code !== "PGRST116") { // PGRST116 = not found
      console.error("Supabase user fetch error:", userError);
      return new Response("Server error", { status: 500 });
    }

    const createdAt = Number(userId.split("-").pop()) || startedAt;

    if (!user) {
      const { error: insertUserError } = await supabase.from("users").insert({
        userId,
        firstSeen: createdAt,
        lastSeen: endedAt,
        totalVisits: 1,
        totalTime: safeDuration,
      });
      if (insertUserError) {
        console.error("Error inserting user:", insertUserError);
        return new Response("Server error", { status: 500 });
      }
    } else {
      const { error: updateUserError } = await supabase
        .from("users")
        .update({
          lastSeen: endedAt,
          totalVisits: (user.totalVisits || 0) + 1,
          totalTime: (user.totalTime || 0) + safeDuration,
        })
        .eq("userId", userId);

      if (updateUserError) {
        console.error("Error updating user:", updateUserError);
        return new Response("Server error", { status: 500 });
      }
    }

    // 🔹 SESSIONS
    const { error: insertSessionError } = await supabase.from("sessions").insert({
      userId,
      duration: safeDuration,
      pages: safePages,
      events: safeEvents,
      started_at: startedAt,
      ended_at: endedAt,
    });

    if (insertSessionError) {
      console.error("Error inserting session:", insertSessionError);
      return new Response("Server error", { status: 500 });
    }

    console.log("Session recorded for user:", userId);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("API /track error:", err);
    return new Response("Server error", { status: 500 });
  }
}
