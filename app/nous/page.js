import NousClient from "./NousClient";
import JsonLd, { breadcrumbSchema } from "../../components/JsonLd";
import { SITE_URL, YEARS_EXPERIENCE, OG_IMAGE } from "../../lib/site";

export const metadata = {
  title: "Marie Houlier, conseillère immobilière Leggett",
  description: `Qui est Marie Houlier ? Agente Leggett depuis ${YEARS_EXPERIENCE} ans à Paris et en IDF, elle accompagne chaque vendeur personnellement, de l'estimation à la signature.`,
  alternates: { canonical: `${SITE_URL}/nous` },
  openGraph: {
    images: [OG_IMAGE],
    title: "Marie Houlier, conseillère immobilière Leggett | SellMyHome",
    description: "Un seul interlocuteur de l'estimation à la signature, à Paris et en Île-de-France.",
    url: `${SITE_URL}/nous`,
    type: "profile",
  },
};

const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/nous`,
  mainEntity: { "@id": `${SITE_URL}/#marie` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={profile} />
      <JsonLd data={breadcrumbSchema([{ name: "Marie Houlier", path: "/nous" }])} />
      <NousClient />
    </>
  );
}
