import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("LEAD:", body);

    await resend.emails.send({
      from: "onboarding@resend.dev", // temporaire
      to: "julien.lbc19@gmail.com", //  ton email
      subject: "Nouveau lead immobilier - Julien",
      html: `
        <h2>Nouveau lead</h2>
        <p>Voici les informations :</p>
        <pre>${JSON.stringify(body, null, 2)}</pre>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ success: false });
  }
}
