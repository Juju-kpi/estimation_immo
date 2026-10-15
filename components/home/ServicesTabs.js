"use client";
import Link from "next/link";
import { useState } from "react";
import { BarChart3, Home as HomeIcon, Search, CheckCircle2, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import { trackClick } from "../Tracker";

// Onglets « Nos services » de l'accueil — seul bloc de la section qui a besoin de JavaScript
const services = [
  {
    icon: BarChart3,
    label: "Estimation",
    title: "Estimation immobilière gratuite",
    desc: "Une fourchette de prix fiable basée sur les transactions réelles DVF et la connaissance terrain de Marie, à Paris comme en Île-de-France. Résultat sous 24h, sans engagement.",
    points: ["Données marché actualisées", "Analyse rue par rue, arrondissement par arrondissement", "Comparaison avec les ventes récentes"],
    cta: "Estimer mon bien",
    href: "/estimation",
    tag: "Gratuit",
    track: "service_estimation",
  },
  {
    icon: HomeIcon,
    label: "Vente",
    title: "Vente de bien immobilier à Paris & IDF",
    desc: "De la mise en valeur photographique à la signature chez le notaire : Marie gère l'intégralité de votre vente avec rigueur et transparence.",
    points: ["Diffusion nationale + internationale Leggett", "Photos professionnelles incluses", "Suivi personnalisé jusqu'à la signature"],
    cta: "Vendre mon bien",
    href: "/vendre-a-paris",
    tag: "Accompagnement complet",
    track: "service_vente",
  },
  {
    icon: Search,
    label: "Recherche",
    title: "Chasseur immobilier Paris",
    desc: "Marie chasse pour vous : accès aux biens off-market, visites organisées, négociation incluse. Vous gagnez du temps et achetez au bon prix.",
    points: ["Biens off-market exclusifs", "Négociation dans votre intérêt", "Accompagnement notaire inclus"],
    cta: "Lancer ma recherche",
    href: "/chasseur-paris",
    tag: "Sur-mesure",
    track: "service_chasseur",
  },
];

export default function ServicesTabs() {
  const [activeService, setActiveService] = useState(0);
  return (
    <>
              <Reveal delay={100}>
                <div className="service-tabs" role="tablist">
                  {services.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <button key={i} role="tab" aria-selected={activeService === i}
                        className={`service-tab${activeService === i ? " active" : ""}`}
                        onClick={() => setActiveService(i)}>
                        <Icon size={17} aria-hidden="true" />
                        <span>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </Reveal>

              <div className="service-panel" role="tabpanel">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className={`service-detail${activeService === i ? " visible" : ""}`}>
                      <div className="sd-left">
                        <span className="sd-tag">{s.tag}</span>
                        <h3 className="sd-title">{s.title}</h3>
                        <p className="sd-desc">{s.desc}</p>
                        <ul className="sd-points">
                          {s.points.map((p, j) => (
                            <li key={j}><span className="sd-check"><CheckCircle2 size={16} /></span>{p}</li>
                          ))}
                        </ul>
                        <Link href={s.href} className="primary-btn sd-cta" onClick={() => trackClick(s.track)}>
                          {s.cta} <ChevronRight size={16} style={{ verticalAlign: "-3px" }} />
                        </Link>
                      </div>
                      <div className="sd-right">
                        <div className="sd-visual">
                          <div className="sd-icon-large"><Icon size={52} strokeWidth={1.25} /></div>
                          <div className="sd-links">
                            <Link href="/estimation-paris" className="sd-pill">Estimation Paris</Link>
                            <Link href="/prix-m2-paris" className="sd-pill">Prix m² Paris</Link>
                            <Link href="/chasseur-paris" className="sd-pill">Chasseur immobilier</Link>
                            <Link href="/vendre-a-paris" className="sd-pill">Vendre à Paris</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="services-grid">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={i} delay={i * 80}>
                      <Link href={s.href}
                        className={`service-card${activeService === i ? " service-card-active" : ""}`}
                        onClick={() => { setActiveService(i); trackClick(s.track); }}>
                        <div className="service-card-header">
                          <span className="icon-badge"><Icon size={22} /></span>
                          <span className="service-badge">{s.tag}</span>
                        </div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <span className="service-link">{s.cta} →</span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
    </>
  );
}
