"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";
import { trackClick } from "./Tracker";
import { AGENT_NAME, PHONE, PHONE_DISPLAY, EMAIL, YEARS_EXPERIENCE } from "../lib/site";

const GUIDES = [
  ["/estimation-paris", "Estimation à Paris"],
  ["/estimation-ile-de-france", "Estimation en Île-de-France"],
  ["/prix-m2-paris", "Prix m² Paris 2026"],
  ["/vendre-a-paris", "Vendre à Paris : le guide"],
  ["/diagnostic-immobilier-paris", "Diagnostics obligatoires"],
  ["/frais-notaire-paris", "Frais de notaire"],
];

// Colonne latérale collante des guides (desktop uniquement)
export default function GuideSidebar() {
  const pathname = usePathname();
  const src = `aside${pathname.replace(/\//g, "_")}`;
  return (
    <aside className="guide-aside" aria-label="Contacter Marie">
      <div className="aside-card aside-contact">
        <div className="aside-agent">
          <Image src="/marie_houlier.jpg" alt={`${AGENT_NAME}, agente Leggett`} width={64} height={64} quality={80} />
          <div>
            <p className="aside-name">{AGENT_NAME}</p>
            <p className="aside-role">Agente Leggett · {YEARS_EXPERIENCE} ans</p>
          </div>
        </div>
        <p className="aside-title">Combien vaut votre bien ?</p>
        <p className="aside-text">Une estimation gratuite et argumentée, avec un rappel personnel sous 24h.</p>
        <Link href="/estimation" className="aside-btn-main" onClick={() => trackClick(`${src}_estimation`)}>
          Estimer mon bien
        </Link>
        <a href={`tel:${PHONE}`} className="aside-btn" onClick={() => trackClick(`${src}_tel`)}>
          <PhoneCall size={15} /> {PHONE_DISPLAY}
        </a>
        <a href={`mailto:${EMAIL}`} className="aside-link" onClick={() => trackClick(`${src}_mail`)}>
          <Mail size={14} /> {EMAIL}
        </a>
        <ul className="aside-points">
          <li><CheckCircle2 size={14} /> Gratuit &amp; sans engagement</li>
          <li><CheckCircle2 size={14} /> Un seul interlocuteur</li>
          <li><CheckCircle2 size={14} /> Données confidentielles</li>
        </ul>
      </div>

      <nav className="aside-card aside-guides" aria-label="Guides">
        <p className="aside-heading">Guides utiles</p>
        {GUIDES.filter(([href]) => href !== pathname).slice(0, 5).map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>

      <div className="aside-card aside-partner">
        <p className="aside-heading">Réseau partenaire</p>
        <Image src="/logo_leggett_svg.png" alt="Leggett International Real Estate" width={240} height={31} style={{ height: "auto", width: "100%" }} />
        <p className="aside-text">Votre bien présenté aux acquéreurs français et internationaux.</p>
      </div>
    </aside>
  );
}
