export const metadata = {
  title: "Vendre un appartement hérité à Paris : guide",
  description: "Succession à Paris : quand vendre un bien hérité, comment gérer l'indivision et la fiscalité ? Marie Houlier accompagne les héritiers avec discrétion.",
  alternates: { canonical: "https://sellmyhome.fr/vendre-appartement-succession-paris" },
  openGraph: { images: [OG_IMAGE], title: "Vendre un appartement hérité à Paris : guide | SellMyHome", description: "Succession à Paris : quand vendre un bien hérité, comment gérer l'indivision et la fiscalité ? Marie Houlier accompagne les héritiers avec discrétion.", url: "https://sellmyhome.fr/vendre-appartement-succession-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";

const faq = [
  { q: "Peut-on vendre un appartement hérité avant le règlement de la succession ?", a: "Non. La vente d'un bien immobilier en succession ne peut intervenir qu'après l'acceptation de la succession et l'établissement de l'acte de notoriété. En pratique, un délai de 3 à 6 mois est souvent nécessaire avant de pouvoir signer un compromis de vente." },
  { q: "Que se passe-t-il si les héritiers ne sont pas d'accord pour vendre ?", a: "En situation d'indivision, un héritier peut forcer la vente judicialement (action en partage). Cependant, cette procédure est longue et coûteuse. Marie peut jouer un rôle de médiation informelle pour trouver un accord amiable et valoriser au mieux le bien pour toutes les parties." },
  { q: "Faut-il payer des impôts sur la vente d'un bien hérité à Paris ?", a: "La plus-value imposable se calcule sur la différence entre le prix de vente et la valeur vénale déclarée dans la succession. Si le bien est vendu rapidement après l'héritage et à la valeur déclarée, la plus-value est souvent nulle ou très faible. Un notaire peut calculer précisément votre situation fiscale." },
  { q: "Comment estimer un bien immobilier dans le cadre d'une succession ?", a: "L'estimation est obligatoire pour déclarer la valeur du bien dans l'actif successoral. Une sous-évaluation expose les héritiers à un redressement fiscal. Marie Houlier réalise des estimations précises, basées sur les transactions réelles DVF, valides pour usage successoral." },
  { q: "Combien de temps prend la vente d'un bien en succession à Paris ?", a: "Comptez 6 à 12 mois au total : 3 à 6 mois pour le règlement de la succession, puis 2 à 3 mois pour la vente elle-même (compromis à acte authentique). Marie peut accélérer la phase de vente en mobilisant son réseau d'acquéreurs qualifiés dès que la situation juridique est clarifiée." },
];

const etapes = [
  { num: "01", titre: "Acte de notoriété et acceptation", desc: "Le notaire établit qui sont les héritiers et dans quelle proportion. C'est le point de départ de toute la procédure. Marie peut vous orienter vers des notaires partenaires expérimentés en successions parisiennes." },
  { num: "02", titre: "Estimation de la valeur vénale", desc: "Marie réalise une estimation précise du bien pour la déclaration de succession et pour fixer le prix de vente. Cette estimation est documentée et argumentée avec les transactions récentes du secteur." },
  { num: "03", titre: "Accord entre héritiers", desc: "Marie facilite le consensus sur le prix et les conditions de vente entre les différentes parties, y compris en cas d'héritiers géographiquement dispersés ou de situations familiales complexes." },
  { num: "04", titre: "Mise en vente et diffusion", desc: "Une fois l'accord obtenu, votre bien est diffusé sur les portails nationaux et le réseau Leggett international. Marie organise les visites et filtre les acquéreurs sérieux." },
  { num: "05", titre: "Compromis et acte authentique", desc: "Marie coordonne avec le notaire de la succession pour que la vente s'intègre parfaitement dans le règlement successoral. Vous êtes accompagné jusqu'à la signature finale." },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Vendre à Paris", item: "https://sellmyhome.fr/vendre-a-paris" }, { "@type": "ListItem", position: 3, name: "Vendre en succession", item: "https://sellmyhome.fr/vendre-appartement-succession-paris" }] }} />
    <main className="seo-page">
      <nav className="breadcrumb">
        <Link href="/">Accueil</Link> › <Link href="/vendre-a-paris">Vendre à Paris</Link> › <span>Succession</span>
      </nav>
      <h1>Vendre un appartement en succession à Paris — guide complet</h1>
      <Byline readingTime={6} />
      <p className="seo-intro">
        Vous venez de perdre un proche et héritez d'un bien immobilier à Paris. Entre le chagrin, les démarches administratives et les questions entre héritiers, la vente d'un bien en succession est souvent l'une des étapes les plus délicates. Marie Houlier vous accompagne avec <strong>discrétion, patience et expertise</strong> — du règlement successoral jusqu'à la signature chez le notaire.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn">Estimer le bien hérité — Gratuit &amp; confidentiel</Link>
      </div>

      <h2>Succession immobilière à Paris : ce qu'il faut savoir</h2>
      <p>Paris concentre une part significative du patrimoine immobilier français. Les successions y sont souvent complexes : biens détenus en indivision depuis plusieurs générations, appartements haussmanniens dont la valeur a décuplé, héritiers parfois en désaccord sur le prix ou le moment de vendre.</p>
      <p>La première chose à comprendre : on ne peut pas vendre un bien hérité avant que la succession soit réglée juridiquement. Le notaire en charge de la succession doit d'abord établir l'acte de notoriété et l'acte de partage (ou de licitation en cas de désaccord). Ce n'est qu'ensuite que la vente peut commencer.</p>

      <div className="seo-callout">
        <p><strong>Important :</strong> la valeur déclarée dans la succession doit être la valeur vénale réelle du bien. Une sous-évaluation expose les héritiers à un redressement fiscal par l'administration. Marie Houlier réalise des estimations documentées et défendables, basées sur les transactions DVF réelles dans votre secteur.</p>
      </div>

      <h2>Les 5 étapes d'une vente en succession à Paris</h2>
      <div className="etapes-grid">
        {etapes.map((e, i) => (
          <div key={i} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      <h2>Indivision : comment vendre quand les héritiers ne s'accordent pas</h2>
      <p>L'indivision est la situation la plus fréquente et la plus délicate. Plusieurs héritiers possèdent chacun une quote-part du bien sans qu'il soit physiquement divisé. Pour vendre, il faut en principe l'accord de tous — sauf à passer par une procédure judiciaire (licitation), longue et coûteuse pour tous.</p>
      <p>Marie intervient souvent en amont comme tiers de confiance pour faciliter le dialogue entre héritiers. Elle présente des données de marché objectives (prix au m² dans l'arrondissement, transactions récentes comparables) qui permettent de s'entendre sur un prix juste. Un accord amiable est toujours préférable à une procédure judiciaire qui peut durer 2 à 3 ans.</p>

      <h2>Fiscalité de la vente d'un bien hérité</h2>
      <p>La plus-value imposable sur la vente d'un bien hérité se calcule sur la différence entre :</p>
      <ul className="seo-list">
        <li><strong>Le prix de cession</strong> — le prix de vente net vendeur.</li>
        <li><strong>Le prix d'acquisition</strong> — la valeur vénale déclarée dans la succession (et non le prix d'achat initial par le défunt).</li>
      </ul>
      <p>Si vous vendez au prix déclaré dans la succession, la plus-value est nulle. Si la valeur du bien a augmenté entre la date du décès et la date de vente, une plus-value imposable apparaît. Des abattements pour durée de détention s'appliquent selon la durée de possession du défunt. Votre notaire calculera précisément votre situation.</p>

      <h2>Pourquoi choisir Marie Houlier pour une vente en succession à Paris</h2>
      <p>Les ventes en succession demandent deux qualités rarement réunies chez un même interlocuteur : une excellente maîtrise du marché parisien pour valoriser le bien au juste prix, et une vraie sensibilité humaine pour accompagner des familles souvent en période de deuil.</p>
      <p>Marie travaille en étroite collaboration avec les notaires parisiens spécialisés en successions. Elle s'adapte aux contraintes de chaque famille — héritiers en province ou à l'étranger, délais de succession, contraintes fiscales — et prend en charge toute la logistique de la vente pour que vous n'ayez qu'à donner votre accord sur les décisions importantes.</p>

      <AdvisorBox source="vendre-appartement-succession-paris" />

      <h2>FAQ — Vente en succession à Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Guide complet pour vendre à Paris</Link> · <Link href="/estimation-paris">Estimation immobilière gratuite</Link> · <Link href="/diagnostic-immobilier-paris">Diagnostics obligatoires</Link> · <Link href="/frais-notaire-paris">Frais de notaire Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn">Parler à Marie de ma succession</Link>
      </div>
    </main>
  </>);
}