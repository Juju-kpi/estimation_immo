"use client";
import Image from "next/image";
import Link from "next/link";
import { trackClick } from "./Tracker";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo gauche */}
      <div className="footer-left">
        <Link href="/">
          <Image src="/logo.png" alt="SellMyHome" width={140} height={90} priority />
        </Link>
      </div>

      {/* Centre */}
      <div className="footer-center">
        <div className="footer-intro-block">
          <h3 className="footer-title">Nous contacter</h3>
          <a href="mailto:contact@sellmyhome.fr" className="footer-contact-link">
            contact@sellmyhome.fr
          </a>
          <div className="footer-contacts">
            <div className="footer-contact-card">
              <h4>Marie Houlier</h4>
              <a href="tel:+33752049878" className="footer-contact-link">07 52 04 98 78</a>
            </div>
          </div>
        </div>

        <div className="footer-links footer-links-small">
          <Link href="/">Accueil</Link>
          <Link href="/estimation" onClick={() => trackClick("footer_estimation")}>Estimation</Link>
          <Link href="/estimation-paris" onClick={() => trackClick("footer_est_paris")}>Estimation Paris</Link>
          <Link href="/prix-m2-paris" onClick={() => trackClick("footer_prix")}>Prix m² Paris</Link>
          <Link href="/chasseur-paris" onClick={() => trackClick("footer_chasseur")}>Chasseur immobilier</Link>
          <Link href="/contact" onClick={() => trackClick("footer_contact")}>Contact</Link>
          <Link href="/presentation" onClick={() => trackClick("footer_presentation")}>À propos</Link>
          <Link href="/nous" onClick={() => trackClick("footer_nous")}>Notre équipe</Link>
        </div>
      </div>

      {/* Logo Leggett droite */}
      <div className="footer-right">
        <Image
          src="/logo_leggett_svg.png"
          alt="Leggett Immobilier — réseau international"
          width={180}
          height={0}
          style={{ height: "auto" }}
          priority
        />
      </div>

      <div className="footer-bottom">
        <p>©️ 2026 SellMyHome — Tous droits réservés</p>
      </div>
    </footer>
  );
}
