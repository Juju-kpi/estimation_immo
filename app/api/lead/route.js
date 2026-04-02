import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("LEAD:", body);

    const emailHtml = `
      <h2>Nouveau lead immobilier</h2>
      <p><strong>Adresse:</strong> ${body.address || "N/A"}</p>
      <p><strong>Type de bien:</strong> ${body.type || "N/A"}</p>
      <p><strong>Surface:</strong> ${body.surface || "N/A"} m²</p>
      <p><strong>Projet de vente:</strong> ${body.project || "N/A"}</p>
      ${body.type === "Appartement" ? `<p><strong>Étage:</strong> ${body.floor || "N/A"}</p>` : ""}
      <p><strong>Nom:</strong> ${body.name || "N/A"}</p>
      <p><strong>Email:</strong> ${body.email || "N/A"}</p>
      <p><strong>Téléphone:</strong> ${body.phone || "N/A"}</p>
      <p><strong>Consentement au rappel:</strong> ${body.callConsent ? "Oui" : "Non"}</p>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "smh.redirection@gmail.com",
      subject: "Nouveau lead immobilier - de Julien",
      html: emailHtml,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
