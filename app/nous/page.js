export const metadata = {
  title: "Nos experts immobiliers à Paris | SellMyHome",
  description:
    "Découvrez nos experts immobiliers à Paris. Un accompagnement humain et sur-mesure pour votre projet de vente.",
  alternates: {
    canonical: "https://sellmyhome.fr/nous",
  },
};

import NousClient from "./NousClient";

export default function Page() {
  return <NousClient />;
}
