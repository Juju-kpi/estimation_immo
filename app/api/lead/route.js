import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("LEAD:", body);

    await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "smh.redirection@gmail.com", 
      subject: "Nouveau lead immobilier - Julien",
    html: `
  <h2>Nouveau lead immobilier</h2>
   <p><strong>Voici les informations:</p>
  <p><strong>Adresse:</strong> ${body.address}</p>
  <p><strong>Type:</strong> ${body.type}</p>
  <p><strong>Surface:</strong> ${body.surface} m²</p>
  <p><strong>Pièces:</strong> ${body.rooms}</p>
  <p><strong>Email:</strong> ${body.email}</p>
  <p><strong>Téléphone:</strong> ${body.phone}</p>
`
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ success: false });
  }
}
