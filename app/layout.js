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
  title: "Estimation immobilière gratuite en ligne et accompagnement humain, specialisé à Paris et Ile-de-France | SellMyHome",
  description:
    "Sellmyhome vous accompagne pour estimer et vendre votre bien immobilier. Un accompagnement humain, transparent et efficace pour réussir votre projet. Localisé à Paris et Ile-de-France",
  alternates: {
    canonical: "/",
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


<Script
  id="schema-org"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "SellMyHome",
          url: "https://sellmyhome.fr",
          logo: "https://sellmyhome.fr/logo.png",
          description:
            "SellMyHome propose une estimation immobilière gratuite en ligne avec un accompagnement humain pour vendre votre bien rapidement et au meilleur prix. Localisé à Paris et Ile-de-France",
        },
        {
          "@type": "WebSite",
          name: "SellMyHome",
          url: "https://sellmyhome.fr",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://sellmyhome.fr/recherche?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
      ],
    }),
  }}
/>
    
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JG8JD68V5T"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-JG8JD68V5T');
          `}
        </Script>
          <Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment estimer son bien immobilier ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez utiliser un outil d’estimation immobilière en ligne comme SellMyHome pour obtenir une estimation rapide et fiable, puis être accompagné par un expert.",
          },
        },
        {
          "@type": "Question",
          name: "L’estimation immobilière est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l’estimation proposée par SellMyHome est gratuite et sans engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps prend une estimation immobilière ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L’estimation en ligne prend seulement quelques minutes après avoir renseigné les informations de votre bien.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je être accompagné après l’estimation ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez être rappelé par un expert immobilier pour affiner votre estimation et vous accompagner dans la vente.",
          },
        },
      ],
    }),
  }}
/>

<Script
  id="product-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Estimation immobilière gratuite SellMyHome",
      description:
        "Outil d’estimation immobilière gratuite en ligne avec accompagnement humain pour vendre votre bien rapidement. Localisé à Paris",
      image: "https://sellmyhome.fr/logo.png",
      url: "https://sellmyhome.fr/estimation",
      category: "Immobilier",
         serviceType: "Estimation immobilière",
      brand: {
        "@type": "Brand",
        name: "SellMyHome",
      },
      areaServed: {
        "@type": "Place",
        name: "France"
      },
          provider: {
        "@type": "Organization",
        name: "SellMyHome",
        url: "https://sellmyhome.fr",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        description: "Demande d’estimation gratuite sans engagement via formulaire en ligne."
      },
    }),
  }}
/>

  <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",

      name: "SellMyHome",
      image: "https://sellmyhome.fr/logo.png",
      url: "https://sellmyhome.fr",
      telephone: "+33752049878",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressRegion: "Île-de-France",
        addressCountry: "FR"
      },

      areaServed: {
        "@type": "Place",
        name: "Île-de-France"
      },

      priceRange: "€",
      
      sameAs: [
        "https://www.linkedin.com/",
        "https://www.facebook.com/"
      ]
    }),
  }}
/>

  <Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://sellmyhome.fr"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Estimation",
          item: "https://sellmyhome.fr/estimation"
        }
      ]
    }),
  }}
/>

  <Script
  id="howto-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Comment estimer son bien immobilier",
      step: [
        {
          "@type": "HowToStep",
          name: "Remplir le formulaire",
          text: "Indiquez les caractéristiques de votre bien immobilier."
        },
        {
          "@type": "HowToStep",
          name: "Recevoir une estimation",
          text: "Obtenez une estimation instantanée en ligne."
        },
        {
          "@type": "HowToStep",
          name: "Être accompagné",
          text: "Un expert vous recontacte pour affiner l’estimation."
        }
      ]
    }),
  }}
/>
      </body>
    </html>
  );
}
