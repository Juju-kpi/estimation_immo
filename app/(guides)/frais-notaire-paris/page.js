export const metadata = {
  title: "Frais de notaire Paris 2026 : prix & calcul",
  description: "Frais de notaire à Paris en 2026 : environ 8 % dans l'ancien (droits de mutation 6,32 %), 2 à 3 % dans le neuf. Simulateur gratuit, exemples et prix du notaire.",
  alternates: { canonical: "https://sellmyhome.fr/frais-notaire-paris" },
  openGraph: { images: [OG_IMAGE], title: "Frais de notaire Paris 2026 : prix & calcul | SellMyHome", description: "Frais de notaire à Paris en 2026 : environ 8 % dans l'ancien (droits de mutation 6,32 %), 2 à 3 % dans le neuf. Simulateur gratuit, exemples et prix du notaire.", url: "https://sellmyhome.fr/frais-notaire-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";
import NotaryCalculator from "../../../components/NotaryCalculator";
import { fraisNotaire, round100 } from "../../../lib/notaire";

const eur = (n) => `${round100(n).toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ")} €`;
const EXEMPLES = [300000, 500000, 800000, 1200000, 2000000];

const faq = [
  { q: "Quel est le montant des frais de notaire à Paris en 2026 ?", a: "Pour un bien ancien à Paris, les frais de notaire représentent environ 7,5 à 8 % du prix, car les droits de mutation parisiens sont de 6,32 % depuis avril 2025. Pour un bien neuf (VEFA), ils tombent à environ 2 à 3 %. Sur un appartement ancien à 600 000 €, comptez environ 46 000 €." },
  { q: "Quel est le prix d'un notaire à Paris ?", a: "La rémunération propre du notaire (les émoluments) suit un barème national dégressif : elle représente environ 1 % du prix d'un appartement parisien, TVA comprise, soit environ 6 200 € pour un bien à 600 000 €. Le reste des « frais de notaire » correspond surtout à des taxes reversées aux collectivités." },
  { q: "Primo-accédant : payez-vous moins de frais de notaire à Paris ?", a: "Oui. Si vous achetez votre résidence principale sans avoir été propriétaire de votre résidence principale au cours des deux dernières années, vous échappez à la hausse de 2025 : les droits de mutation restent à 5,81 % au lieu de 6,32 %, soit environ 3 000 € d'économie sur un bien à 600 000 €." },
  { q: "Notaire ou agent immobilier : qui fait quoi lors d'un achat à Paris ?", a: "L'agent immobilier estime, commercialise le bien, organise les visites et négocie le prix. Le notaire, officier public, rédige et authentifie la promesse ou le compromis puis l'acte de vente, vérifie la situation juridique du bien et collecte les taxes. Les deux interviennent souvent ensemble dans une même vente." },
  { q: "Pourquoi appelle-t-on ça 'frais de notaire' alors que le notaire en garde peu ?", a: "Le terme est trompeur : sur la totalité des 'frais de notaire', environ 80 % correspondent aux droits de mutation (taxes reversées à l'État, au département et à la commune), 10 % à des débours (documents, formalités) et seulement 10 % environ constituent la rémunération réelle du notaire (émoluments), réglementée par décret." },
  { q: "Les frais de notaire sont-ils négociables ?", a: "Les émoluments du notaire sont en partie négociables pour les transactions supérieures à 100 000 € (remise possible jusqu'à 20 % sur la part proportionnelle au-delà de ce seuil), mais les droits de mutation, qui constituent l'essentiel du montant, sont fixes et non négociables." },
  { q: "Qui paie les frais de notaire, l'acheteur ou le vendeur ?", a: "Sauf accord contraire entre les parties, les frais de notaire (frais d'acquisition) sont systématiquement à la charge de l'acheteur. Le vendeur, lui, peut avoir des frais annexes : diagnostics, mainlevée d'hypothèque éventuelle, et impôt sur la plus-value si applicable." },
  { q: "Peut-on réduire les frais de notaire en distinguant le prix du mobilier ?", a: "Oui, si le bien est vendu meublé, la valeur du mobilier (cuisine équipée, électroménager, etc.) peut être déduite du prix soumis aux droits de mutation, à condition qu'elle soit justifiée et raisonnable (généralement plafonnée à 5 % du prix total). Cette pratique doit rester rigoureuse pour éviter tout redressement." },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Frais de notaire Paris", item: "https://sellmyhome.fr/frais-notaire-paris" }] }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Frais de notaire Paris</span></nav>
      <h1>Frais de notaire à Paris en 2026 : prix, calcul et simulateur gratuit</h1>
      <Byline readingTime={5} />
      <p className="seo-intro">Que vous soyez <strong>acheteur ou vendeur à Paris</strong>, comprendre les frais de notaire vous aide à anticiper le budget global de votre transaction. Depuis avril 2025, les <strong>droits de mutation à Paris sont passés à 6,32 %</strong> : ce guide intègre ce nouveau taux, détaille la composition réelle des frais et vous permet de les calculer en quelques secondes.</p>

      <NotaryCalculator />

      <h2>De quoi sont composés les "frais de notaire" ?</h2>
      <p>L'appellation "frais de notaire" regroupe en réalité trois éléments bien distincts, et le notaire n'en perçoit qu'une fraction :</p>
      <ul className="seo-list">
        <li><strong>Les droits de mutation à titre onéreux (DMTO)</strong> — <strong>6,32 % du prix à Paris</strong> depuis avril 2025 (5,81 % pour les primo-accédants), dont une part pour le département, une part pour la commune et une part pour l'État. C'est de loin le poste le plus important, plus de 80 % du total.</li>
        <li><strong>Les émoluments du notaire</strong> — la rémunération réelle du notaire, fixée par un barème national dégressif par tranches de prix. Représente environ 1 % du prix pour les transactions courantes.</li>
        <li><strong>Les débours et frais annexes</strong> — sommes avancées par le notaire pour le compte du client : extraits cadastraux, copies d'actes, frais de publication au service de la publicité foncière, etc.</li>
      </ul>

      <h2>Ancien vs neuf : une différence majeure</h2>
      <p>Pour un bien ancien (la grande majorité des transactions à Paris), les frais de notaire représentent <strong>environ 7,5 à 8 % du prix</strong>. Pour un bien neuf ou en l'état futur d'achèvement (VEFA), les droits de mutation sont fortement réduits, ramenant le total à environ <strong>2 à 3 %</strong>.</p>
      <p>À Paris, où le marché est dominé par l'ancien haussmannien, il est essentiel d'intégrer ces quelque 8 % dans votre budget d'achat dès le départ — un point que Marie aborde systématiquement avec les acquéreurs qu'elle accompagne dans le cadre de son service de <Link href="/chasseur-paris">chasseur immobilier</Link>.</p>

      <h2>Exemples de calcul pour Paris</h2>
      <div className="seo-table-wrapper">
        <table className="seo-table">
          <thead><tr><th>Prix du bien</th><th>Ancien</th><th>Ancien, primo-accédant</th><th>Neuf (VEFA)</th></tr></thead>
          <tbody>
            {EXEMPLES.map((p) => {
              const a = fraisNotaire(p), pr = fraisNotaire(p, { primo: true }), n = fraisNotaire(p, { neuf: true });
              return <tr key={p}><td><strong>{eur(p)}</strong></td><td>≈ {eur(a.total)}</td><td>≈ {eur(pr.total)}</td><td>≈ {eur(n.total)}</td></tr>;
            })}
          </tbody>
        </table>
      </div>
      <p className="prix-source">Estimations indicatives pour Paris (75) : droits de mutation 6,32 % (5,81 % primo-accédant, 0,715 % dans le neuf), émoluments selon le barème réglementé TTC, contribution de sécurité immobilière et débours. Frais de prêt et de garantie non inclus.</p>

      <h2>Combien coûte un notaire à Paris ?</h2>
      <p>C'est la question que l'on se pose souvent en voyant le montant total. En réalité, <strong>la rémunération du notaire (ses émoluments) ne représente qu'environ 1 % du prix</strong> d'un appartement parisien : elle est fixée par un barème national, identique partout en France, dégressif par tranches de prix. Tout le reste est constitué de taxes et de frais avancés pour votre compte.</p>
      <p>Sur un achat à 600 000 € dans l'ancien, par exemple, le notaire perçoit environ 6 200 € TTC d'émoluments, alors que les droits de mutation atteignent près de 38 000 €. Au-delà de 100 000 €, une remise sur les émoluments (jusqu'à 20 % sur cette fraction) peut être accordée par le notaire.</p>

      <h2>Comment réduire légalement les frais de notaire ?</h2>
      <ul className="seo-list">
        <li><strong>Déduire la valeur du mobilier</strong> — un appartement vendu avec cuisine équipée, électroménager et meubles peut voir son assiette de calcul réduite, dans une limite raisonnable et justifiée (factures à l'appui).</li>
        <li><strong>Négocier les émoluments</strong> — pour la part du prix dépassant 100 000 €, une remise sur les émoluments (jusqu'à 20 %) peut être demandée au notaire, notamment pour les transactions de montant élevé fréquentes dans les arrondissements premium.</li>
        <li><strong>Privilégier le neuf si le projet le permet</strong> — l'écart de 5 points entre ancien et neuf représente une économie substantielle, à mettre en balance avec la rareté du neuf dans Paris intra-muros.</li>
      </ul>

      <AdvisorBox source="frais-notaire-paris" />

      <h2>FAQ — Frais de notaire Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Vendre un appartement à Paris</Link> · <Link href="/diagnostic-immobilier-paris">Diagnostics immobiliers obligatoires</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/chasseur-paris">Chasseur immobilier Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link></div>
    </main>
  </>);
}