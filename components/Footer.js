"use client";
import Image from "next/image";
import Link from "next/link";
import { trackClick } from "./Tracker";
import { Mail, Phone } from "lucide-react";
import { PHONE, PHONE_DISPLAY, EMAIL, AGENT_NAME } from "../lib/site";

const columns = [
  {
    title: "Estimer",
    links: [
      ["/estimation", "Estimation gratuite en ligne"],
      ["/estimation-paris", "Estimation à Paris"],
      ["/estimation-ile-de-france", "Estimation Île-de-France"],
      ["/estimation-appartement", "Estimer un appartement"],
      ["/prix-m2-paris", "Prix m² Paris 2026"],
    ],
  },
  {
    title: "Vendre",
    links: [
      ["/vendre-a-paris", "Vendre à Paris : le guide"],
      ["/vendre-appartement-rapidement-paris", "Vendre rapidement"],
      ["/vendre-appartement-succession-paris", "Vendre en succession"],
      ["/vendre-appartement-divorce-paris", "Vendre lors d'un divorce"],
      ["/vendre-maison-retraite-paris", "Vendre pour la retraite"],
      ["/vendre-avant-achat-paris", "Vendre avant d'acheter"],
    ],
  },
  {
    title: "Secteurs",
    links: [
      ["/estimation-immobiliere/paris-16", "Paris 16e"],
      ["/estimation-immobiliere/paris-17", "Paris 17e"],
      ["/estimation-immobiliere/paris-15", "Paris 15e"],
      ["/estimation-immobiliere/neuilly-sur-seine", "Neuilly-sur-Seine"],
      ["/estimation-immobiliere/boulogne-billancourt", "Boulogne-Billancourt"],
      ["/estimation-immobiliere/vincennes", "Vincennes"],
      ["/estimation-immobiliere/versailles", "Versailles"],
    ],
  },
  {
    title: "Guides & services",
    links: [
      ["/diagnostic-immobilier-paris", "Diagnostics obligatoires"],
      ["/frais-notaire-paris", "Frais de notaire"],
      ["/chasseur-paris", "Chasseur immobilier"],
      ["/agence-immobiliere-paris", "Notre approche"],
      ["/nous", AGENT_NAME],
      ["/contact", "Contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-brand">
        <Link href="/" aria-label="SellMyHome Accueil">
          <Image src="/logo.png" alt="SellMyHome — estimation immobilière Paris et Île-de-France" width={140} height={62} />
        </Link>
        <p className="footer-pitch">
          Estimation gratuite et vente accompagnée à Paris et en Île-de-France. Un seul interlocuteur, joignable directement.
        </p>
        <div className="footer-contact-card">
          <h4>{AGENT_NAME}</h4>
          <a href={`tel:${PHONE}`} className="footer-contact-link" onClick={() => trackClick("footer_tel")}>
            <Phone size={14} /> {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="footer-contact-link" onClick={() => trackClick("footer_mail")}>
            <Mail size={14} /> {EMAIL}
          </a>
        </div>
        <Image src="/logo_leggett_svg.png" alt="Leggett Immobilier — réseau international partenaire" width={150} height={0} style={{ height: "auto" }} className="footer-leggett" />
      </div>

      {columns.map((col) => (
        <nav key={col.title} className="footer-col" aria-label={col.title}>
          <h3 className="footer-col-title">{col.title}</h3>
          {col.links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => trackClick(`footer_${href.split("/").pop() || "accueil"}`)}>
              {label}
            </Link>
          ))}
        </nav>
      ))}

      <div className="footer-bottom">
        <p>© 2026 SellMyHome — {AGENT_NAME}, conseillère immobilière affiliée Leggett · Paris &amp; Île-de-France</p>
      </div>
    </footer>
  );
}
