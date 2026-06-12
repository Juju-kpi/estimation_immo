import NousClient from "./NousClient";

export const metadata = {
  title: "Marie Houlier — Experte immobilière à Paris",
  description:
    "Rencontrez Marie Houlier, votre conseillère immobilière spécialiste de Paris et de l'Île-de-France. Plus de 40 ans de connaissance du marché parisien pour vous accompagner dans votre vente.",
  alternates: { canonical: "https://sellmyhome.fr/nous" },
  openGraph: {
    title: "Marie Houlier — Experte immobilière à Paris | SellMyHome",
    description: "Votre conseillère immobilière spécialiste Paris depuis plus de 40 ans.",
    url: "https://sellmyhome.fr/nous",
  },
};

export default function Page() {
  return <NousClient />;
}
