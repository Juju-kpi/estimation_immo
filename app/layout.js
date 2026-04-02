import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Sell my home: Estimation Immobilière et Accompagnement Humain pour vendre votre bien",
  description: "Sellmyhome vous accompagne pour estimer et vendre votre bien immobilier. Un accompagnement humain, transparent et efficace pour réussir votre projet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
       <body className={poppins.className}>
        <Navbar />
        {children}
     <Footer />
      </body>
    </html>
  );
}
