import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Estimation Immobilière",
  description: "Estimez votre bien en quelques minutes"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}