export const metadata = {
  title: "Contact — Parlez à Marie Houlier",
  description:
    "Contactez Marie Houlier, votre experte immobilière à Paris. Décrivez votre projet de vente ou d'achat et recevez une réponse sous 24h. SellMyHome, agence affiliée Leggett.",
  alternates: { canonical: "https://sellmyhome.fr/contact" },
  openGraph: {
    title: "Contact SellMyHome — Parlez à Marie",
    description: "Contactez votre experte immobilière parisienne. Réponse sous 24h.",
    url: "https://sellmyhome.fr/contact",
  },
};

import ContactClient from "./ContactClient";
export default function Page() {
  return <ContactClient />;
}
