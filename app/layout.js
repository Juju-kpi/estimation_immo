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
  preload: true,
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-publicsans",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://sellmyhome.fr"),
  title: {
    default: "Estimation immobilière gratuite Paris | SellMyHome — Agence Leggett",
    template: "%s | SellMyHome Paris",
  },
  description: "SellMyHome : estimation immobilière gratuite à Paris, vente de bien immobilier avec accompagnement humain. Marie Houlier, agente Leggett, spécialiste Paris & Île-de-France depuis 15 ans. Réponse sous 24h.",
  keywords: ["estimation immobilière Paris", "vente bien immobilier Paris", "vendre appartement Paris", "prix m2 Paris", "agent immobilier Paris", "chasseur immobilier Paris", "estimation gratuite Paris", "diagnostic immobilier Paris", "DPE Paris", "frais de notaire Paris", "vendre succession Paris", "vendre divorce Paris", "SellMyHome", "Leggett Paris"],
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
    icon: [{ url: "/favicon.ico" }, { url: "/logo_moteur_recherche_48.png", sizes: "48x48", type: "image/png" }],
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
    { "@type": "Organization", "@id": "https://sellmyhome.fr/#organization", name: "SellMyHome", url: "https://sellmyhome.fr", logo: { "@type": "ImageObject", url: "https://sellmyhome.fr/logo.png" }, description: "Agence immobilière parisienne affiliée Leggett.", telephone: "+33752049878", email: "contact@sellmyhome.fr", address: { "@type": "PostalAddress", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" } },
    { "@type": "WebSite", "@id": "https://sellmyhome.fr/#website", name: "SellMyHome", url: "https://sellmyhome.fr", publisher: { "@id": "https://sellmyhome.fr/#organization" } },
  ]},
  agent: { "@context": "https://schema.org", "@type": "RealEstateAgent", "@id": "https://sellmyhome.fr/#agent", name: "SellMyHome", url: "https://sellmyhome.fr", telephone: "+33752049878", email: "contact@sellmyhome.fr", address: { "@type": "PostalAddress", streetAddress: "Paris", addressLocality: "Paris", addressRegion: "Île-de-France", postalCode: "75000", addressCountry: "FR" }, geo: { "@type": "GeoCoordinates", latitude: 48.8566, longitude: 2.3522 }, areaServed: [{ "@type": "City", name: "Paris" }], aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" } },
  person: { "@context": "https://schema.org", "@type": "Person", name: "Marie Houlier", jobTitle: "Conseillère en immobilier — Agente Leggett", telephone: "+33752049878", email: "contact@sellmyhome.fr", worksFor: { "@id": "https://sellmyhome.fr/#organization" }, url: "https://sellmyhome.fr/nous" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <head>
        {/* Preconnect aux origines critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://nominatim.openstreetmap.org" />
        {/* Preload LCP image — la photo de Marie sur la home */}
        <link
          rel="preload"
          as="image"
          href="/marie_houlier.jpg"
          type="image/jpeg"
          fetchpriority="high"
        />
      </head>
      <body>
        <Tracker />
        <Navbar />
        {children}
        <Footer />
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.org) }} />
        <Script id="schema-agent" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.agent) }} />
        <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.person) }} />
        {/* GA chargé en afterInteractive = non-bloquant */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JG8JD68V5T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-JG8JD68V5T');`}</Script>
      </body>
    </html>
  );
}