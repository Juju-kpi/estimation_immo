export const metadata = {
  title: "Estimation appartement gratuite en ligne — Paris & IDF",
  description:
    "Estimez votre appartement gratuitement en ligne avec SellMyHome. Surface, localisation, état, DPE : tous les critères analysés par une experte du marché parisien. Sans engagement.",
  alternates: { canonical: "https://sellmyhome.fr/estimation-appartement" },
  openGraph: {
    title: "Estimation appartement gratuite | SellMyHome",
    description: "Estimez gratuitement votre appartement à Paris. Analyse complète par une experte immobilière.",
    url: "https://sellmyhome.fr/estimation-appartement",
  },
};

import Link from "next/link";
import Script from "next/script";

const faqItems = [
  {
    q: "Comment estimer un appartement à Paris ?",
    a: "L'estimation repose sur plusieurs critères : localisation précise (arrondissement, rue), surface, étage, exposition, état général, DPE et dernières transactions similaires dans le secteur (source : DVF Notaires).",
  },
  {
    q: "Quelle est la différence entre une estimation et une expertise ?",
    a: "L'estimation est une évaluation professionnelle indicative, gratuite et sans engagement. L'expertise immobilière est un acte formel réalisé par un expert certifié, payant, utilisé dans des contextes juridiques ou fiscaux (succession, divorce, etc.).",
  },
  {
    q: "Mon appartement a été rénové récemment, cela augmente-t-il sa valeur ?",
    a: "Oui, une rénovation récente (cuisine, salle de bain, électricité, double vitrage) peut augmenter la valeur de 5 à 15 % par rapport à un bien identique non rénové, selon la qualité des travaux.",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema-appart"
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

      <main className="seo-page">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link> &rsaquo; <span>Estimation appartement</span>
        </nav>

        <h1>Estimation appartement gratuite en ligne</h1>

        <p className="seo-intro">
          Vous souhaitez vendre votre appartement ? Une <strong>estimation précise</strong> est
          la première étape essentielle pour vendre rapidement et au meilleur prix. SellMyHome vous propose
          une estimation gratuite, sans engagement, réalisée par Marie Houlier, experte du marché parisien.
        </p>

        <div className="seo-cta-block">
          <Link href="/estimation" className="primary-btn">Estimer mon appartement</Link>
        </div>

        <h2>Comment estimer un appartement efficacement ?</h2>
        <p>
          L'estimation d'un appartement ne se résume pas à regarder les prix affichés sur les portails immobiliers.
          Les annonces en ligne reflètent les prix demandés, pas les prix réellement obtenus. Pour une estimation
          fiable, il faut analyser les transactions récentes de biens comparables dans le même secteur.
        </p>

        <h2>Les critères qui comptent pour estimer votre appartement</h2>
        <ul className="seo-list">
          <li><strong>Localisation</strong> — L'adresse précise, la rue, la proximité des transports et commerces.</li>
          <li><strong>Surface et agencement</strong> — La surface Carrez, le nombre de pièces, la présence d'un couloir ou de surfaces perdues.</li>
          <li><strong>État général</strong> — Rénovation récente, double vitrage, état de la cuisine et de la salle de bain.</li>
          <li><strong>DPE (Diagnostic de Performance Énergétique)</strong> — Les passoires thermiques (F/G) subissent une décote légale croissante.</li>
          <li><strong>Étage et exposition</strong> — Un appartement lumineux en étage élevé avec vue vaut significativement plus.</li>
          <li><strong>Marché immobilier local</strong> — Les tendances du secteur, l'offre et la demande dans le quartier.</li>
        </ul>

        <h2>Pourquoi utiliser une estimation immobilière en ligne ?</h2>
        <p>
          Une estimation en ligne permet d'obtenir une première indication de prix rapidement, sans déplacement.
          C'est une excellente première étape pour calibrer votre projet. SellMyHome va plus loin :
          après le formulaire, Marie vous contacte pour affiner l'estimation avec une connaissance terrain que
          les algorithmes ne peuvent pas reproduire.
        </p>

        <h2>FAQ — Estimation appartement</h2>
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
            Si votre bien est situé à Paris, consultez aussi notre page{" "}
            <Link href="/estimation-paris">estimation immobilière à Paris</Link> ou notre analyse des{" "}
            <Link href="/prix-m2-paris">prix au m² par arrondissement</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
