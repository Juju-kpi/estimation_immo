export const metadata = {
  title: "Vendre vite son appartement à Paris sans brader",
  description: "Vendre en 30 à 90 jours à Paris sans baisser le prix : bon prix de départ, photos, diffusion Leggett, acheteurs qualifiés. Délais réels par type de bien.",
  alternates: { canonical: "https://sellmyhome.fr/vendre-appartement-rapidement-paris" },
  openGraph: { images: [OG_IMAGE], title: "Vendre vite son appartement à Paris sans brader | SellMyHome", description: "Vendre en 30 à 90 jours à Paris sans baisser le prix : bon prix de départ, photos, diffusion Leggett, acheteurs qualifiés. Délais réels par type de bien.", url: "https://sellmyhome.fr/vendre-appartement-rapidement-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";

const faq = [
  { q: "Quel est le délai moyen pour vendre un appartement à Paris ?", a: "Pour un bien correctement estimé et bien présenté, le délai moyen est de 45 à 90 jours à Paris en 2026. Le délai le plus court observé avec SellMyHome est de 3 semaines pour un bien très bien placé, au prix du marché, dans un arrondissement demandé." },
  { q: "Peut-on vendre rapidement sans baisser le prix ?", a: "Oui, à condition que l'estimation initiale soit juste. La principale erreur est de démarrer trop haut et de baisser ensuite : un bien qui baisse de prix perd en attractivité et signale aux acheteurs que quelque chose ne va pas. Un prix juste dès le premier jour génère souvent plusieurs offres simultanées." },
  { q: "Quels types de biens se vendent le plus vite à Paris ?", a: "Les studios et 2 pièces bien situés (métro proche, bon DPE, étage élevé) se vendent en moins de 4 semaines dans les arrondissements demandés (9e, 10e, 11e, 17e). Les appartements familiaux (3-4 pièces) dans les 7e, 16e et 15e prennent un peu plus de temps mais trouvent preneur dans les 6 à 8 semaines si le prix est juste." },
  { q: "Faut-il faire des travaux avant de vendre rapidement ?", a: "Pas nécessairement des travaux lourds, mais une mise en valeur (home staging, petites réparations, nettoyage profond) peut réduire le délai de vente de plusieurs semaines. Le retour sur investissement d'un home staging léger est très positif à Paris." },
  { q: "Comment le réseau Leggett accélère-t-il la vente ?", a: "Le réseau Leggett permet d'exposer votre bien à une clientèle d'acquéreurs internationaux (anglais, américains, européens) qui cherchent souvent à acheter rapidement à Paris. Pour certains biens (standing, quartiers recherchés), cette clientèle internationale peut décider très vite." },
];

const conseils = [
  { num: "01", titre: "Le bon prix dès le premier jour", desc: "C'est le levier le plus puissant. Un bien au bon prix reçoit des offres dans les 2 premières semaines. Un bien surestimé de 5% reçoit deux fois moins de demandes de visite." },
  { num: "02", titre: "Des photos professionnelles impeccables", desc: "80% des acheteurs filtrent sur les photos. Un shooting professionnel avec lumière naturelle double le nombre de demandes de visite par rapport à des photos de smartphone." },
  { num: "03", titre: "Diffusion large et ciblée simultanément", desc: "Portails nationaux (SeLoger, Leboncoin), réseau Leggett international, et base d'acheteurs qualifiés déjà en attente chez Marie — les trois canaux en parallèle dès le premier jour." },
  { num: "04", titre: "Visites rapides et acheteurs qualifiés", desc: "Marie filtre les acquéreurs : financement vérifié, projet sérieux. Pas de visite touristique. Chaque visite organisée est une vraie opportunité." },
  { num: "05", titre: "Réactivité sur les offres", desc: "Quand une offre arrive, la réponse doit être rapide. Marie conseille en temps réel sur la position à adopter — accepter, contrer, attendre une deuxième offre." },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Vendre à Paris", item: "https://sellmyhome.fr/vendre-a-paris" }, { "@type": "ListItem", position: 3, name: "Vendre rapidement", item: "https://sellmyhome.fr/vendre-appartement-rapidement-paris" }] }} />
    <main className="seo-page">
      <nav className="breadcrumb">
        <Link href="/">Accueil</Link> › <Link href="/vendre-a-paris">Vendre à Paris</Link> › <span>Vendre rapidement</span>
      </nav>
      <h1>Vendre son appartement rapidement à Paris — sans brader le prix</h1>
      <Byline readingTime={5} />
      <p className="seo-intro">
        Mutation professionnelle, besoin de liquidités, projet d'achat à financer : les raisons de vouloir vendre vite sont nombreuses. À Paris, un bien <strong>correctement estimé et bien présenté</strong> se vend en 45 à 90 jours. Voici comment y parvenir sans sacrifier le prix.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn">Estimer mon bien — Réponse sous 24h</Link>
      </div>

      <h2>Pourquoi certains biens se vendent en 3 semaines et d'autres en 6 mois ?</h2>
      <p>La réponse tient en un mot : le prix. Un bien correctement estimé dès le départ génère de l'intérêt immédiat, parfois plusieurs offres simultanées qui font monter les enchères. Un bien surestimé s'installe sur le marché, accumule les visites sans suite, et finit par baisser son prix — mais à ce stade, les acheteurs potentiels se demandent pourquoi il n'a pas été vendu plus tôt et négocient davantage.</p>
      <p>Le paradoxe de l'immobilier parisien : les biens vendus le plus vite sont souvent ceux qui obtiennent le meilleur prix, car ils créent une dynamique de concurrence entre acheteurs.</p>

      <h2>Les 5 leviers pour vendre vite à Paris</h2>
      <div className="etapes-grid">
        {conseils.map((c, i) => (
          <div key={i} className="etape-card">
            <span className="etape-num">{c.num}</span>
            <h3 className="etape-titre">{c.titre}</h3>
            <p className="etape-desc">{c.desc}</p>
          </div>
        ))}
      </div>

      <h2>Délais réalistes par type de bien à Paris en 2026</h2>
      <div className="seo-table-wrapper">
        <table className="seo-table">
          <thead><tr><th>Type de bien</th><th>Secteur</th><th>Délai moyen</th></tr></thead>
          <tbody>
            <tr><td>Studio / T1</td><td>9e, 10e, 11e, 17e</td><td>2 à 4 semaines</td></tr>
            <tr><td>T2 bien situé</td><td>Tous arrondissements demandés</td><td>3 à 6 semaines</td></tr>
            <tr><td>T3 familial</td><td>7e, 15e, 16e, 17e</td><td>5 à 10 semaines</td></tr>
            <tr><td>Grand appartement 4P+</td><td>Beaux quartiers</td><td>6 à 14 semaines</td></tr>
            <tr><td>Bien avec DPE F/G</td><td>Tout Paris</td><td>+4 à 8 semaines supplémentaires</td></tr>
          </tbody>
        </table>
      </div>
      <p className="prix-source">Délais indicatifs pour des biens correctement estimés, en bon état de présentation. Source : observations SellMyHome 2025-2026.</p>

      <h2>Les pièges à éviter pour ne pas ralentir la vente</h2>
      <ul className="seo-list">
        <li><strong>Démarrer trop haut "pour voir"</strong> — la stratégie du prix gonflé ne fonctionne pas à Paris où les acheteurs sont bien informés et comparent en temps réel.</li>
        <li><strong>Multiplier les agences</strong> — un bien diffusé par 4 agences différentes perd en cohérence et donne une image de bien "qui ne se vend pas".</li>
        <li><strong>Dossier de diagnostic incomplet</strong> — un acheteur qui découvre un diagnostic manquant au compromis peut faire capoter la vente. <Link href="/diagnostic-immobilier-paris">Préparez votre dossier en amont</Link>.</li>
        <li><strong>Appartement mal présenté pour les photos</strong> — 3 jours de rangement et 2 heures de shooting professionnel peuvent faire gagner 3 semaines de délai de vente.</li>
      </ul>

      <AdvisorBox source="vendre-appartement-rapidement-paris" />

      <h2>FAQ — Vendre rapidement à Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Guide vente immobilière Paris</Link> · <Link href="/estimation-paris">Estimation gratuite</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/diagnostic-immobilier-paris">Diagnostics obligatoires</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn">Commencer par une estimation gratuite</Link>
      </div>
    </main>
  </>);
}