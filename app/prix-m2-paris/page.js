export const metadata = {
  title: "Prix au m² Paris 2026 — par arrondissement",
  description:
    "Découvrez les prix immobiliers au m² à Paris en 2026, arrondissement par arrondissement. Données issues des notaires et de DVF. Tendances, fourchettes de prix et conseils pour vendre au meilleur prix.",
  alternates: { canonical: "https://sellmyhome.fr/prix-m2-paris" },
  openGraph: {
    title: "Prix au m² Paris 2026 par arrondissement | SellMyHome",
    description: "Tableau complet des prix immobiliers à Paris en 2026, arrondissement par arrondissement.",
    url: "https://sellmyhome.fr/prix-m2-paris",
  },
};

import Link from "next/link";
import Script from "next/script";

const prix = [
  { arr: "1er", min: 11000, max: 14500, tendance: "→ Stable" },
  { arr: "2e",  min: 10500, max: 13500, tendance: "→ Stable" },
  { arr: "3e",  min: 11000, max: 14000, tendance: "↗ Hausse" },
  { arr: "4e",  min: 11500, max: 15000, tendance: "→ Stable" },
  { arr: "5e",  min: 11000, max: 14500, tendance: "→ Stable" },
  { arr: "6e",  min: 13000, max: 17000, tendance: "↗ Hausse" },
  { arr: "7e",  min: 12500, max: 16500, tendance: "→ Stable" },
  { arr: "8e",  min: 11000, max: 14500, tendance: "→ Stable" },
  { arr: "9e",  min: 10000, max: 13000, tendance: "↗ Hausse" },
  { arr: "10e", min: 9000,  max: 12000, tendance: "↗ Hausse" },
  { arr: "11e", min: 9500,  max: 12500, tendance: "→ Stable" },
  { arr: "12e", min: 9000,  max: 11500, tendance: "→ Stable" },
  { arr: "13e", min: 8500,  max: 11000, tendance: "↘ Légère baisse" },
  { arr: "14e", min: 9000,  max: 12000, tendance: "→ Stable" },
  { arr: "15e", min: 9000,  max: 12000, tendance: "→ Stable" },
  { arr: "16e", min: 9500,  max: 14000, tendance: "→ Stable" },
  { arr: "17e", min: 9000,  max: 12500, tendance: "↗ Hausse" },
  { arr: "18e", min: 8000,  max: 11000, tendance: "↗ Hausse" },
  { arr: "19e", min: 7500,  max: 10000, tendance: "↗ Hausse" },
  { arr: "20e", min: 7500,  max: 10500, tendance: "↗ Hausse" },
];

const faqItems = [
  {
    q: "Quel est le prix moyen au m² à Paris en 2026 ?",
    a: "Le prix moyen à Paris tourne autour de 9 800 €/m² en 2026, avec de fortes disparités : de 7 500 €/m² dans les arrondissements périphériques (19e, 20e) à plus de 15 000 €/m² dans le 6e et le 7e.",
  },
  {
    q: "Les prix immobiliers à Paris baissent-ils en 2026 ?",
    a: "Après la correction de 2023-2024, le marché parisien s'est stabilisé en 2025 et connaît une légère reprise en 2026, notamment dans les arrondissements du nord-est (9e, 10e, 18e, 19e, 20e).",
  },
  {
    q: "Comment connaître précisément la valeur de mon appartement parisien ?",
    a: "Les tableaux de prix sont des moyennes : la valeur réelle dépend de l'étage, de l'exposition, de l'état, du DPE et du standing de l'immeuble. Une estimation gratuite par Marie Houlier vous donnera une valeur précise pour votre bien.",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema-prix"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <Script
        id="breadcrumb-prix"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" },
              { "@type": "ListItem", position: 2, name: "Prix m² Paris", item: "https://sellmyhome.fr/prix-m2-paris" },
            ],
          }),
        }}
      />

      <main className="seo-page">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link> &rsaquo; <span>Prix m² Paris 2026</span>
        </nav>

        <h1>Prix au m² à Paris en 2026 — par arrondissement</h1>

        <p className="seo-intro">
          Vous souhaitez connaître la valeur de votre bien immobilier à Paris ? Ce tableau présente les
          <strong> fourchettes de prix au m² par arrondissement</strong> à Paris en 2026, basées sur les
          données des Notaires de France et les transactions DVF. Ces chiffres sont des moyennes indicatives :
          chaque bien est unique et mérite une estimation personnalisée.
        </p>

        <div className="seo-cta-block">
          <Link href="/estimation" className="primary-btn">Estimer mon bien gratuitement</Link>
        </div>

        <h2>Tableau des prix immobiliers à Paris en 2026</h2>
        <div className="prix-table-wrapper">
          <table className="prix-table">
            <thead>
              <tr>
                <th>Arrondissement</th>
                <th>Prix min (€/m²)</th>
                <th>Prix max (€/m²)</th>
                <th>Tendance</th>
              </tr>
            </thead>
            <tbody>
              {prix.map((row) => (
                <tr key={row.arr}>
                  <td><strong>Paris {row.arr}</strong></td>
                  <td>{row.min.toLocaleString("fr-FR")} €</td>
                  <td>{row.max.toLocaleString("fr-FR")} €</td>
                  <td className={row.tendance.includes("Hausse") ? "td-up" : row.tendance.includes("baisse") ? "td-down" : "td-stable"}>
                    {row.tendance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prix-source">
          Sources : DVF Etalab, Notaires de France, données au 1er trimestre 2026. Ces prix sont des fourchettes indicatives.
        </p>

        <h2>Comment interpréter ces prix ?</h2>
        <p>
          Ces fourchettes représentent des prix médians pour des appartements en bon état. Plusieurs facteurs
          peuvent faire varier significativement le prix de votre bien :
        </p>
        <ul className="seo-list">
          <li><strong>Le DPE</strong> — Un logement classé F ou G peut perdre 10 à 20 % par rapport à un bien similaire classé C ou D.</li>
          <li><strong>L'étage et l'ascenseur</strong> — Un rez-de-chaussée sans jardin vaut en moyenne 15 % de moins qu'un étage élevé avec vue.</li>
          <li><strong>L'état de la copropriété</strong> — Des travaux votés ou des charges élevées pèsent sur le prix de vente.</li>
          <li><strong>La micro-localisation</strong> — Une rue calme, la proximité d'un parc ou d'un marché sont des plus-values concrètes.</li>
        </ul>

        <h2>FAQ — Prix immobilier Paris 2026</h2>
        <div className="faq-seo-list">
          {faqItems.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">{item.q}</summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="seo-internal-links">
          <p>
            Vous souhaitez une estimation précise pour votre bien ?{" "}
            <Link href="/estimation-paris">Estimation immobilière gratuite à Paris</Link>{" "}
            ou découvrez notre service de{" "}
            <Link href="/chasseur-paris">chasseur immobilier à Paris</Link>.
          </p>
        </div>

        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimation" className="primary-btn">Obtenir mon estimation personnalisée</Link>
        </div>
      </main>
    </>
  );
}
