import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Tracker from "../components/Tracker";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://sellmyhome.fr"),
  title: {
    default: "Estimation immobilière gratuite à Paris | SellMyHome",
    template: "%s | SellMyHome",
  },
  description:
    "SellMyHome : estimation immobilière gratuite en ligne, accompagnement humain et personnalisé pour vendre votre appartement ou maison à Paris et en Île-de-France. Rapide, confidentiel, sans engagement.",
  keywords: [
    "estimation immobilière",
    "estimation immobilière Paris",
    "vendre appartement Paris",
    "prix m2 Paris",
    "agent immobilier Paris",
    "chasseur immobilier Paris",
    "estimation gratuite",
    "SellMyHome",
    "Leggett immobilier",
    "Île-de-France",
  ],
  authors: [{ name: "SellMyHome" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sellmyhome.fr",
    siteName: "SellMyHome",
    title: "Estimation immobilière gratuite à Paris | SellMyHome",
    description:
      "Obtenez une estimation gratuite de votre bien immobilier à Paris. Accompagnement humain, transparent et efficace avec SellMyHome.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SellMyHome" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estimation immobilière gratuite à Paris | SellMyHome",
    description: "Estimation immobilière gratuite en ligne avec accompagnement humain à Paris.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo_moteur_recherche_48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo_moteur_recherche_192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Tracker />
        <Navbar />
        {children}
        <Footer />

        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Organization", "@id": "https://sellmyhome.fr/#organization", name: "SellMyHome", url: "https://sellmyhome.fr", logo: { "@type": "ImageObject", url: "https://sellmyhome.fr/logo.png" }, description: "SellMyHome propose une estimation immobilière gratuite en ligne avec un accompagnement humain pour vendre votre bien rapidement et au meilleur prix à Paris.", telephone: "+33752049878", email: "contact@sellmyhome.fr", address: { "@type": "PostalAddress", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" }, sameAs: ["https://www.linkedin.com/company/sellmyhome-fr", "https://www.facebook.com/sellmyhomefr"] },
            { "@type": "WebSite", "@id": "https://sellmyhome.fr/#website", name: "SellMyHome", url: "https://sellmyhome.fr", publisher: { "@id": "https://sellmyhome.fr/#organization" } },
          ],
        }) }} />

        <Script id="realestate-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "RealEstateAgent", name: "SellMyHome", image: "https://sellmyhome.fr/logo.png", url: "https://sellmyhome.fr", telephone: "+33752049878", email: "contact@sellmyhome.fr", priceRange: "€",
          address: { "@type": "PostalAddress", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" },
          areaServed: [{ "@type": "City", name: "Paris" }, { "@type": "AdministrativeArea", name: "Île-de-France" }],
        }) }} />

        <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service", name: "Estimation immobilière gratuite", description: "Estimation immobilière gratuite en ligne avec accompagnement humain pour vendre votre bien à Paris.", url: "https://sellmyhome.fr/estimation", serviceType: "Estimation immobilière", provider: { "@id": "https://sellmyhome.fr/#organization" },
          areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
        }) }} />

        <Script id="person-marie" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Person", name: "Marie Houlier", jobTitle: "Conseillère en immobilier", telephone: "+33752049878", email: "contact@sellmyhome.fr",
          worksFor: { "@id": "https://sellmyhome.fr/#organization" }, url: "https://sellmyhome.fr/nous", image: "https://sellmyhome.fr/marie_houlier.jpeg",
          knowsAbout: ["Immobilier Paris", "Estimation immobilière", "Vente appartement", "Marché immobilier parisien"],
        }) }} />

        <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "HowTo", name: "Comment estimer son bien immobilier avec SellMyHome",
          step: [
            { "@type": "HowToStep", position: 1, name: "Remplir le formulaire", text: "Renseignez l'adresse, le type, la surface et les caractéristiques de votre bien." },
            { "@type": "HowToStep", position: 2, name: "Recevoir une première estimation", text: "Obtenez une estimation basée sur les données du marché immobilier parisien." },
            { "@type": "HowToStep", position: 3, name: "Être accompagné par Marie", text: "Marie vous rappelle pour affiner l'estimation et vous accompagner jusqu'à la vente." },
          ],
        }) }} />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JG8JD68V5T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-JG8JD68V5T');
        `}</Script>
      </body>
    </html>
  );
}
