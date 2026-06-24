export const metadata = {
  title: "Vendre avant d'acheter à Paris — comment éviter les pièges 2026",
  description: "Faut-il vendre avant d'acheter à Paris ? Prêt relais, timing, risques : guide complet pour coordonner votre vente et votre achat immobilier. Marie Houlier, agente Leggett Paris.",
  alternates: { canonical: "https://sellmyhome.fr/vendre-avant-achat-paris" },
  openGraph: {
    title: "Vendre avant d'acheter à Paris | SellMyHome",
    description: "Coordonner vente et achat immobilier à Paris : prêt relais, timing, pièges à éviter. Guide 2026.",
    url: "https://sellmyhome.fr/vendre-avant-achat-paris",
  },
};
import Link from "next/link";
import Script from "next/script";

const faq = [
  { q: "Faut-il vendre avant d'acheter ou acheter avant de vendre à Paris ?", a: "À Paris, il est généralement recommandé de vendre d'abord, ou au moins de lancer la vente simultanément à la recherche d'achat. Le marché parisien est compétitif : les vendeurs préfèrent des acheteurs qui n'ont pas de bien à vendre (pas de condition suspensive). Arriver avec un bien déjà vendu ou un prêt relais en place renforce considérablement votre position d'acheteur." },
  { q: "Qu'est-ce qu'un prêt relais et comment ça fonctionne ?", a: "Le prêt relais est un crédit à court terme (6 à 24 mois) qui vous permet d'acheter votre nouveau bien avant d'avoir vendu l'ancien. La banque vous avance une partie de la valeur estimée de votre bien actuel (généralement 60 à 80%). Vous remboursez ce prêt dès que votre vente est finalisée. Les taux sont plus élevés qu'un prêt classique mais la souplesse qu'il offre en vaut souvent le coût." },
  { q: "Comment éviter de se retrouver sans logement entre la vente et l'achat ?", a: "Plusieurs solutions : négocier une clause de différé de jouissance dans votre vente (vous restez dans le bien pendant 1 à 3 mois après la signature), prévoir une location temporaire, ou coordonner les dates de signature avec l'acheteur et le vendeur de votre nouveau bien. Marie gère régulièrement ces coordinations complexes." },
  { q: "Peut-on conditionner la vente à la réalisation de l'achat ?", a: "Juridiquement, une condition suspensive d'achat n'est pas valide dans un compromis de vente en France. Cependant, on peut jouer sur les délais : allonger le délai entre compromis et acte (4 à 5 mois), ce qui vous donne plus de temps pour finaliser votre achat. Marie négocie ces délais avec les acheteurs." },
  { q: "Quel est le risque de vendre sans avoir trouvé son futur bien ?", a: "Le principal risque est de se retrouver dans l'obligation de louer temporairement si vous ne trouvez pas rapidement, ce qui génère des coûts et du stress. Ce risque est limité si vous avez déjà identifié des biens correspondant à vos critères et si la vente est bien coordonnée dans les délais." },
];

const etapes = [
  { num: "01", titre: "Estimation et mise en vente simultanée à la recherche", desc: "Marie estime votre bien et lance la mise en vente pendant que vous cherchez votre futur appartement. Les deux démarches avancent en parallèle pour optimiser le timing." },
  { num: "02", titre: "Offre d'achat conditionnée à la vente ou prêt relais", desc: "Si vous trouvez votre futur bien avant d'avoir vendu, Marie vous conseille sur les options : prêt relais, condition suspensive de vente (dans certains cas), ou négociation de délais." },
  { num: "03", titre: "Négociation des délais de part et d'autre", desc: "Marie négocie avec l'acheteur de votre bien (délais longs, différé de jouissance) et avec le vendeur de votre futur bien (patience sur le timing) pour que tout s'enchaîne." },
  { num: "04", titre: "Signature des deux actes dans la même journée", desc: "Idéalement, les deux actes authentiques (vente de votre bien + achat du nouveau) sont signés le même jour chez le notaire. Marie coordonne les deux notaires pour y parvenir." },
];

