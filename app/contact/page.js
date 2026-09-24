import ContactClient from "./ContactClient";
import JsonLd, { breadcrumbSchema } from "../../components/JsonLd";
import { SITE_URL, PHONE_DISPLAY, OG_IMAGE } from "../../lib/site";

export const metadata = {
  title: "Contacter Marie Houlier — réponse sous 24h",
  description: `Un projet de vente ou d'achat à Paris ou en Île-de-France ? Écrivez ou appelez Marie Houlier au ${PHONE_DISPLAY} : elle vous répond personnellement sous 24h.`,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    images: [OG_IMAGE],
    title: "Contacter Marie Houlier | SellMyHome",
    description: "Une vraie personne vous répond sous 24h. Paris & Île-de-France.",
    url: `${SITE_URL}/contact`,
  },
};

const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  about: { "@id": `${SITE_URL}/#agent` },
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactPage} />
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <ContactClient />
    </>
  );
}
