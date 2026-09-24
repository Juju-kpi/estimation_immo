import Link from "next/link";
import { AGENT_NAME, UPDATED_LABEL, YEARS_EXPERIENCE } from "../lib/site";

// Ligne auteur + fraîcheur sous le H1 des guides (signal E-E-A-T)
export function Byline({ readingTime }) {
  return (
    <p className="seo-byline">
      Par <Link href="/nous">{AGENT_NAME}</Link>, agente Leggett · {YEARS_EXPERIENCE} ans d'expérience à Paris
      <span aria-hidden="true"> · </span>
      Mis à jour en {UPDATED_LABEL}
      {readingTime ? <><span aria-hidden="true"> · </span>{readingTime} min de lecture</> : null}
    </p>
  );
}

export function FaqList({ faq }) {
  return (
    <div className="faq-seo-list">
      {faq.map((f, i) => (
        <details key={i} className="faq-item">
          <summary className="faq-question">{f.q}</summary>
          <p className="faq-answer">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

// Fil d'Ariane visible — items : [{ name, path? }], le dernier est la page courante
export function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Fil d'Ariane">
      <Link href="/">Accueil</Link>
      {items.map((it, i) => (
        <span key={i} className="breadcrumb-item">
          <span aria-hidden="true">›</span>
          {it.path && i < items.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span>{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}

// Grille de liens vers des secteurs (arrondissements / communes)
export function ZoneChips({ zones, label }) {
  return (
    <div className="zone-chips" aria-label={label}>
      {zones.map((z) => (
        <Link key={z.slug} href={`/estimation-immobiliere/${z.slug}`} className="zone-chip">
          {z.short || z.name}
        </Link>
      ))}
    </div>
  );
}
