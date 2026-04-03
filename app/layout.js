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
  title: "Sell my home: Estimation Immobilière et Accompagnement Humain pour vendre votre bien",
  description:
    "Sellmyhome vous accompagne pour estimer et vendre votre bien immobilier. Un accompagnement humain, transparent et efficace pour réussir votre projet.",
  alternates: {
    canonical: "/",
  },
   icons: {
    icon: "/favicon.png",
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
