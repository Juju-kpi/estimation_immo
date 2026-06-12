import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fraunces, Public_Sans } from "next/font/google";
import Script from "next/script";
import Tracker from "../components/Tracker";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-publicsans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sellmyhome.fr"),
  title: {
    default: "Estimation immobilière gratuite Paris | SellMyHome — Agence Leggett",
    template: "%s | SellMyHome Paris",
  },
  description: "SellMyHome : estimation immobilière gratuite à Paris, vente de bien immobilier avec accompagnement humain. Marie Houlier, agente Leggett, spécialiste Paris & Île-de-France depuis 40 ans. Réponse sous 24h.",
  keywords: ["estimation immobilière Paris", "vente bien immobilier Paris", "vendre appartement Paris", "prix m2 Paris", "agent immobilier Paris", "chasseur immobilier Paris", "estimation gratuite Paris", "diagnostic immobilier Paris", "DPE Paris", "frais de notaire Paris", "SellMyHome", "Leggett Paris", "Île-de-France"],
  authors: [{ name: "Marie Houlier — SellMyHome" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    type: "website", locale: "fr_FR", url: "https://sellmyhome.fr", siteName: "SellMyHome",
    title: "Estimation immobilière gratuite Paris | SellMyHome",
    description: "Estimation gratuite et vente immobilière à Paris avec Marie Houlier, agente Leggett. Accompagnement humain, réseau international, réponse sous 24h.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SellMyHome — Estimation immobilière Paris" }],
  },
  twitter: { card: "summary_large_image", title: "Estimation immobilière gratuite Paris | SellMyHome", description: "Estimation gratuite à Paris, accompagnement humain de A à Z.", images: ["/og-image.jpg"] },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo_moteur_recherche_48.png", sizes: "48x48", type: "image/png" }, { url: "/logo_moteur_recherche_192.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico", apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#203A63",
};

const schemas = {
  org: { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": "https://sellmyhome.fr/#organization", name: "SellMyHome", url: "https://sellmyhome.fr", logo: { "@type": "ImageObject", url: "https://sellmyhome.fr/logo.png" }, description: "Agence immobilière parisienne affiliée Leggett, spécialisée dans l'estimation gratuite et la vente de biens immobiliers à Paris et en Île-de-France.", telephone: "+33752049878", email: "contact@sellmyhome.fr", address: { "@type": "PostalAddress", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" }, sameAs: ["https://www.linkedin.com/company/sellmyhome-fr", "https://www.facebook.com/sellmyhomefr"] },
    { "@type": "WebSite", "@id": "https://sellmyhome.fr/#website", name: "SellMyHome", url: "https://sellmyhome.fr", publisher: { "@id": "https://sellmyhome.fr/#organization" }, potentialAction: { "@type": "SearchAction", target: "https://sellmyhome.fr/?q={search_term_string}", "query-input": "required name=search_term_string" } },
  ]},
  agent: { "@context": "https://schema.org", "@type": "RealEstateAgent", "@id": "https://sellmyhome.fr/#agent", name: "SellMyHome", image: "https://sellmyhome.fr/logo.png", url: "https://sellmyhome.fr", telephone: "+33752049878", email: "contact@sellmyhome.fr", priceRange: "€", address: { "@type": "PostalAddress", streetAddress: "Paris", addressLocality: "Paris", addressRegion: "Île-de-France", postalCode: "75000", addressCountry: "FR" }, geo: { "@type": "GeoCoordinates", latitude: 48.8566, longitude: 2.3522 }, areaServed: [{ "@type": "City", name: "Paris" }, { "@type": "AdministrativeArea", name: "Île-de-France" }], aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" } },
  person: { "@context": "https://schema.org", "@type": "Person", name: "Marie Houlier", jobTitle: "Conseillère en immobilier — Agente Leggett", telephone: "+33752049878", email: "contact@sellmyhome.fr", worksFor: { "@id": "https://sellmyhome.fr/#organization" }, url: "https://sellmyhome.fr/nous", image: "https://sellmyhome.fr/marie_houlier.jpeg", knowsAbout: ["Immobilier Paris", "Estimation immobilière", "Vente appartement Paris", "Marché immobilier parisien", "Chasseur immobilier"] },
  howto: { "@context": "https://schema.org", "@type": "HowTo", name: "Comment vendre son bien immobilier à Paris avec SellMyHome", step: [
    { "@type": "HowToStep", position: 1, name: "Estimation gratuite en ligne", text: "Remplissez le formulaire avec les caractéristiques de votre bien. Gratuit, confidentiel, sans engagement." },
    { "@type": "HowToStep", position: 2, name: "Analyse et rappel sous 24h", text: "Marie analyse les données du marché et vous rappelle dans les 24h avec une estimation argumentée." },
    { "@type": "HowToStep", position: 3, name: "Visite et mise en valeur", text: "Marie visite votre bien, le met en valeur et le diffuse sur les portails nationaux et internationaux Leggett." },
    { "@type": "HowToStep", position: 4, name: "Négociation et vente", text: "Marie gère les visites, négocie les offres et vous accompagne jusqu'à la signature chez le notaire." },
  ]},
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <Tracker />
        <Navbar />
        {children}
        <Footer />
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.org) }} />
        <Script id="schema-agent" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.agent) }} />
        <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.person) }} />
        <Script id="schema-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howto) }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JG8JD68V5T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-JG8JD68V5T');`}</Script>
      </body>
    </html>
  );
}
