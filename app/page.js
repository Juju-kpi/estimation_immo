import HomeClient from "./HomeClient";

export const metadata = {
  title: "Estimation immobilière gratuite à Paris — accompagnement humain",
  description:
    "SellMyHome vous accompagne pour estimer et vendre votre appartement à Paris et en Île-de-France. Service gratuit, confidentiel, sans engagement. Rencontrez Marie Houlier, votre experte immobilière.",
  alternates: { canonical: "https://sellmyhome.fr" },
  openGraph: {
    title: "Estimation immobilière gratuite à Paris | SellMyHome",
    description: "Estimation gratuite et accompagnement humain pour vendre votre bien à Paris.",
    url: "https://sellmyhome.fr",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <HomeClient />;
}
