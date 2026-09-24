import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../components/JsonLd";
import AdvisorBox from "../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb, ZoneChips } from "../../components/SeoBits";
import { IDF, PARIS, fmtEur } from "../../lib/locations";
import { SITE_URL, PHONE_DISPLAY, OG_IMAGE } from "../../lib/site";

export const metadata = {
  title: "Estimation immobilière Île-de-France gratuite",
  description: "Estimation gratuite de votre bien en Île-de-France : Neuilly, Boulogne, Levallois, Vincennes, Versailles… Prix m² 2026 par ville, rappel de Marie sous 24h.",
  alternates: { canonical: `${SITE_URL}/estimation-ile-de-france` },
  openGraph: {
    images: [OG_IMAGE],
    title: "Estimation immobilière Île-de-France | SellMyHome",
    description: "Prix m² 2026 ville par ville et estimation gratuite par une agente Leggett. Rappel sous 24h.",
    url: `${SITE_URL}/estimation-ile-de-france`,
  },
};

const departements = [
  { code: "75", nom: "Paris", desc: "Les 20 arrondissements, du Marais au 16e : un marché où l'estimation se joue à la rue près.", href: "/estimation-paris" },
  { code: "92", nom: "Hauts-de-Seine", desc: "Neuilly, Levallois, Boulogne, Issy, Saint-Cloud, Courbevoie, Rueil : l'ouest résidentiel et familial, proche de La Défense." },
  { code: "94", nom: "Val-de-Marne", desc: "Vincennes, Saint-Mandé, Nogent-sur-Marne : l'est verdoyant, entre bois de Vincennes et bords de Marne." },
  { code: "93", nom: "Seine-Saint-Denis", desc: "Montreuil et les communes limitrophes de l'est parisien, portées par les nouvelles lignes de métro." },
  { code: "78", nom: "Yvelines", desc: "Versailles, Saint-Germain-en-Laye : villes patrimoniales, familles et clientèle internationale." },
];

