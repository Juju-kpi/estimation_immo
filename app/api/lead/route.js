import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Rate limiting en mémoire (par IP) ──────────────
// Note: se remet à zéro à chaque cold start Vercel.
// Pour un rate limit persistant, utiliser Upstash Redis.
const RATE_LIMIT = new Map();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 3; // max 3 soumissions par IP par minute

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

// ── Échappement HTML pour éviter XSS dans les emails ──
function escapeHtml(str) {
  if (typeof str !== "string") return String(str ?? "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Validation email simple ────────────────────────
function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  // Rate limit par IP
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

    // ── Validation des champs obligatoires ────────
    const { address, type, surface, project, name, email, phone, callConsent, floor } = body;

    if (!address || typeof address !== "string" || address.length > 500) {
      return NextResponse.json({ success: false, error: "Adresse invalide." }, { status: 400 });
    }
    if (!name || typeof name !== "string" || name.length > 200) {
      return NextResponse.json({ success: false, error: "Nom invalide." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Email invalide." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.length < 8 || phone.length > 20) {
      return NextResponse.json({ success: false, error: "Téléphone invalide." }, { status: 400 });
    }

    // ── Échappement de tous les champs ────────────
    const safe = {
      address: escapeHtml(address),
      type: escapeHtml(type),
      surface: escapeHtml(String(surface ?? "")),
      project: escapeHtml(project),
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      floor: escapeHtml(String(floor ?? "")),
      callConsent: callConsent === true ? "Oui" : "Non",
    };

    const emailHtml = `
      <h2>Nouveau lead immobilier</h2>
      <p><strong>Adresse:</strong> ${safe.address}</p>
      <p><strong>Type de bien:</strong> ${safe.type}</p>
      <p><strong>Surface:</strong> ${safe.surface} m²</p>
      <p><strong>Projet de vente:</strong> ${safe.project}</p>
      ${safe.type === "Appartement" ? `<p><strong>Étage:</strong> ${safe.floor}</p>` : ""}
      <p><strong>Nom:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Téléphone:</strong> ${safe.phone}</p>
      <p><strong>Consentement au rappel:</strong> ${safe.callConsent}</p>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "smh.redirection@gmail.com",
      subject: `Nouveau lead — ${safe.name} (${safe.type ?? "N/A"})`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("api/lead error:", error);
    // Ne pas exposer error.message au client
    return NextResponse.json({ success: false, error: "Erreur serveur." }, { status: 500 });
  }
}