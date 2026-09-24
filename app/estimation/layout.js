import JsonLd, { breadcrumbSchema } from "../../components/JsonLd";
import { SITE_URL, OG_IMAGE } from "../../lib/site";

// La page /estimation est un composant client : ses métadonnées sont déclarées ici.
export const metadata = {
  title: "Estimation gratuite en ligne, rappel sous 24h",
  description: "Décrivez votre bien en 3 minutes : Marie Houlier, agente Leggett, étudie votre secteur et vous rappelle sous 24h. Gratuit, confidentiel, Paris & Île-de-France.",
  alternates: { canonical: `${SITE_URL}/estimation` },
  openGraph: {
    images: [OG_IMAGE],
    title: "Estimation immobilière gratuite en ligne | SellMyHome",
    description: "3 minutes pour décrire votre bien, un rappel personnel sous 24h. Gratuit et sans engagement.",
    url: `${SITE_URL}/estimation`,
  },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Estimation immobilière gratuite SellMyHome",
  serviceType: "Estimation immobilière",
  description: "Estimation immobilière gratuite réalisée par Marie Houlier, agente Leggett, avec rappel personnel sous 24h. Paris et Île-de-France.",
  url: `${SITE_URL}/estimation`,
  provider: { "@id": `${SITE_URL}/#agent` },
  areaServed: [
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Estimation gratuite et sans engagement" },
};

export default function EstimationLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Estimation gratuite", path: "/estimation" }])} />
      <JsonLd data={service} />
      {children}
    </>
  );
}
