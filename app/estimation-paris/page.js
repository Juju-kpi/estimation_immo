export const metadata = {
  title: "Estimation immobilière Paris gratuite — appartement & maison par arrondissement",
  description: "Estimation immobilière gratuite à Paris par Marie Houlier, agente Leggett depuis 40 ans. Analyse arrondissement par arrondissement, DPE, copropriété, exposition. Réponse sous 24h, sans engagement.",
  alternates: { canonical: "https://sellmyhome.fr/estimation-paris" },
  openGraph: { title: "Estimation immobilière Paris gratuite | SellMyHome", description: "Estimation gratuite à Paris par une experte Leggett depuis 40 ans. Précise, rapide, sans engagement.", url: "https://sellmyhome.fr/estimation-paris" },
};
import Link from "next/link";
import Script from "next/script";

const faq = [
  { q: "Comment se calcule une estimation immobilière à Paris ?", a: "L'estimation tient compte de la surface Carrez, de l'arrondissement et de la rue précise, de l'étage, de l'exposition, de l'état général, du DPE et des transactions récentes dans le même secteur (base DVF des Notaires de France). À Paris, deux biens identiques en surface peuvent varier de 20 à 30 % selon la rue." },
  { q: "L'estimation immobilière est-elle gratuite ?", a: "Oui, totalement gratuite et sans engagement. SellMyHome ne facture aucun frais pour l'estimation. Notre rémunération intervient uniquement en cas de vente réussie, ce qui aligne nos intérêts avec les vôtres." },
  { q: "Quelle est la différence entre une estimation en ligne et une visite physique ?", a: "L'estimation en ligne donne une fourchette de prix en quelques minutes. La visite physique de Marie prend en compte des éléments que les algorithmes ne voient pas : luminosité, qualité des finitions, bruit de rue, cachet de l'immeuble. Ces éléments peuvent faire varier le prix de 5 à 15 %." },
  { q: "Combien vaut mon appartement à Paris en 2026 ?", a: "Les prix varient de 7 500 €/m² dans le 19e/20e à plus de 14 000 €/m² dans le 6e/7e. Mais la valeur réelle dépend d'une dizaine de critères propres à votre bien. Seule une estimation personnalisée vous donnera un chiffre fiable." },
  { q: "Quel délai pour vendre un appartement à Paris ?", a: "Le délai moyen est de 60 à 90 jours pour un bien correctement estimé. Un bien surestimé peut rester 6 à 12 mois sur le marché avant d'être bradé. C'est pourquoi l'estimation initiale est déterminante." },
  { q: "SellMyHome peut-il estimer un bien dans tous les arrondissements ?", a: "Oui. Marie intervient dans les 20 arrondissements de Paris, avec une expertise particulière dans les 6e, 7e, 8e, 15e, 16e et 17e. Elle connaît les micro-marchés et les spécificités de chaque type d'immeuble." },
];

const secteurs = [
  { code: "1–4e", nom: "Centre historique & Marais", fourchette: "11 000 – 15 000 €/m²", note: "Forte demande internationale, immeubles anciens, Île Saint-Louis" },
  { code: "5–6e", nom: "Rive gauche prestige", fourchette: "11 500 – 17 000 €/m²", note: "Saint-Germain, Luxembourg — prix au sommet de Paris" },
  { code: "7–8e", nom: "Beaux quartiers Ouest", fourchette: "11 000 – 16 500 €/m²", note: "Invalides, Champs-Élysées, clientèle premium nationale et internationale" },
  { code: "9–11e", nom: "Paris central & bobo", fourchette: "9 000 – 13 000 €/m²", note: "Pigalle, Oberkampf — forte hausse depuis 5 ans" },
  { code: "12–15e", nom: "Paris résidentiel Sud", fourchette: "8 500 – 12 000 €/m²", note: "Idéal familles, marché stable, bonne qualité de vie" },
  { code: "16–17e", nom: "Ouest résidentiel", fourchette: "9 000 – 14 000 €/m²", note: "Trocadéro, Passy, Batignolles — très variés selon la rue" },
  { code: "18–20e", nom: "Paris Nord-Est dynamique", fourchette: "7 500 – 11 000 €/m²", note: "Montmartre, Belleville — meilleur potentiel de valorisation" },
];