const faq = [
  { q: "Intervenez-vous partout en Île-de-France ?", a: `Marie Houlier accompagne en priorité les vendeurs de Paris et des communes proches, notamment dans les Hauts-de-Seine, le Val-de-Marne, l'est parisien et les Yvelines. Pour toute autre commune d'Île-de-France, appelez-la au ${PHONE_DISPLAY} : elle vous dira franchement si elle peut vous accompagner elle-même, sinon elle vous orientera.` },
  { q: "Les prix de la petite couronne sont-ils proches de ceux de Paris ?", a: "Certaines communes limitrophes comme Neuilly-sur-Seine, Levallois-Perret, Saint-Mandé ou Vincennes affichent des prix comparables à plusieurs arrondissements parisiens. D'autres restent nettement plus accessibles. Dans tous les cas, la proximité du métro ou du RER, les écoles et l'état de la copropriété font la différence." },
  { q: "Une maison en Île-de-France s'estime-t-elle comme un appartement ?", a: "Non. Pour une maison, le prix au m² n'est qu'un repère : le terrain, l'exposition, l'état, la rue et la proximité des transports pèsent autant que la surface. Une visite est indispensable pour une estimation fiable." },
  { q: "L'estimation est-elle vraiment gratuite ?", a: "Oui, totalement gratuite et sans engagement, à Paris comme en Île-de-France. Marie n'est rémunérée que si vous décidez de lui confier la vente et que celle-ci aboutit." },
  { q: "Le réseau Leggett est-il utile en dehors de Paris ?", a: "Oui, en particulier pour les biens de standing et les villes qui attirent des familles internationales (Neuilly, Saint-Germain-en-Laye, Versailles, Boulogne). Votre bien est présenté à des acquéreurs étrangers en plus des portails français." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Estimation Île-de-France", path: "/estimation-ile-de-france" }])} />
      <JsonLd data={faqSchema(faq)} />

      <main className="seo-page">
        <Breadcrumb items={[{ name: "Estimation Île-de-France" }]} />
        <h1>Estimation immobilière gratuite en Île-de-France</h1>
        <Byline readingTime={5} />
        <p className="seo-intro">
          Vous vendez un appartement ou une maison à Paris ou en proche banlieue ? SellMyHome vous met directement en
          relation avec <strong>Marie Houlier</strong>, agente Leggett, pour une <strong>estimation gratuite, argumentée
          et sans engagement</strong>. Pas d'algorithme anonyme ni de centre d'appel : une vraie personne qui connaît le
          marché de votre ville et vous rappelle sous 24h.
        </p>
        <div className="seo-cta-block">
          <Link href="/estimation" className="primary-btn">Estimer mon bien en Île-de-France</Link>
        </div>

        <h2>Prix au m² en Île-de-France : les communes que nous suivons de près</h2>
        <p>
          Fourchettes indicatives 2026 pour des appartements anciens en bon état. Cliquez sur une ville pour voir le détail
          par quartier, les points de vigilance et les réponses aux questions les plus fréquentes.
        </p>
        <div className="seo-table-wrapper">
          <table className="seo-table">
            <thead><tr><th>Commune</th><th>Département</th><th>Fourchette €/m²</th><th>Tendance</th></tr></thead>
            <tbody>
              {IDF.map((c) => (
                <tr key={c.slug}>
                  <td><Link href={`/estimation-immobiliere/${c.slug}`} className="table-link">{c.name}</Link></td>
                  <td>{c.dept}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{fmtEur(c.min)} – {fmtEur(c.max)}</td>
                  <td className={c.trend === "hausse" ? "td-up" : "td-stable"}>{c.trend === "hausse" ? "↗ Hausse" : "→ Stable"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prix-source">Sources : données publiques DVF (Etalab) et indicateurs des Notaires du Grand Paris, 1er semestre 2026. Fourchettes indicatives, à confirmer par une estimation personnalisée.</p>

        <h2>Nos secteurs d'intervention, département par département</h2>
        <div className="quartier-grid">
          {departements.map((d) => (
            <div key={d.code} className="quartier-card">
              <h3>{d.nom} ({d.code})</h3>
              <p>{d.desc}</p>
              {d.href && <Link href={d.href} className="etape-lien">Voir l'estimation à Paris →</Link>}
            </div>
          ))}
        </div>

        <h2>Estimer en proche banlieue : ce qui change par rapport à Paris</h2>
        <p>
          En Île-de-France, la valeur d'un bien dépend encore plus qu'à Paris de sa <strong>desserte</strong> : quelques
          minutes à pied d'une gare RER, d'une station de métro ou d'une future gare du Grand Paris Express peuvent peser
          lourd dans la décision des acheteurs. Les <strong>écoles</strong>, le <strong>calme</strong> et la présence d'un
          <strong> extérieur ou d'un parking</strong> sont aussi des critères décisifs pour les familles qui quittent Paris.
        </p>
        <p>
          Le bâti est également plus varié : maisons meulières, résidences des années 1970 avec parc, écoquartiers récents
          aux bons DPE… Chaque type de bien a sa clientèle et doit être comparé à des ventes réellement équivalentes. C'est
          tout l'intérêt d'une estimation réalisée par une professionnelle plutôt que par un simulateur en ligne.
        </p>

        <div className="seo-callout">
          <p><strong>Un seul interlocuteur, où que soit votre bien :</strong> Marie suit personnellement chaque dossier, de l'estimation à la signature chez le notaire. Si vous vivez loin de votre bien (province, étranger), elle organise les visites et vous tient informé à chaque étape.</p>
        </div>

        <h2>Toutes les communes</h2>
        <ZoneChips zones={IDF} label="Communes d'Île-de-France" />
        <h2>Paris, arrondissement par arrondissement</h2>
        <ZoneChips zones={PARIS} label="Arrondissements de Paris" />

        <AdvisorBox source="hub_idf" title="Votre bien est en Île-de-France ?" />

        <h2>FAQ — Estimation immobilière en Île-de-France</h2>
        <FaqList faq={faq} />

        <div className="seo-internal-links">
          <p>À lire aussi : <Link href="/estimation-paris">Estimation immobilière à Paris</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/vendre-a-paris">Guide pour vendre</Link> · <Link href="/vendre-avant-achat-paris">Vendre avant d'acheter</Link> · <Link href="/agence-immobiliere-paris">Qui sommes-nous</Link></p>
        </div>
        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link>
        </div>
      </main>
    </>
  );
}
