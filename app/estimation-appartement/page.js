export const metadata = {
  title: "Estimer un appartement : méthode et critères",
  description: "Comment estimer un appartement à Paris ou en Île-de-France ? Les 7 critères qui font le prix (étage, DPE, copropriété…) et une estimation gratuite sous 24h.",
  alternates: { canonical: "https://sellmyhome.fr/estimation-appartement" },
  openGraph: {
    images: [OG_IMAGE],
    title: "Estimer un appartement : méthode et critères | SellMyHome",
    description: "Les 7 critères qui font le prix d'un appartement, expliqués par une agente Leggett. Estimation gratuite sous 24h.",
    url: "https://sellmyhome.fr/estimation-appartement",
  },
};

import { OG_IMAGE } from "../../lib/site";
import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../components/JsonLd";
import AdvisorBox from "../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb } from "../../components/SeoBits";

const faqItems = [
  {
    q: "Comment estimer un appartement soi-même ?",
    a: "Commencez par consulter les ventes réelles de biens comparables dans votre rue ou votre quartier (base DVF publique), plutôt que les prix affichés dans les annonces. Ajustez ensuite selon l'étage, l'état, le DPE et l'exposition. Cette méthode donne une première fourchette ; une visite par une professionnelle permet de l'affiner.",
  },
  {
    q: "Quelle est la différence entre une estimation et une expertise ?",
    a: "L'estimation est une évaluation professionnelle indicative, gratuite et sans engagement, réalisée en vue d'une vente. L'expertise immobilière est un rapport formel, payant, réalisé par un expert certifié et utilisé dans des contextes juridiques ou fiscaux (succession contestée, divorce contentieux, contrôle fiscal).",
  },
  {
    q: "Mon appartement a été rénové récemment, cela augmente-t-il sa valeur ?",
    a: "Oui, une rénovation récente et de qualité (cuisine, salle de bain, électricité, fenêtres) peut augmenter la valeur de 5 à 15 % par rapport à un bien identique à rafraîchir. Tout dépend de la qualité des travaux et de leur cohérence avec les attentes des acheteurs du quartier.",
  },
  {
    q: "Les estimations en ligne sont-elles fiables ?",
    a: "Elles donnent un ordre de grandeur utile, mais raisonnent sur des moyennes. Elles ne voient ni la luminosité, ni la vue, ni le calme, ni l'état de la copropriété. Pour les biens atypiques (dernier étage, rez-de-jardin, loft, vue exceptionnelle), l'écart avec le prix réel peut dépasser 10 à 20 %.",
  },
  {
    q: "Combien coûte une estimation par Marie ?",
    a: "Rien. L'estimation est gratuite et sans engagement, à Paris comme en Île-de-France. Marie n'est rémunérée que si vous décidez de lui confier la vente et que celle-ci aboutit.",
  },
];

