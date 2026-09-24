export const metadata = {
  title: "Prix m² Paris 2026 : les 20 arrondissements",
  description: "Prix au m² 2026 dans chaque arrondissement de Paris, de 7 300 € (19e) à 16 000 € (6e), tendances et écarts rue par rue. Estimation gratuite sous 24h.",
  alternates: { canonical: "https://sellmyhome.fr/prix-m2-paris" },
  openGraph: { images: [OG_IMAGE], title: "Prix m² Paris 2026 : les 20 arrondissements | SellMyHome", description: "Prix au m² 2026 dans chaque arrondissement de Paris, de 7 300 € (19e) à 16 000 € (6e), tendances et écarts rue par rue. Estimation gratuite sous 24h.", url: "https://sellmyhome.fr/prix-m2-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";
import { IDF, fmtEur } from "../../../lib/locations";

const prix = [
  { arr:"1er", min:10500, max:14000, t:"→ Stable", note:"Centre historique, tourisme, forte demande" },
  { arr:"2e",  min:10000, max:13000, t:"→ Stable", note:"Sentier, Bourse — en plein essor" },
  { arr:"3e",  min:10500, max:13500, t:"↗ Hausse", note:"Haut Marais, très recherché" },
  { arr:"4e",  min:11000, max:14500, t:"→ Stable", note:"Île Saint-Louis, Notre-Dame, premium" },
  { arr:"5e",  min:10500, max:14000, t:"→ Stable", note:"Quartier latin, clientèle intellectuelle" },
  { arr:"6e",  min:12500, max:16000, t:"↗ Hausse", note:"Saint-Germain — parmi les plus chers" },
  { arr:"7e",  min:12000, max:15500, t:"→ Stable", note:"Invalides, Tour Eiffel, très résidentiel" },
  { arr:"8e",  min:10500, max:14000, t:"→ Stable", note:"Champs-Élysées, clientèle internationale" },
  { arr:"9e",  min:9500,  max:12500, t:"↗ Hausse", note:"Pigalle, Trinité — forte demande jeune CSP+" },
  { arr:"10e", min:8800,  max:11500, t:"↗ Hausse", note:"Canal Saint-Martin — en forte progression" },
  { arr:"11e", min:9200,  max:12000, t:"→ Stable", note:"Oberkampf, Bastille — valeurs sûres" },
  { arr:"12e", min:8700,  max:11000, t:"→ Stable", note:"Nation, Bercy — résidentiel calme" },
  { arr:"13e", min:8200,  max:10500, t:"→ Stable", note:"Italie, Gobelins — secteur abordable, attentif au DPE" },
  { arr:"14e", min:8700,  max:11500, t:"→ Stable", note:"Montparnasse, Alésia — stable" },
  { arr:"15e", min:8700,  max:11500, t:"→ Stable", note:"Plus grand arrondissement, très familial" },
  { arr:"16e", min:9200,  max:13500, t:"→ Stable", note:"Très variable selon rue : Passy vs Auteuil" },
  { arr:"17e", min:8700,  max:12000, t:"↗ Hausse", note:"Batignolles en forte hausse, Monceau premium" },
  { arr:"18e", min:7800,  max:10500, t:"↗ Hausse", note:"Montmartre, Clignancourt — meilleur potentiel" },
  { arr:"19e", min:7300,  max:9700,  t:"↗ Hausse", note:"Parc des Buttes-Chaumont — en pleine transformation" },
  { arr:"20e", min:7400,  max:10000, t:"↗ Hausse", note:"Belleville, Père-Lachaise — dynamique" },
];

// Lien vers la page détaillée de chaque arrondissement
const slugOf = (arr) => `paris-${parseInt(arr, 10)}`;

const faq = [
  { q: "Quel est le prix moyen au m² à Paris en 2026 ?", a: "Le prix médian à Paris se situe autour de 9 700 à 9 800 €/m² au premier semestre 2026 selon les notaires et les principaux observatoires, avec de fortes disparités : d'environ 7 300 €/m² dans le 19e à plus de 15 000 €/m² dans le 6e arrondissement." },
  { q: "Les prix immobiliers à Paris baissent-ils en 2026 ?", a: "Après la correction de 2023-2024 (environ -7 % sur deux ans), le marché s'est stabilisé en 2025 et affiche une légère progression en 2026 (+1 à +2 % sur un an selon les sources), portée par la baisse progressive des taux et le retour des acheteurs, notamment dans le nord-est parisien." },
  { q: "Comment connaître précisément la valeur de mon appartement à Paris ?", a: "Les tableaux de prix sont des moyennes. La valeur réelle de votre bien dépend de l'étage, de l'exposition, de l'état, du DPE et du standing de l'immeuble. Une estimation gratuite par Marie Houlier vous donnera un chiffre précis pour votre bien spécifique." },
  { q: "Pourquoi les prix varient-ils autant dans un même arrondissement ?", a: "Dans le 16e par exemple, un appartement rue de Passy peut valoir 30 à 40 % de plus qu'un appartement comparable près de la porte de Saint-Cloud. L'exposition, la proximité des transports, la vue et le standing de l'immeuble expliquent ces écarts au sein d'un même arrondissement." },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Prix m² Paris 2026", item: "https://sellmyhome.fr/prix-m2-paris" }] }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Prix m² Paris 2026</span></nav>
      <h1>Prix au m² à Paris en 2026 — tableau par arrondissement</h1>
      <Byline readingTime={4} />
      <p className="seo-intro">Vous souhaitez connaître la valeur de votre bien immobilier à Paris ? Ce tableau présente les <strong>fourchettes de prix au m² par arrondissement à Paris en 2026</strong>, basées sur les données des Notaires de France et les transactions DVF. Ces prix sont indicatifs : chaque bien est unique et mérite une estimation personnalisée.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Estimer mon bien gratuitement — Sous 24h</Link></div>

      <h2>Tableau complet des prix immobiliers à Paris en 2026</h2>
      <div className="prix-table-wrapper">
        <table className="prix-table">
          <thead><tr><th>Arrondissement</th><th>Prix min (€/m²)</th><th>Prix max (€/m²)</th><th>Tendance</th><th>Caractéristique</th></tr></thead>
          <tbody>{prix.map((r) => (
            <tr key={r.arr}>
              <td><Link href={`/estimation-immobiliere/${slugOf(r.arr)}`} className="table-link">Paris {r.arr}</Link></td>
              <td>{r.min.toLocaleString("fr-FR")} €</td>
              <td>{r.max.toLocaleString("fr-FR")} €</td>
              <td className={r.t.includes("Hausse") ? "td-up" : r.t.includes("Légère") ? "td-down" : "td-stable"}>{r.t}</td>
              <td style={{fontSize:"12px",color:"var(--color-text-soft)"}}>{r.note}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p className="prix-source">Sources : DVF Etalab, Notaires du Grand Paris, données 1er semestre 2026. Fourchettes indicatives pour appartements anciens en bon état. Cliquez sur un arrondissement pour le détail par quartier.</p>

      <h2>Comment lire ce tableau de prix ?</h2>
      <p>Les fourchettes indiquent les prix médians pour des appartements en bon état dans l'arrondissement. Plusieurs facteurs peuvent faire varier le prix de votre bien au-delà ou en dessous de ces fourchettes :</p>
      <ul className="seo-list">
        <li><strong>Le DPE (performance énergétique)</strong> — un logement F ou G se vend désormais 12 à 22 % en dessous du marché par rapport à un bien classé C/D, et la tendance s'accentue avec les nouvelles lois.</li>
        <li><strong>L'étage et l'ascenseur</strong> — un rez-de-chaussée sans extérieur vaut 15 % de moins qu'un étage élevé avec vue dégagée.</li>
        <li><strong>L'état de la copropriété</strong> — travaux votés, charges élevées, fond de travaux insuffisant : impact direct sur la valeur perçue par les acheteurs.</li>
        <li><strong>La micro-localisation</strong> — rue calme, proximité d'un parc ou marché : plus-value concrète de 5 à 15 % par rapport à la moyenne d'arrondissement.</li>
        <li><strong>La surface</strong> — les petites surfaces (studios, T2) affichent des prix au m² supérieurs aux grandes surfaces dans le même secteur.</li>
      </ul>

      <h2>Évolution des prix immobiliers à Paris : tendances 2026</h2>
      <p>Après deux années de correction (2023-2024, environ -7 % cumulés), le marché parisien s'est stabilisé en 2025 et repart légèrement à la hausse en 2026 (+1 à +2 % sur un an selon les observatoires). La baisse progressive des taux d'intérêt a redonné un peu de pouvoir d'achat aux acquéreurs. Les arrondissements du nord-est (9e, 10e, 17e, 18e, 19e, 20e) connaissent les évolutions les plus dynamiques, portés par un effet de rattrapage et l'attractivité croissante de ces secteurs.</p>
      <p>Les arrondissements de prestige (6e, 7e, 4e) restent les plus chers de Paris, avec une clientèle internationale toujours présente. Le réseau Leggett auquel SellMyHome est affilié touche directement ces acquéreurs étrangers. À l'inverse, le 19e arrondissement demeure le secteur le plus accessible de la capitale.</p>

      <AdvisorBox source="prix-m2-paris" />

      <h2>Et en proche banlieue ? Prix m² 2026 en Île-de-France</h2>
      <p>Plusieurs communes limitrophes affichent des prix comparables à certains arrondissements parisiens. Fourchettes indicatives pour des appartements anciens en bon état :</p>
      <div className="seo-table-wrapper">
        <table className="seo-table">
          <thead><tr><th>Commune</th><th>Fourchette €/m²</th><th>Département</th></tr></thead>
          <tbody>{IDF.map((c) => (
            <tr key={c.slug}>
              <td><Link href={`/estimation-immobiliere/${c.slug}`} className="table-link">{c.name}</Link></td>
              <td style={{ whiteSpace: "nowrap" }}>{fmtEur(c.min)} – {fmtEur(c.max)}</td>
              <td>{c.dept}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p>Pour une vue d'ensemble, consultez notre page <Link href="/estimation-ile-de-france">estimation immobilière en Île-de-France</Link>.</p>

      <h2>FAQ — Prix immobiliers Paris 2026</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/estimation-paris">Estimation immobilière gratuite à Paris</Link> · <Link href="/vendre-a-paris">Vendre un appartement à Paris</Link> · <Link href="/chasseur-paris">Chasseur immobilier Paris</Link> · <Link href="/diagnostic-immobilier-paris">Diagnostics immobiliers</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Obtenir mon estimation personnalisée</Link></div>
    </main>
  </>);
}