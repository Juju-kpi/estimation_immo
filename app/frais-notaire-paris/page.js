export const metadata = {
  title: "Frais de notaire Paris 2026 — calcul, montant, simulateur",
  description: "Calculez les frais de notaire pour l'achat d'un bien immobilier à Paris en 2026. Ancien vs neuf, droits de mutation, émoluments : tout comprendre avec un simulateur gratuit. Conseils de Marie Houlier, agente Leggett.",
  alternates: { canonical: "https://sellmyhome.fr/frais-notaire-paris" },
  openGraph: { title: "Frais de notaire Paris 2026 — Simulateur gratuit | SellMyHome", description: "Calculez les frais de notaire pour votre achat immobilier à Paris. Simulateur gratuit, ancien et neuf.", url: "https://sellmyhome.fr/frais-notaire-paris" },
};
import Link from "next/link";
import Script from "next/script";

const faq = [
  { q: "Quel est le montant des frais de notaire à Paris en 2026 ?", a: "Pour un bien ancien à Paris, les frais de notaire représentent en moyenne 7 à 8 % du prix de vente. Pour un bien neuf (VEFA), ils sont réduits à environ 2 à 3 %. Sur un appartement à 600 000 €, comptez donc environ 42 000 à 48 000 € de frais dans l'ancien." },
  { q: "Pourquoi appelle-t-on ça 'frais de notaire' alors que le notaire en garde peu ?", a: "Le terme est trompeur : sur la totalité des 'frais de notaire', environ 80 % correspondent aux droits de mutation (taxes reversées à l'État, au département et à la commune), 10 % à des débours (documents, formalités) et seulement 10 % environ constituent la rémunération réelle du notaire (émoluments), réglementée par décret." },
  { q: "Les frais de notaire sont-ils négociables ?", a: "Les émoluments du notaire sont en partie négociables pour les transactions supérieures à 100 000 € (remise possible jusqu'à 20 % sur la part proportionnelle au-delà de ce seuil), mais les droits de mutation, qui constituent l'essentiel du montant, sont fixes et non négociables." },
  { q: "Qui paie les frais de notaire, l'acheteur ou le vendeur ?", a: "Sauf accord contraire entre les parties, les frais de notaire (frais d'acquisition) sont systématiquement à la charge de l'acheteur. Le vendeur, lui, peut avoir des frais annexes : diagnostics, mainlevée d'hypothèque éventuelle, et impôt sur la plus-value si applicable." },
  { q: "Peut-on réduire les frais de notaire en distinguant le prix du mobilier ?", a: "Oui, si le bien est vendu meublé, la valeur du mobilier (cuisine équipée, électroménager, etc.) peut être déduite du prix soumis aux droits de mutation, à condition qu'elle soit justifiée et raisonnable (généralement plafonnée à 5 % du prix total). Cette pratique doit rester rigoureuse pour éviter tout redressement." },
];

export default function Page() {
  return (<>
    <Script id="faq-notaire" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    <Script id="bc-notaire" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Frais de notaire Paris", item: "https://sellmyhome.fr/frais-notaire-paris" }] }) }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Frais de notaire Paris</span></nav>
      <h1>Frais de notaire à Paris en 2026 — calcul et simulateur gratuit</h1>
      <p className="seo-intro">Que vous soyez <strong>acheteur ou vendeur à Paris</strong>, comprendre les frais de notaire vous aide à anticiper le budget global de votre transaction. Ce guide détaille leur composition réelle et propose un simulateur pour estimer le montant applicable à votre projet.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Estimer mon bien gratuitement</Link></div>

      <h2>De quoi sont composés les "frais de notaire" ?</h2>
      <p>L'appellation "frais de notaire" regroupe en réalité trois éléments bien distincts, et le notaire n'en perçoit qu'une fraction :</p>
      <ul className="seo-list">
        <li><strong>Les droits de mutation à titre onéreux (DMTO)</strong> — environ 5,8 % du prix dans la plupart des départements, dont une part pour le département, une part pour la commune et une part pour l'État. C'est de loin le poste le plus important, environ 80 % du total.</li>
        <li><strong>Les émoluments du notaire</strong> — la rémunération réelle du notaire, fixée par un barème national dégressif par tranches de prix. Représente environ 1 % du prix pour les transactions courantes.</li>
        <li><strong>Les débours et frais annexes</strong> — sommes avancées par le notaire pour le compte du client : extraits cadastraux, copies d'actes, frais de publication au service de la publicité foncière, etc.</li>
      </ul>

      <h2>Ancien vs neuf : une différence majeure</h2>
      <p>Pour un bien ancien (la grande majorité des transactions à Paris), les frais de notaire représentent <strong>7 à 8 % du prix de vente</strong>. Pour un bien neuf ou en l'état futur d'achèvement (VEFA), les droits de mutation sont fortement réduits, ramenant le total à environ <strong>2 à 3 %</strong>.</p>
      <p>À Paris, où le marché est dominé par l'ancien haussmannien, il est essentiel d'intégrer ces 7 à 8 % dans votre budget d'achat dès le départ — un point que Marie aborde systématiquement avec les acquéreurs qu'elle accompagne dans le cadre de son service de <Link href="/chasseur-paris">chasseur immobilier</Link>.</p>

      <h2>Exemples de calcul pour Paris</h2>
      <div className="seo-table-wrapper">
        <table className="seo-table">
          <thead><tr><th>Prix du bien</th><th>Frais ancien (≈7,5%)</th><th>Frais neuf (≈2,5%)</th></tr></thead>
          <tbody>
            <tr><td>300 000 €</td><td>≈ 22 500 €</td><td>≈ 7 500 €</td></tr>
            <tr><td>500 000 €</td><td>≈ 37 500 €</td><td>≈ 12 500 €</td></tr>
            <tr><td>800 000 €</td><td>≈ 60 000 €</td><td>≈ 20 000 €</td></tr>
            <tr><td>1 200 000 €</td><td>≈ 90 000 €</td><td>≈ 30 000 €</td></tr>
          </tbody>
        </table>
      </div>
      <p className="prix-source">Estimations indicatives basées sur les taux moyens en vigueur à Paris (75). Le montant exact dépend du barème notarial applicable et des éventuels frais annexes (prêt, garantie, etc.).</p>

      <h2>Comment réduire légalement les frais de notaire ?</h2>
      <ul className="seo-list">
        <li><strong>Déduire la valeur du mobilier</strong> — un appartement vendu avec cuisine équipée, électroménager et meubles peut voir son assiette de calcul réduite, dans une limite raisonnable et justifiée (factures à l'appui).</li>
        <li><strong>Négocier les émoluments</strong> — pour la part du prix dépassant 100 000 €, une remise sur les émoluments (jusqu'à 20 %) peut être demandée au notaire, notamment pour les transactions de montant élevé fréquentes dans les arrondissements premium.</li>
        <li><strong>Privilégier le neuf si le projet le permet</strong> — l'écart de 5 points entre ancien et neuf représente une économie substantielle, à mettre en balance avec la rareté du neuf dans Paris intra-muros.</li>
      </ul>

      <h2>FAQ — Frais de notaire Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Vendre un appartement à Paris</Link> · <Link href="/diagnostic-immobilier-paris">Diagnostics immobiliers obligatoires</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/chasseur-paris">Chasseur immobilier Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link></div>
    </main>
  </>);
}
