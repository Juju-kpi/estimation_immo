export const metadata = {
  title: "Estimation immobilière Paris gratuite — appartement & maison",
  description:
    "Obtenez une estimation immobilière gratuite et précise à Paris. Marie Houlier, experte du marché parisien depuis 40 ans, analyse votre bien arrondissement par arrondissement. Sans engagement.",
  alternates: { canonical: "https://sellmyhome.fr/estimation-paris" },
  openGraph: {
    title: "Estimation immobilière Paris gratuite | SellMyHome",
    description: "Estimation gratuite à Paris par une experte du marché parisien.",
    url: "https://sellmyhome.fr/estimation-paris",
  },
};

import Link from "next/link";
import Script from "next/script";

const faqItems = [
  {
    q: "Comment se calcule une estimation immobilière à Paris ?",
    a: "L'estimation tient compte de la surface, de l'arrondissement, de l'étage, de l'état général, de l'exposition, du DPE et des transactions récentes dans le même secteur (données DVF des Notaires de France).",
  },
  {
    q: "L'estimation est-elle gratuite ?",
    a: "Oui, totalement gratuite et sans engagement. Aucune facturation n'est effectuée pour l'estimation.",
  },
  {
    q: "Quelle est la différence entre une estimation en ligne et une estimation physique ?",
    a: "L'estimation en ligne donne une fourchette de prix rapide. L'estimation physique réalisée par Marie prend en compte des éléments visuels (luminosité, vue, état des finitions) qui font souvent varier le prix de 5 à 15 %.",
  },
  {
    q: "Combien vaut mon appartement à Paris en 2026 ?",
    a: "Les prix à Paris varient de 7 500 €/m² dans le 19e et 20e à plus de 14 000 €/m² dans le 6e et 7e. Une estimation personnalisée reste indispensable car chaque bien est unique.",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema-estimation-paris"
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
        id="breadcrumb-estimation-paris"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" },
              { "@type": "ListItem", position: 2, name: "Estimation immobilière Paris", item: "https://sellmyhome.fr/estimation-paris" },
            ],
          }),
        }}
      />

      <main className="seo-page">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link> &rsaquo; <span>Estimation Paris</span>
        </nav>

        <h1>Estimation immobilière gratuite à Paris</h1>

        <p className="seo-intro">
          Vous envisagez de vendre votre appartement ou maison à Paris ? Une <strong>estimation immobilière précise</strong> est
          la première étape indispensable pour vendre rapidement et au juste prix. SellMyHome vous propose une
          estimation gratuite, réalisée par Marie Houlier, spécialiste du marché parisien depuis plus de 40 ans.
        </p>

        <div className="seo-cta-block">
          <Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link>
        </div>

        <h2>Pourquoi faire estimer son bien à Paris par un expert ?</h2>
        <p>
          Paris est un marché immobilier à part entière : les prix varient du simple au double entre deux rues du même
          arrondissement. Un bien trop cher reste sur le marché et finit par être bradé. Un bien sous-estimé fait perdre
          des dizaines de milliers d'euros. Une estimation professionnelle vous permet de vous positionner correctement
          dès la mise en vente.
        </p>
        <p>
          Marie Houlier connaît chaque arrondissement parisien de l'intérieur : la cote des immeubles haussmanniens,
          les micro-marchés de chaque quartier, les effets d'étage, d'exposition ou de vue sur cour. Cette connaissance
          terrain est irremplaçable pour une estimation fiable.
        </p>

        <h2>Les critères qui déterminent le prix de votre bien à Paris</h2>
        <ul className="seo-list">
          <li><strong>L'arrondissement et le quartier</strong> — le 8e et le 16e ne se valorisent pas comme le 18e ou le 20e.</li>
          <li><strong>La surface et le nombre de pièces</strong> — les studios et 2 pièces ont des prix au m² plus élevés que les grandes surfaces.</li>
          <li><strong>L'étage et l'exposition</strong> — un dernier étage avec vue peut valoir 15 à 20 % de plus.</li>
          <li><strong>L'état général et les travaux</strong> — une rénovation récente soutient fortement la valeur.</li>
          <li><strong>Le DPE (diagnostic énergétique)</strong> — les passoires thermiques (F et G) subissent une décote croissante.</li>
          <li><strong>Les charges de copropriété</strong> — des charges élevées ou des travaux votés impactent la valeur perçue.</li>
        </ul>

        <h2>Estimation gratuite en ligne : comment ça marche ?</h2>
        <ol className="seo-list">
          <li>Remplissez le formulaire en ligne (3 minutes) avec les informations de votre bien.</li>
          <li>Marie analyse votre dossier et les dernières transactions dans votre secteur.</li>
          <li>Vous êtes recontacté sous 24h pour recevoir votre estimation personnalisée.</li>
          <li>Si vous souhaitez aller plus loin, Marie organise une visite de votre bien.</li>
        </ol>

        <h2>FAQ — Estimation immobilière à Paris</h2>
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
            Consultez aussi notre page sur les{" "}
            <Link href="/prix-m2-paris">prix au m² à Paris par arrondissement</Link>{" "}
            ou notre service de{" "}
            <Link href="/chasseur-paris">chasseur immobilier à Paris</Link>.
          </p>
        </div>

        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimation" className="primary-btn">Démarrer mon estimation</Link>
        </div>
      </main>
    </>
  );
}
