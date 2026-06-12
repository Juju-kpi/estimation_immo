import HomeClient from "./HomeClient";
export const metadata = {
  title: "Estimation immobilière gratuite Paris — Vente appartement & maison",
  description: "Estimez gratuitement votre appartement ou maison à Paris avec Marie Houlier, agente Leggett depuis 40 ans. Vente immobilière Paris, accompagnement de A à Z, réponse sous 24h. Sans engagement.",
  alternates: { canonical: "https://sellmyhome.fr" },
  openGraph: { title: "Estimation immobilière gratuite Paris | SellMyHome", description: "Estimation gratuite + vente immobilière Paris avec accompagnement humain. Agente Leggett, 40 ans d'expérience.", url: "https://sellmyhome.fr", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
};
export default function Home() { return <HomeClient />; }
