"use client";
import Image from "next/image";
import Link from "next/link";
import { trackClick } from "./Tracker";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-left">
        <Link href="/" aria-label="SellMyHome Accueil">
          <Image src="/logo.png" alt="SellMyHome — Agence immobilière Paris" width={140} height={90} priority />
        </Link>
      </div>
      <div className="footer-center">
        <div className="footer-intro-block">
          <h3 className="footer-title">Nous contacter</h3>
          <a href="mailto:contact@sellmyhome.fr" className="footer-contact-link">
            <Mail size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />
            contact@sellmyhome.fr
          </a>
          <div className="footer-contacts">
            <div className="footer-contact-card">
              <h4>Marie Houlier</h4>
              <a href="tel:+33752049878" className="footer-contact-link">
                <Phone size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />
                07 52 04 98 78
              </a>
            </div>
          </div>
        </div>
        <nav aria-label="Liens utiles" className="footer-links footer-links-small">
          <Link href="/" onClick={() => trackClick("footer_accueil")}>Accueil</Link>
          <Link href="/estimation" onClick={() => trackClick("footer_estimation")}>Estimation gratuite</Link>
          <Link href="/estimation-paris" onClick={() => trackClick("footer_est_paris")}>Estimation Paris</Link>
          <Link href="/vendre-a-paris" onClick={() => trackClick("footer_vendre")}>Vendre à Paris</Link>
          <Link href="/prix-m2-paris" onClick={() => trackClick("footer_prix")}>Prix m² Paris</Link>
          <Link href="/chasseur-paris" onClick={() => trackClick("footer_chasseur")}>Chasseur immobilier</Link>
          <Link href="/diagnostic-immobilier-paris" onClick={() => trackClick("footer_diagnostic")}>Diagnostics immobiliers</Link>
          <Link href="/frais-notaire-paris" onClick={() => trackClick("footer_notaire")}>Frais de notaire</Link>
          <Link href="/agence-immobiliere-paris" onClick={() => trackClick("footer_agence")}>Agence Paris</Link>
          <Link href="/nous" onClick={() => trackClick("footer_nous")}>Marie Houlier</Link>
          <Link href="/contact" onClick={() => trackClick("footer_contact")}>Contact</Link>
        </nav>
      </div>
      <div className="footer-right">
        <Image src="/logo_leggett_svg.png" alt="Leggett Immobilier — réseau international partenaire SellMyHome" width={180} height={0} style={{ height: "auto" }} priority />
      </div>
      <div className="footer-bottom">
        <p>© 2026 SellMyHome — Agence immobilière Paris, affiliée Leggett — Tous droits réservés</p>
      </div>
    </footer>
  );
}
