import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fraunces, Public_Sans } from "next/font/google";
import Script from "next/script";
import Tracker from "../components/Tracker";
import MobileCtaBar from "../components/MobileCtaBar";
import JsonLd from "../components/JsonLd";
import { SITE_URL, AGENT_NAME, PHONE, EMAIL, YEARS_EXPERIENCE } from "../lib/site";
import { IDF } from "../lib/locations";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Estimation immobilière gratuite Paris & Île-de-France | SellMyHome",
    template: "%s | SellMyHome",
  },
  description: `Estimation immobilière gratuite à Paris et en Île-de-France avec ${AGENT_NAME}, agente Leggett depuis ${YEARS_EXPERIENCE} ans. Un seul interlocuteur, rappel sous 24h.`,
  applicationName: "SellMyHome",
  authors: [{ name: `${AGENT_NAME} — SellMyHome`, url: `${SITE_URL}/nous` }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    type: "website", locale: "fr_FR", url: SITE_URL, siteName: "SellMyHome",
    title: "Estimation immobilière gratuite Paris & Île-de-France | SellMyHome",
    description: `Estimation gratuite et vente accompagnée avec ${AGENT_NAME}, agente Leggett. Un seul interlocuteur, rappel sous 24h.`,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo_moteur_recherche_48.png", sizes: "48x48", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo_moteur_recherche_192.png", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#203A63",
};

const areaServed = [
  { "@type": "City", name: "Paris" },
  { "@type": "AdministrativeArea", name: "Île-de-France" },
  ...IDF.map((c) => ({ "@type": "City", name: c.name })),
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SellMyHome",
      alternateName: ["Sell My Home", "sellmyhome.fr"],
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      description: "Site de mise en relation avec Marie Houlier, agente immobilière affiliée Leggett : estimation gratuite et vente accompagnée à Paris et en Île-de-France.",
      telephone: PHONE,
      email: EMAIL,
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressRegion: "Île-de-France", addressCountry: "FR" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "SellMyHome",
      alternateName: ["Sell My Home", "sellmyhome.fr"],
      url: SITE_URL,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#agent`,
      name: "SellMyHome — Marie Houlier, agente Leggett",
      url: SITE_URL,
      image: `${SITE_URL}/marie_houlier.jpg`,
      logo: `${SITE_URL}/logo.png`,
      telephone: PHONE,
      email: EMAIL,
      priceRange: "Estimation gratuite",
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressRegion: "Île-de-France", postalCode: "75000", addressCountry: "FR" },
      geo: { "@type": "GeoCoordinates", latitude: 48.8566, longitude: 2.3522 },
      areaServed,
      employee: { "@id": `${SITE_URL}/#marie` },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: ["Estimation immobilière", "Vente d'appartement", "Marché immobilier parisien", "Chasseur immobilier"],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#marie`,
      name: AGENT_NAME,
      jobTitle: "Conseillère en immobilier — Agente Leggett",
      image: `${SITE_URL}/marie_houlier.jpg`,
      telephone: PHONE,
      email: EMAIL,
      url: `${SITE_URL}/nous`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsLanguage: ["fr"],
      knowsAbout: ["Immobilier Paris", "Immobilier Île-de-France", "Estimation immobilière", "Vente appartement Paris"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <JsonLd data={schema} />
        <Tracker />
        <Navbar />
        {children}
        <Footer />
        <MobileCtaBar />
        {/* GA chargé en afterInteractive = non-bloquant */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JG8JD68V5T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-JG8JD68V5T');document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="tel:"],a[href^="mailto:"]');if(a&&window.gtag){gtag('event',a.href.indexOf('tel:')===0?'click_to_call':'click_to_email',{page_path:location.pathname});}});`}</Script>
      </body>
    </html>
  );
}