export default function Page() {
  return (<>
    <Script id="faq-vaa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    <Script id="bc-vaa" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Vendre à Paris", item: "https://sellmyhome.fr/vendre-a-paris" }, { "@type": "ListItem", position: 3, name: "Vendre avant d'acheter", item: "https://sellmyhome.fr/vendre-avant-achat-paris" }] }) }} />
    <main className="seo-page">
      <nav className="breadcrumb">
        <Link href="/">Accueil</Link> › <Link href="/vendre-a-paris">Vendre à Paris</Link> › <span>Vendre avant d'acheter</span>
      </nav>
      <h1>Vendre avant d'acheter à Paris — comment coordonner les deux projets</h1>
      <p className="seo-intro">
        Vous êtes propriétaire à Paris et souhaitez acheter plus grand, changer de quartier ou quitter la capitale. La question du timing est cruciale : faut-il vendre d'abord et risquer de se retrouver sans logement, ou acheter d'abord et supporter deux crédits en parallèle ? Marie Houlier vous aide à <strong>coordonner les deux projets</strong> pour éviter les imprévus.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn">Estimer mon bien avant d'acheter</Link>
      </div>

      <h2>Vendre avant ou acheter avant : que recommande Marie ?</h2>
      <p>Dans la quasi-totalité des cas à Paris, Marie recommande de <strong>lancer la vente en premier</strong>, ou au moins simultanément à la recherche du futur bien. Les raisons sont pragmatiques : les vendeurs parisiens refusent souvent les offres conditionnées à la vente d'un autre bien (condition suspensive), et une offre d'acheteur "libre de tout achat" ou avec prêt relais est systématiquement favorisée.</p>
      <p>Connaître précisément le produit net de votre vente avant de chercher est aussi un avantage majeur : vous savez exactement quel budget vous avez pour votre achat, sans surprise.</p>

      <div className="seo-callout">
        <p><strong>Le prêt relais, une solution souvent sous-estimée :</strong> beaucoup de propriétaires hésitent à prendre un prêt relais par crainte du coût. En réalité, pour 2 à 3 mois de chevauchement, le coût reste raisonnable (quelques milliers d'euros) comparé au confort de ne pas être pressé par le temps lors de l'achat. Marie peut vous mettre en contact avec des courtiers spécialisés.</p>
      </div>

      <h2>Les 4 étapes pour coordonner vente et achat</h2>
      <div className="etapes-grid">
        {etapes.map((e, i) => (
          <div key={i} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      <h2>Comment éviter de se retrouver à la rue entre les deux transactions</h2>
      <p>C'est la crainte principale des propriétaires qui vendent. Plusieurs solutions existent :</p>
      <ul className="seo-list">
        <li><strong>Le différé de jouissance</strong> — vous négociez avec l'acheteur le droit de rester dans le logement 1 à 3 mois après la signature de l'acte, moyennant une indemnité d'occupation. Cela vous donne le temps de finaliser votre achat.</li>
        <li><strong>La location meublée temporaire</strong> — si vous ne trouvez pas immédiatement, une location meublée de courte durée (1 à 3 mois) est souvent moins stressante qu'on ne l'imagine.</li>
        <li><strong>La signature simultanée</strong> — dans les cas idéaux, les deux actes sont signés le même jour : vous cédez votre bien le matin et signez votre achat l'après-midi. Marie a l'expérience de ces coordinations complexes.</li>
      </ul>

      <h2>FAQ — Vendre avant d'acheter à Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Guide vente immobilière Paris</Link> · <Link href="/chasseur-paris">Chasseur immobilier Paris</Link> · <Link href="/estimation-paris">Estimation gratuite</Link> · <Link href="/frais-notaire-paris">Frais de notaire</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn">Commencer par une estimation gratuite</Link>
      </div>
    </main>
  </>);
}