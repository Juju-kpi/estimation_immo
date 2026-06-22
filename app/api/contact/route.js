import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.resend_contact);

// ── Rate limiting ──────────────────────────────────
const RATE_LIMIT = new Map();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = RATE_LIMIT.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW_MS) {
    RATE_LIMIT.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_MAX) return true;
  entry.count++;
  RATE_LIMIT.set(ip, entry);
  return false;
}

// ── Échappement HTML ───────────────────────────────
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Trop de demandes. Réessayez dans quelques minutes." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 200) {
      return NextResponse.json({ success: false, error: "Nom invalide." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Email invalide." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 5 || message.length > 5000) {
      return NextResponse.json({ success: false, error: "Message invalide (5 à 5000 caractères)." }, { status: 400 });
    }

    // Échappement
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "smh.redirection@gmail.com",
      subject: `Message de ${safeName} — SellMyHome`,
      html: `
        <p><strong>Nom:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("api/contact error:", error);
    return NextResponse.json({ success: false, error: "Erreur serveur." }, { status: 500 });
  }
}