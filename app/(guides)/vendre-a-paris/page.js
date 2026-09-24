export const metadata = {
  title: "Vendre son bien à Paris : le guide 2026",
  description: "Vendre son appartement ou sa maison à Paris en 2026 : prix, diagnostics, promesse de vente, négociation, notaire. Les étapes, délais et frais réels expliqués.",
  alternates: { canonical: "https://sellmyhome.fr/vendre-a-paris" },
  openGraph: { images: [OG_IMAGE], title: "Vendre son bien à Paris : le guide 2026 | SellMyHome", description: "Vendre son appartement ou sa maison à Paris en 2026 : prix, diagnostics, promesse de vente, négociation, notaire. Les étapes, délais et frais réels expliqués.", url: "https://sellmyhome.fr/vendre-a-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";

const faq = [
  { q: "Quelle est la différence entre une promesse et un compromis de vente à Paris ?", a: "Dans la promesse unilatérale, seul le vendeur s'engage à vendre ; l'acheteur dispose d'une option et verse une indemnité d'immobilisation (souvent 10 %). Dans le compromis, vendeur et acheteur s'engagent tous les deux. Dans les deux cas, l'acheteur bénéficie d'un délai de rétractation de 10 jours." },
  { q: "Quelles sont les étapes pour vendre un appartement à Paris ?", a: "1) Estimation du bien, 2) Préparation du dossier et diagnostics obligatoires, 3) Mise en valeur et photos, 4) Diffusion de l'annonce, 5) Organisation des visites, 6) Réception et négociation des offres, 7) Signature du compromis de vente, 8) Levée des conditions suspensives, 9) Signature de l'acte authentique chez le notaire." },
  { q: "Combien de temps faut-il pour vendre un appartement à Paris ?", a: "En 2026, le délai moyen est de 60 à 90 jours pour un bien correctement estimé et bien présenté. Un bien surestimé peut rester 6 à 12 mois sur le marché. Le délai entre le compromis et l'acte notarié est généralement de 2 à 3 mois supplémentaires." },
  { q: "Quels sont les diagnostics obligatoires pour vendre à Paris ?", a: "Les diagnostics obligatoires sont : DPE (performance énergétique), Carrez (surface), amiante (avant 1997), plomb (avant 1949), électricité et gaz (plus de 15 ans), termites selon la zone, assainissement, état des risques et pollutions (ERP). Le dossier de diagnostic technique (DDT) doit être fourni à la signature du compromis. Voir notre page sur les diagnostics immobiliers." },
  { q: "Quels sont les frais pour vendre un appartement à Paris ?", a: "Le vendeur paie : les honoraires d'agence (si mandat agence), les diagnostics (environ 300 à 600 € en pack), éventuellement les frais de mainlevée d'hypothèque. Les frais de notaire (environ 8 % dans l'ancien à Paris) sont à la charge de l'acheteur. L'impôt sur la plus-value s'applique si le bien n'est pas votre résidence principale." },
  { q: "Dois-je passer par une agence pour vendre mon appartement à Paris ?", a: "Non, la vente entre particuliers est possible. Cependant, dans un marché parisien compétitif, une agente comme Marie Houlier apporte : une estimation juste, une mise en valeur professionnelle, un réseau d'acheteurs (dont international via Leggett), et une gestion complète des visites et négociations. Les biens vendus via agence se vendent statistiquement plus vite et à meilleur prix." },
];

const etapes = [
  { num: "01", titre: "Estimation précise de votre bien", desc: "Le prix juste dès le premier jour est la clé. Un bien surestimé fait fuir les acheteurs et finit bradé. Marie analyse les transactions récentes dans votre secteur pour définir le prix optimal.", lien: { href: "/estimation-paris", label: "Obtenir mon estimation" } },
  { num: "02", titre: "Constitution du dossier & diagnostics", desc: "Diagnostic de performance énergétique (DPE), Carrez, amiante, plomb, électricité, gaz… Le dossier de diagnostic technique doit être complet avant la signature du compromis. Marie coordonne tout.", lien: { href: "/diagnostic-immobilier-paris", label: "Voir les diagnostics obligatoires" } },
  { num: "03", titre: "Mise en valeur & photos professionnelles", desc: "La première impression est déterminante : 80 % des acheteurs filtrent sur les photos. Home staging léger, shooting professionnel, plan 2D/3D optionnel — SellMyHome prépare votre bien pour se démarquer." },
  { num: "04", titre: "Diffusion nationale & internationale", desc: "Votre bien est diffusé sur les portails français (SeLoger, Leboncoin, Bien'ici) ET sur le réseau international Leggett, qui touche des acquéreurs anglophones et européens. Un avantage décisif pour les biens de standing." },
  { num: "05", titre: "Visites & filtrage des acheteurs", desc: "Marie organise les visites, qualifie les acheteurs (financement vérifié) et vous fait un compte-rendu après chaque visite. Vous ne gérez rien, vous décidez tout." },
  { num: "06", titre: "Négociation & sécurisation de la vente", desc: "En cas d'offre, Marie vous conseille sur la position à adopter et négocie dans votre intérêt. Elle coordonne ensuite avec les notaires jusqu'à la signature de l'acte authentique.", lien: { href: "/frais-notaire-paris", label: "Comprendre les frais de notaire" } },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Vendre à Paris", item: "https://sellmyhome.fr/vendre-a-paris" }] }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "HowTo", name: "Comment vendre un appartement à Paris", step: etapes.map((e, i) => ({ "@type": "HowToStep", position: i+1, name: e.titre, text: e.desc })) }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Vendre à Paris</span></nav>
      <h1>Vendre son bien à Paris (appartement ou maison) : le guide 2026</h1>
      <Byline readingTime={6} />
      <p className="seo-intro"><strong>Vendre un bien immobilier à Paris</strong> est une décision majeure qui nécessite une préparation rigoureuse. Prix juste, diagnostics, mise en valeur, diffusion, négociation : chaque étape compte. Ce guide vous explique tout — et comment Marie Houlier, agente Leggett depuis 15 ans, vous accompagne personnellement de A à Z, à Paris comme en Île-de-France.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Estimer mon bien gratuitement avant de vendre</Link></div>

      <h2>Le marché immobilier parisien en 2026 : ce qu'il faut savoir avant de vendre</h2>
      <p>Après la correction de 2023-2024 (environ -7 % cumulés), le marché parisien s'est stabilisé et repart légèrement à la hausse en 2026 (+1 à +2 % sur un an selon les principaux observatoires, autour de 9 700-9 800 €/m² médian). La baisse progressive des taux d'intérêt a redonné du pouvoir d'achat aux acquéreurs, notamment dans les arrondissements du nord-est (9e, 10e, 18e, 19e). Les arrondissements de prestige (6e, 7e, 16e) maintiennent des valeurs élevées avec une demande internationale soutenue.</p>
      <p>C'est un bon moment pour vendre : les acheteurs sont revenus, mais l'offre reste limitée dans les secteurs recherchés. Un bien bien estimé et bien présenté trouve preneur en 60 à 90 jours.</p>

      <h2>Les 6 étapes pour vendre votre appartement à Paris</h2>
      <div className="etapes-grid">
        {etapes.map((e, i) => (
          <div key={i} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
            {e.lien && <Link href={e.lien.href} className="etape-lien">{e.lien.label} →</Link>}
          </div>
        ))}
      </div>

      <h2>Les diagnostics obligatoires pour vendre à Paris</h2>
      <p>La constitution du dossier de diagnostic technique (DDT) est une étape légale incontournable. Voici les principaux diagnostics à prévoir — pour le détail complet (validités, coûts, impact sur le prix), consultez notre page <Link href="/diagnostic-immobilier-paris">diagnostics immobiliers à Paris</Link> :</p>
      <ul className="seo-list">
        <li><strong>DPE (Diagnostic de Performance Énergétique)</strong> — obligatoire, valable 10 ans. Les biens F et G sont soumis à des restrictions croissantes depuis 2025.</li>
        <li><strong>Loi Carrez</strong> — mesurage officiel de la surface privative. Obligatoire pour les copropriétés.</li>
        <li><strong>Amiante</strong> — obligatoire pour les biens construits avant juillet 1997.</li>
        <li><strong>Plomb (CREP)</strong> — pour les biens construits avant 1949.</li>
        <li><strong>Électricité et gaz</strong> — pour les installations de plus de 15 ans.</li>
        <li><strong>ERP (État des Risques et Pollutions)</strong> — obligatoire partout, valable 6 mois.</li>
      </ul>
      <p>Le coût total des diagnostics est généralement de 300 à 600 € à Paris (voir le <Link href="/diagnostic-immobilier-paris">détail des prix</Link>). SellMyHome peut vous recommander des diagnostiqueurs certifiés.</p>

      <h2>Comment fixer le bon prix de vente à Paris ?</h2>
      <p>La fixation du prix est l'étape la plus critique. Un bien 5 % trop cher reçoit 50 % de demandes de visite en moins. Un bien bien positionné dès le premier jour génère de la concurrence entre acheteurs — ce qui peut conduire à des offres au prix, voire au-dessus.</p>
      <p>Pour fixer le bon prix, Marie Houlier analyse les transactions réelles dans votre secteur (base DVF des Notaires de France), compare votre bien avec des appartements similaires vendus dans les 6 derniers mois, et prend en compte les spécificités de votre bien (étage, DPE, état, vue). C'est une expertise que les outils automatiques ne peuvent pas reproduire.</p>
      <p>Consultez notre <Link href="/prix-m2-paris">tableau des prix au m² par arrondissement</Link> pour une première indication, puis obtenez une <Link href="/estimation-paris">estimation personnalisée gratuite</Link>.</p>

      <AdvisorBox source="vendre-a-paris" />

      <h2>Promesse ou compromis de vente : ce que l'on signe à Paris</h2>
      <p>Une fois l'offre acceptée, vendeur et acheteur signent un avant-contrat. À Paris, on rencontre les deux formes : la <strong>promesse unilatérale de vente</strong> (le vendeur s'engage, l'acheteur verse en général une indemnité d'immobilisation d'environ 10 %) et le <strong>compromis de vente</strong> (les deux parties s'engagent, avec un dépôt de garantie de 5 à 10 %). La promesse est très souvent signée chez le notaire.</p>
      <p>L'acheteur dispose ensuite d'un délai de rétractation de 10 jours, puis les conditions suspensives (en particulier l'obtention du prêt) doivent être levées. Comptez généralement <strong>2 à 3 mois entre l'avant-contrat et l'acte authentique</strong>. Marie coordonne ces étapes avec les notaires des deux parties pour sécuriser votre vente.</p>

      <h2>Vendre une maison à Paris</h2>
      <p>Les maisons sont rares dans Paris intra-muros : villas du 16e, du 14e ou du 19e, maisons de la Butte-aux-Cailles ou de la Mouzaïa, pavillons du 20e. Cette rareté attire une clientèle motivée, mais chaque maison est unique : le prix au m² des appartements ne s'applique pas. Terrain, état, exposition, calme et possibilités d'extension doivent être estimés au cas par cas, avec une visite.</p>
      <p>Même logique en proche banlieue, où les maisons sont plus nombreuses : consultez nos pages <Link href="/estimation-immobiliere/saint-cloud">Saint-Cloud</Link>, <Link href="/estimation-immobiliere/rueil-malmaison">Rueil-Malmaison</Link>, <Link href="/estimation-immobiliere/montreuil">Montreuil</Link> ou <Link href="/estimation-immobiliere/nogent-sur-marne">Nogent-sur-Marne</Link>.</p>

      <h2>Vendre un appartement de luxe à Paris</h2>
      <p>Pour un bien d'exception (grand appartement haussmannien, vue sur Seine ou sur la Tour Eiffel, hôtel particulier), la stratégie change : discrétion, présentation soignée, visites très qualifiées et accès à une clientèle internationale. Grâce au réseau Leggett, Marie présente votre bien à des acquéreurs étrangers en plus des portails français, et peut organiser une commercialisation confidentielle (off-market) si vous le souhaitez.</p>

      <h2>FAQ — Vendre un bien à Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/estimation-paris">Estimation immobilière Paris</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/chasseur-paris">Chasseur immobilier Paris</Link> · <Link href="/estimation-appartement">Estimation appartement</Link> · <Link href="/diagnostic-immobilier-paris">Diagnostics immobiliers</Link> · <Link href="/frais-notaire-paris">Frais de notaire Paris</Link> · <Link href="/estimation-ile-de-france">Vendre en Île-de-France</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Commencer par une estimation gratuite</Link></div>
    </main>
  </>);
}