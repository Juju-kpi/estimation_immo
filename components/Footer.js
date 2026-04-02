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
            src="/logo.jpeg"
            alt="Sellmyhome"
            width={150}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* Liens + email au centre */}
      <div className="footer-center">
        <div className="footer-links">
          <Link href="/">Accueil</Link>
          <Link href="/contact">Recherche</Link>
        <Link href="/estimation">Estimation</Link>
          <Link href="/presentation">A propos</Link>
         <Link href="/nous">Nous contacter</Link>
        </div>
       <a href="mailto:contact@sellmyhome.fr" className="footer-email">
  contact@sellmyhome.fr
</a>
      </div>

      {/* Logo Leggett à droite */}
      <div className="footer-right">
        <Image
          src="/logo_leggett.png"
          alt="Leggett Immobilier"
          width={200}
          height={0}
          style={{ height: "auto" }}
          priority
        />
      </div>
<div className="footer-bottom">
  <p>© 2026 Sellmyhome — Tous droits réservés</p>
</div>
    </footer>
  );
}
