export const metadata = {
  title: "Chasseur immobilier Paris — trouvez votre bien idéal",
  description:
    "SellMyHome propose un service de chasseur immobilier à Paris : recherche sur-mesure, accès aux biens off-market, négociation incluse. Marie Houlier chasse pour vous dans tout Paris.",
  alternates: { canonical: "https://sellmyhome.fr/chasseur-paris" },
  openGraph: {
    title: "Chasseur immobilier Paris | SellMyHome",
    description: "Service de chasseur immobilier à Paris : recherche sur-mesure, off-market, négociation incluse.",
    url: "https://sellmyhome.fr/chasseur-paris",
  },
};

import Link from "next/link";
import Script from "next/script";

const faqItems = [
  {
    q: "Qu'est-ce qu'un chasseur immobilier à Paris ?",
    a: "Un chasseur immobilier est un professionnel mandaté exclusivement par l'acheteur pour trouver le bien correspondant à ses critères. Il a accès à des biens off-market, gère les visites et négocie en votre nom.",
  },
  {
    q: "Combien coûte un chasseur immobilier à Paris ?",
    a: "La rémunération du chasseur est généralement un pourcentage du prix d'achat (entre 1 et 3 %), payable uniquement si la transaction aboutit. Aucun frais n'est dû si vous ne trouvez pas votre bien.",
  },
  {
    q: "Quelle est la différence entre un chasseur immobilier et un agent ?",
    a: "L'agent immobilier représente le vendeur. Le chasseur vous représente, vous, l'acheteur : ses intérêts sont alignés avec les vôtres pour trouver le meilleur bien au meilleur prix.",
  },
  {
    q: "Dans quels arrondissements de Paris intervenez-vous ?",
    a: "SellMyHome intervient dans l'ensemble des 20 arrondissements de Paris, avec une connaissance particulière des 6e, 7e, 8e, 15e, 16e et 17e. Nous couvrons également le Grand Paris.",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema-chasseur"
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
        id="breadcrumb-chasseur"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" },
              { "@type": "ListItem", position: 2, name: "Chasseur immobilier Paris", item: "https://sellmyhome.fr/chasseur-paris" },
            ],
          }),
        }}
      />

      <main className="seo-page">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link> &rsaquo; <span>Chasseur immobilier Paris</span>
        </nav>

        <h1>Chasseur immobilier à Paris — Marie chasse pour vous</h1>

        <p className="seo-intro">
          Trouver le bien idéal à Paris demande du temps, des contacts et une connaissance fine du marché.
          Le service de <strong>chasseur immobilier SellMyHome</strong> vous permet de déléguer entièrement
          votre recherche à Marie Houlier, qui connaît Paris arrondissement par arrondissement depuis plus de 40 ans.
        </p>

        <div className="seo-cta-block">
          <Link href="/contact" className="primary-btn">Décrire mon projet de recherche</Link>
        </div>

        <h2>Pourquoi choisir un chasseur immobilier à Paris ?</h2>
        <p>
          Le marché parisien est tendu : les meilleurs biens partent en quelques jours, souvent avant même
          d'être publiés sur les portails. Un chasseur immobilier vous donne accès à ce marché "off-market"
          invisible des particuliers, et vous fait gagner un temps précieux.
        </p>

        <h2>Ce que comprend notre service de chasse immobilière</h2>
        <ul className="seo-list">
          <li><strong>Définition du cahier des charges</strong> — Arrondissements, surface, budget, étage, standing : nous cadrons précisément votre projet.</li>
          <li><strong>Recherche active et off-market</strong> — Marie mobilise son réseau de confrères, notaires et propriétaires pour des biens non publiés.</li>
          <li><strong>Sélection et visites</strong> — Nous pré-sélectionnons les biens correspondant à vos critères et organisons les visites en votre nom.</li>
          <li><strong>Analyse de prix et conseils</strong> — Chaque bien est analysé au regard des transactions récentes dans le secteur.</li>
          <li><strong>Négociation</strong> — Marie négocie le prix d'achat dans votre intérêt, avec les données du marché pour argumenter.</li>
          <li><strong>Accompagnement jusqu'à la signature</strong> — Coordination avec le notaire, suivi du compromis et de l'acte authentique.</li>
        </ul>

        <h2>Nos secteurs de prédilection à Paris</h2>
        <p>
          SellMyHome intervient dans l'ensemble de Paris, avec une expertise particulière dans les quartiers
          prisés : <strong>Trocadéro, Passy, Auteuil</strong> (16e), <strong>Monceau, Batignolles</strong> (17e),
          <strong>Invalides, Saint-Germain</strong> (7e), <strong>Opéra, Pigalle</strong> (9e) et
          l'ensemble du <strong>Grand Paris</strong>.
        </p>

        <h2>FAQ — Chasseur immobilier à Paris</h2>
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
            Vous souhaitez plutôt <Link href="/estimation-paris">estimer votre bien avant de vendre</Link> ?
            Consultez aussi nos <Link href="/prix-m2-paris">prix au m² à Paris en 2026</Link>.
          </p>
        </div>

        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/contact" className="primary-btn">Contacter Marie pour ma recherche</Link>
        </div>
      </main>
    </>
  );
}
