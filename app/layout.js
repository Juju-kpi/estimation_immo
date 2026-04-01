import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Estimation Immobilière",
  description: "Estimez votre bien en quelques minutes",
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
