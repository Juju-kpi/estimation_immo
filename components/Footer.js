"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo à gauche */}
      <div className="footer-left">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sellmyhome"
            width={140}
            height={90}
            priority
          />
        </Link>
      </div>

      {/* Centre */}
      <div className="footer-center">
        <div className="footer-intro-block">
          <h3 className="footer-title">Nous connaître</h3>

          <div className="footer-contacts">
            <div className="footer-contact-card">
              <h4>Marie Houlier</h4>
              <a href="tel:+33752049878" className="footer-contact-link">
                07 52 04 98 78
              </a>
            </div>

            <div className="footer-contact-card">
              <h4>Victor Da Cruz</h4>
              <a href="tel:+33614206664" className="footer-contact-link">
                06 14 20 66 64
              </a>
            </div>
          </div>
        </div>

        {/* Liens du site en plus petit */}
        <div className="footer-links footer-links-small">
          <Link href="/">Accueil</Link>
          <Link href="/contact">Recherche</Link>
          <Link href="/estimation">Estimation</Link>
          <Link href="/presentation">A propos</Link>
          <Link href="/nous">Nous contacter</Link>
        </div>
      </div>

      {/* Logo Leggett à droite */}
      <div className="footer-right">
        <Image
          src="/logo_leggett_svg.png"
          alt="Leggett Immobilier"
          width={180}
          height={0}
          style={{ height: "auto" }}
          priority
        />
      </div>

      <div className="footer-bottom">
        <p>©️ 2026 Sellmyhome — Tous droits réservés</p>
      </div>
    </footer>
  );
}
