export const metadata = {
  title: "Chasseur immobilier Paris : biens off-market",
  description: "Marie Houlier cherche pour vous à Paris et en proche banlieue : biens off-market, visites triées, négociation au juste prix. Premier échange gratuit.",
  alternates: { canonical: "https://sellmyhome.fr/chasseur-paris" },
  openGraph: { images: [OG_IMAGE], title: "Chasseur immobilier Paris : biens off-market | SellMyHome", description: "Marie Houlier cherche pour vous à Paris et en proche banlieue : biens off-market, visites triées, négociation au juste prix. Premier échange gratuit.", url: "https://sellmyhome.fr/chasseur-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";

const faq = [
  { q: "Qu'est-ce qu'un chasseur immobilier à Paris ?", a: "Un chasseur immobilier est un professionnel mandaté exclusivement par l'acheteur pour trouver le bien correspondant à ses critères. Contrairement à l'agent du vendeur, le chasseur défend uniquement vos intérêts : il a accès à des biens off-market, organise les visites et négocie le prix en votre nom." },
  { q: "Combien coûte un chasseur immobilier à Paris ?", a: "La rémunération du chasseur est généralement un pourcentage du prix d'achat (entre 1 et 3 %), payable uniquement si la transaction aboutit. Aucun frais n'est dû si vous ne trouvez pas votre bien. C'est un service 100 % aligné sur votre réussite." },
  { q: "Quelle est la différence entre un chasseur immobilier et un agent classique ?", a: "L'agent immobilier traditionnel représente le vendeur et cherche à maximiser le prix de vente. Le chasseur vous représente, vous l'acheteur : il cherche à vous faire acheter au meilleur prix, dans le meilleur bien. C'est une relation de confiance exclusive à votre service." },
  { q: "Qu'est-ce qu'un bien off-market à Paris ?", a: "Un bien off-market est un bien à vendre qui n'est pas encore (ou pas du tout) diffusé sur les portails publics comme SeLoger ou Leboncoin. Ces biens circulent entre professionnels. Grâce au réseau Leggett et aux contacts de Marie, SellMyHome a accès à ces opportunités avant les autres acheteurs." },
  { q: "Dans quels secteurs intervenez-vous ?", a: "Marie intervient dans les 20 arrondissements de Paris, avec une expertise particulière dans les 6e, 7e, 8e, 15e, 16e et 17e, ainsi que dans les communes proches d'Île-de-France : Neuilly-sur-Seine, Levallois-Perret, Boulogne-Billancourt, Vincennes, Saint-Mandé ou encore Versailles." },
];

const etapes = [
  { num: "01", titre: "Définition du cahier des charges", desc: "Arrondissements cibles, surface, budget, étage, exposition, standing : nous cadrons précisément votre projet en une séance de 30 minutes." },
  { num: "02", titre: "Recherche active & off-market", desc: "Marie mobilise son réseau de confrères, notaires, syndics et propriétaires pour accéder à des biens avant leur mise en vente publique." },
  { num: "03", titre: "Sélection & visites organisées", desc: "Nous pré-sélectionnons rigoureusement les biens correspondant à vos critères et organisons les visites à votre agenda." },
  { num: "04", titre: "Analyse de prix & conseils", desc: "Chaque bien retenu est analysé au regard des transactions récentes dans le secteur (DVF). Vous achetez en connaissance de cause." },
  { num: "05", titre: "Négociation dans votre intérêt", desc: "Marie négocie le prix d'achat avec les données du marché comme argument. Notre objectif : vous faire acheter au juste prix, voire en dessous." },
  { num: "06", titre: "Accompagnement jusqu'à la signature", desc: "Coordination avec le notaire, suivi du compromis, levée des conditions suspensives et présence à l'acte authentique." },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Chasseur immobilier Paris", item: "https://sellmyhome.fr/chasseur-paris" }] }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Chasseur immobilier Paris</span></nav>
      <h1>Chasseur immobilier à Paris — Biens off-market & négociation</h1>
      <Byline readingTime={4} />
      <p className="seo-intro">Trouver le bien idéal à Paris demande du temps, des contacts et une connaissance fine du marché. Le service de <strong>chasseur immobilier SellMyHome</strong> vous permet de déléguer votre recherche à Marie Houlier, agente Leggett qui connaît Paris et la proche banlieue arrondissement par arrondissement depuis 15 ans. Vous gardez un seul interlocuteur, joignable directement, du cahier des charges à la signature.</p>
      <div className="seo-cta-block"><Link href="/contact" className="primary-btn">Décrire mon projet de recherche</Link></div>

      <h2>Pourquoi choisir un chasseur immobilier à Paris ?</h2>
      <p>Le marché parisien est l'un des plus compétitifs au monde. Les biens bien situés et correctement prix partent en quelques jours, parfois avant d'être publiés sur les portails. Sans réseau professionnel, vous n'avez accès qu'à une fraction du marché réel.</p>
      <p>Un chasseur immobilier parisien vous donne accès au marché "off-market" — ces biens qui ne seront jamais sur SeLoger — et vous fait gagner un temps précieux en ne vous présentant que des biens qui correspondent vraiment à vos critères. À Paris, où chaque visite demande une organisation logistique, ce tri préalable est précieux.</p>

      <h2>Notre processus — 6 étapes pour trouver votre bien idéal</h2>
      <div className="etapes-grid">
        {etapes.map((e, i) => (
          <div key={i} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      <h2>Nos secteurs d'expertise à Paris</h2>
      <p>SellMyHome intervient dans l'ensemble des 20 arrondissements de Paris, avec une expertise particulière dans :</p>
      <ul className="seo-list">
        <li><strong>16e arrondissement</strong> — Trocadéro, Passy, Auteuil : appartements familiaux haussmanniens, immeubles bourgeois</li>
        <li><strong>17e arrondissement</strong> — Monceau, Batignolles : de l'élégant au bobo, forte dynamique</li>
        <li><strong>7e arrondissement</strong> — Invalides, Saint-Germain : prestige et discrétion</li>
        <li><strong>8e arrondissement</strong> — Madeleine, Parc Monceau : clientèle internationale</li>
        <li><strong>6e arrondissement</strong> — Luxembourg, Saint-Sulpice : marché premium très demandé</li>
        <li><strong>9e et 10e arrondissements</strong> — Pigalle, Canal Saint-Martin : forte dynamique et meilleur rapport qualité-prix</li>
      </ul>
      <p>Vous cherchez plutôt en proche banlieue ? Marie accompagne aussi les acquéreurs à <Link href="/estimation-immobiliere/neuilly-sur-seine">Neuilly-sur-Seine</Link>, <Link href="/estimation-immobiliere/boulogne-billancourt">Boulogne-Billancourt</Link>, <Link href="/estimation-immobiliere/levallois-perret">Levallois-Perret</Link> ou <Link href="/estimation-immobiliere/vincennes">Vincennes</Link>. Consultez les <Link href="/estimation-ile-de-france">prix en Île-de-France</Link> pour calibrer votre budget.</p>
      <p>Grâce au réseau Leggett, Marie a également accès à des acquéreurs et vendeurs internationaux, ce qui peut ouvrir des opportunités off-market supplémentaires.</p>

      <AdvisorBox source="chasseur-paris" />

      <h2>FAQ — Chasseur immobilier Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/estimation-paris">Estimation immobilière gratuite à Paris</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/vendre-a-paris">Vendre un appartement à Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/contact" className="primary-btn">Contacter Marie pour ma recherche</Link></div>
    </main>
  </>);
}
