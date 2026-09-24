import HomeClient from "./HomeClient";
import JsonLd, { faqSchema } from "../components/JsonLd";
import { faqHome } from "./homeData";
import { SITE_URL, OG_IMAGE } from "../lib/site";

export const metadata = {
  title: { absolute: "Estimation immobilière gratuite Paris & IDF | Rappel 24h" },
  description: "Combien vaut votre bien ? Marie Houlier, agente Leggett, vous rappelle sous 24h avec une estimation gratuite et argumentée. Paris & IDF, sans engagement.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    images: [OG_IMAGE],
    title: "Estimation immobilière gratuite Paris & Île-de-France | SellMyHome",
    description: "Une vraie personne étudie votre bien et vous rappelle sous 24h. Estimation gratuite, vente accompagnée, réseau Leggett.",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqHome)} />
      <HomeClient />
    </>
  );
}
