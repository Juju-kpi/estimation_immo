import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";
import Script from "next/script"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://sellmyhome.fr"),
  title: "Estimation immobilière gratuite en ligne et accompagnement humain | SellMyHome",
  description:
    "Sellmyhome vous accompagne pour estimer et vendre votre bien immobilier. Un accompagnement humain, transparent et efficace pour réussir votre projet.",
  alternates: {
    canonical: "/",
  },
   icons: {
    icon: "/logo_moteur_recherche.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
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
          logo: "https://sellmyhome.fr/favicon.png",
          description:
            "SellMyHome propose une estimation immobilière gratuite en ligne avec un accompagnement humain pour vendre votre bien rapidement et au meilleur prix.",
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
      </body>
    </html>
  );
}