const criteres = [
  ["Localisation précise", "L'arrondissement ou la commune ne suffit pas : la rue, le côté de la rue, la proximité du métro, des écoles et des commerces créent des écarts de 20 à 30 %."],
  ["Surface Carrez et agencement", "La surface compte, mais aussi la façon dont elle est utilisée : un couloir long ou des pièces en enfilade réduisent la surface « utile » perçue."],
  ["Étage, ascenseur et exposition", "Un étage élevé, lumineux, avec ascenseur et vue dégagée peut valoir 15 à 25 % de plus qu'un rez-de-chaussée sur cour."],
  ["État général et travaux", "Cuisine, salle de bain, électricité, fenêtres : les acheteurs chiffrent tout, et souvent plus cher que la réalité."],
  ["DPE", "Depuis les restrictions de location des logements G (2025) et bientôt F (2028), un mauvais classement pèse nettement sur le prix, surtout pour les petites surfaces."],
  ["Copropriété", "Charges, travaux votés, fonds de travaux, état des parties communes, présence d'un gardien : les acheteurs et leurs banques regardent tout."],
  ["Extérieurs et annexes", "Balcon, terrasse, cave, parking : des atouts qui se valorisent différemment selon le secteur (un parking vaut plus à Neuilly ou dans le 12e que dans le 3e)."],
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema([{ name: "Estimer un appartement", path: "/estimation-appartement" }])} />

      <main className="seo-page">
        <Breadcrumb items={[{ name: "Estimer un appartement" }]} />
        <h1>Estimer un appartement : la méthode et les 7 critères qui font le prix</h1>
        <Byline readingTime={5} />

        <p className="seo-intro">
          Vous souhaitez vendre votre appartement ou simplement connaître sa valeur ? Une <strong>estimation juste</strong> est
          la première étape pour vendre vite et au bon prix. Voici comment les professionnels s'y prennent — et comment
          obtenir gratuitement l'avis de Marie Houlier, agente Leggett à Paris et en Île-de-France.
        </p>

        <div className="seo-cta-block">
          <Link href="/estimation" className="primary-btn">Faire estimer mon appartement gratuitement</Link>
        </div>

        <h2>La bonne méthode : partir des ventes réelles, pas des annonces</h2>
        <p>
          Les annonces en ligne reflètent des prix <em>demandés</em>, pas des prix <em>obtenus</em>. À Paris, l'écart entre
          les deux dépasse souvent 5 à 10 %. Une estimation sérieuse compare votre appartement aux ventes effectivement
          signées chez le notaire dans votre secteur au cours des derniers mois (données DVF), puis ajuste selon les
          caractéristiques propres de votre bien.
        </p>

        <h2>Les 7 critères qui déterminent le prix d'un appartement</h2>
        <div className="etapes-grid">
          {criteres.map(([titre, desc], i) => (
            <div key={titre} className="etape-card">
              <span className="etape-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="etape-titre">{titre}</h3>
              <p className="etape-desc">{desc}</p>
            </div>
          ))}
        </div>

        <h2>Estimation en ligne ou estimation humaine ?</h2>
        <p>
          Une estimation en ligne donne une première indication rapidement, sans déplacement. C'est un bon point de départ.
          Mais elle ne remplace pas le regard d'une professionnelle qui connaît votre quartier : c'est pourquoi, sur
          SellMyHome, chaque demande est traitée personnellement par Marie, qui vous rappelle sous 24h avec une fourchette
          argumentée, puis peut visiter votre appartement pour l'affiner.
        </p>

        <div className="seo-callout">
          <p><strong>Le piège le plus fréquent :</strong> surestimer « pour se laisser une marge de négociation ». Un appartement affiché 5 % trop cher reçoit nettement moins de visites, reste en ligne, puis finit souvent vendu en dessous de sa valeur. Le bon prix dès le premier jour reste la meilleure stratégie.</p>
        </div>

        <h2>Des repères de prix par secteur</h2>
        <p>
          Pour une première idée, consultez nos fourchettes 2026 : <Link href="/prix-m2-paris">prix au m² dans les 20 arrondissements de Paris</Link>{" "}
          et <Link href="/estimation-ile-de-france">prix en Île-de-France</Link> (Neuilly, Boulogne, Levallois, Vincennes, Versailles…).
          Chaque page de secteur détaille les quartiers et les points de vigilance propres à l'estimation.
        </p>

        <AdvisorBox source="estimation_appartement" title="Vous voulez un chiffre fiable pour votre appartement ?" />

        <h2>FAQ — Estimer un appartement</h2>
        <FaqList faq={faqItems} />

        <div className="seo-internal-links">
          <p>
            À lire aussi : <Link href="/estimation-paris">Estimation immobilière à Paris</Link> ·{" "}
            <Link href="/diagnostic-immobilier-paris">Diagnostics obligatoires</Link> · <Link href="/vendre-a-paris">Guide pour vendre à Paris</Link> ·{" "}
            <Link href="/vendre-appartement-rapidement-paris">Vendre rapidement</Link>
          </p>
        </div>
        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link>
        </div>
      </main>
    </>
  );
}