export default function Page() {
  return (<>
    <Script id="faq-ep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    <Script id="bc-ep" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Estimation Paris", item: "https://sellmyhome.fr/estimation-paris" }] }) }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Estimation immobilière Paris</span></nav>
      <h1>Estimation immobilière gratuite à Paris</h1>
      <p className="seo-intro">Vous envisagez de <strong>vendre votre appartement ou maison à Paris</strong> ? Une estimation immobilière précise est la première étape indispensable. SellMyHome vous propose une estimation gratuite, réalisée par Marie Houlier, agente Leggett et spécialiste du marché parisien depuis plus de 40 ans, arrondissement par arrondissement.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite — Réponse sous 24h</Link></div>

      <h2>Pourquoi une estimation professionnelle est indispensable à Paris ?</h2>
      <p>Paris est l'un des marchés immobiliers les plus complexes au monde. Les prix varient du simple au double entre deux rues du même arrondissement. Un bien trop cher reste sur le marché, accumule les visites sans offres, puis se brade. Un bien sous-estimé fait perdre des dizaines de milliers d'euros en quelques heures.</p>
      <p>Les outils d'estimation automatique (Meilleurs Agents, Seloger) se basent sur des moyennes. Marie Houlier, elle, connaît votre immeuble, votre rue, la copropriété et le micro-marché de votre quartier. Cette connaissance terrain est irremplaçable.</p>

      <h2>Prix au m² à Paris en 2026 — par grand secteur</h2>
      <p>Ces fourchettes sont indicatives. Consultez notre <Link href="/prix-m2-paris">tableau complet des prix par arrondissement</Link> pour le détail.</p>
      <div className="seo-table-wrapper">
        <table className="seo-table">
          <thead><tr><th>Secteur</th><th>Fourchette €/m²</th><th>Caractéristiques</th></tr></thead>
          <tbody>{secteurs.map((r, i) => <tr key={i}><td><strong>Paris {r.code}</strong><br /><small>{r.nom}</small></td><td style={{whiteSpace:"nowrap"}}>{r.fourchette}</td><td style={{fontSize:"13px"}}>{r.note}</td></tr>)}</tbody>
        </table>
      </div>

      <h2>Les critères qui déterminent le prix de votre bien à Paris</h2>
      <ul className="seo-list">
        <li><strong>L'arrondissement et la rue exacte</strong> — même dans le 16e, une rue calme vaut 20 % de plus qu'une rue passante.</li>
        <li><strong>La surface Carrez et l'agencement</strong> — studios et 2 pièces affichent des prix au m² supérieurs aux grandes surfaces.</li>
        <li><strong>L'étage et l'exposition</strong> — dernier étage avec vue dégagée : +15 à 25 % vs rez-de-chaussée sur cour.</li>
        <li><strong>L'état général et les travaux récents</strong> — cuisine refaite, salle de bain neuve, double vitrage : +5 à 15 %.</li>
        <li><strong>Le DPE (performance énergétique)</strong> — les logements F et G subissent une décote légale croissante depuis 2025.</li>
        <li><strong>La copropriété</strong> — charges élevées, travaux votés en AG, immeuble mal entretenu : impact direct sur la valeur.</li>
        <li><strong>L'immeuble et le gardien</strong> — haussmannien avec gardien vs copropriété 70s sans ascenseur : écart de 10 à 20 %.</li>
      </ul>

      <h2>Comment fonctionne l'estimation gratuite SellMyHome ?</h2>
      <ol className="seo-list">
        <li><strong>Formulaire en ligne (3 min)</strong> — adresse, type de bien, surface, étage, état général. Données 100 % confidentielles.</li>
        <li><strong>Analyse par Marie</strong> — croisement avec les transactions récentes DVF et connaissance terrain du quartier.</li>
        <li><strong>Rappel sous 24h</strong> — Marie vous présente une fourchette argumentée avec les comparables dans votre secteur.</li>
        <li><strong>Visite optionnelle</strong> — Marie visite pour affiner et prendre en compte les éléments qualitatifs.</li>
        <li><strong>Décision libre</strong> — aucune obligation de confier la vente après l'estimation.</li>
      </ol>

      <h2>Les erreurs à éviter pour estimer son bien à Paris</h2>
      <p>Se baser sur les annonces en ligne est la principale erreur : les prix affichés ne reflètent pas les prix obtenus — l'écart peut dépasser 10 à 15 % sur certains secteurs parisiens. Faire appel à plusieurs agences simultanément dilue l'effort de vente et crée de la confusion chez les acheteurs.</p>
      <p>Un mandataire unique, pleinement investi, obtient statistiquement de meilleurs résultats en termes de prix et de délai. C'est la philosophie SellMyHome : un seul interlocuteur, une vraie expertise.</p>

      <h2>FAQ — Estimation immobilière à Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/prix-m2-paris">Prix m² Paris 2026 par arrondissement</Link> · <Link href="/vendre-a-paris">Guide complet pour vendre à Paris</Link> · <Link href="/chasseur-paris">Chasseur immobilier Paris</Link> · <Link href="/estimation-appartement">Estimation appartement</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Démarrer mon estimation gratuite</Link></div>
    </main>
  </>);
}
