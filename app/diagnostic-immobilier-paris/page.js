export const metadata = {
  title: "Diagnostic immobilier Paris — DPE, Carrez, amiante : guide complet 2026",
  description: "Tous les diagnostics immobiliers obligatoires pour vendre à Paris : DPE, loi Carrez, amiante, plomb, électricité, gaz, ERP. Coûts, durées de validité, impact sur le prix de vente. Conseils de Marie Houlier, agente Leggett.",
  alternates: { canonical: "https://sellmyhome.fr/diagnostic-immobilier-paris" },
  openGraph: { title: "Diagnostic immobilier Paris — DPE & diagnostics obligatoires | SellMyHome", description: "Guide complet des diagnostics immobiliers obligatoires à Paris : DPE, Carrez, amiante, plomb. Coûts et impact sur la vente.", url: "https://sellmyhome.fr/diagnostic-immobilier-paris" },
};
import Link from "next/link";
import Script from "next/script";
import { ShieldCheck, FileWarning, Ruler, Flame, Zap, Droplets, AlertTriangle } from "lucide-react";
import Reveal from "../../components/Reveal";

const faq = [
  { q: "Quels sont les diagnostics immobiliers obligatoires pour vendre à Paris ?", a: "Pour vendre un bien à Paris, le dossier de diagnostic technique (DDT) doit comprendre : le DPE, le mesurage Loi Carrez (copropriété), le diagnostic amiante (avant juillet 1997), le constat de risque d'exposition au plomb (avant 1949), les diagnostics électricité et gaz (installations de plus de 15 ans), et l'état des risques et pollutions (ERP)." },
  { q: "Combien coûte un diagnostic immobilier complet à Paris ?", a: "Pour un appartement parisien standard, le coût d'un dossier de diagnostic technique complet (DPE, Carrez, amiante, plomb, électricité, gaz, ERP) se situe généralement entre 250 et 500 €, selon la surface et l'ancienneté de l'immeuble. Les biens construits avant 1949 nécessitent davantage de diagnostics et coûtent donc plus cher." },
  { q: "Le DPE peut-il bloquer la vente d'un appartement à Paris ?", a: "Le DPE ne bloque pas juridiquement une vente, mais un classement F ou G ('passoire thermique') doit obligatoirement être mentionné dans toutes les annonces et peut entraîner une décote significative du prix, ainsi que des restrictions de location pour l'acheteur. Les obligations de rénovation énergétique se renforcent chaque année." },
  { q: "Combien de temps est valable un DPE à Paris ?", a: "Depuis juillet 2021, le DPE est valable 10 ans. Attention : les DPE réalisés avant cette date selon l'ancienne méthode de calcul ont pu être invalidés par les réformes successives — il est recommandé de vérifier la validité de votre DPE avant toute mise en vente." },
  { q: "Qui peut réaliser les diagnostics immobiliers ?", a: "Tous les diagnostics doivent être réalisés par un diagnostiqueur certifié, disposant d'une assurance responsabilité civile professionnelle en cours de validité. SellMyHome peut vous mettre en relation avec des diagnostiqueurs de confiance intervenant rapidement sur Paris." },
];

const diagnostics = [
  {
    icon: Flame,
    nom: "DPE — Diagnostic de Performance Énergétique",
    validite: "10 ans",
    obligatoire: "Tous les biens",
    desc: "Évalue la consommation énergétique et les émissions de gaz à effet de serre du logement, classées de A (très performant) à G (passoire thermique). Doit figurer dans toutes les annonces immobilières dès la mise en vente.",
  },
  {
    icon: Ruler,
    nom: "Loi Carrez — Mesurage de la surface privative",
    validite: "Illimitée (sauf travaux modifiant la surface)",
    obligatoire: "Biens en copropriété",
    desc: "Mesure officielle de la surface habitable hors murs, cloisons, marches et parties de moins de 1,80 m de hauteur. Une erreur de plus de 5 % peut entraîner une action en diminution du prix par l'acheteur après la vente.",
  },
  {
    icon: AlertTriangle,
    nom: "Amiante",
    validite: "Illimitée si absence d'amiante constatée",
    obligatoire: "Permis de construire avant le 1er juillet 1997",
    desc: "Recherche de matériaux contenant de l'amiante (flocages, calorifugeages, dalles de sol, etc.). Très fréquent dans les immeubles parisiens anciens et les copropriétés des années 1950-1970.",
  },
  {
    icon: Droplets,
    nom: "CREP — Constat de Risque d'Exposition au Plomb",
    validite: "1 an si plomb détecté, illimitée sinon",
    obligatoire: "Permis de construire avant le 1er janvier 1949",
    desc: "Concerne une grande partie du bâti haussmannien parisien. Recherche la présence de plomb dans les peintures, particulièrement dans les logements anciens non rénovés.",
  },
  {
    icon: Zap,
    nom: "Diagnostics électricité et gaz",
    validite: "3 ans",
    obligatoire: "Installations de plus de 15 ans",
    desc: "Vérifie la sécurité des installations électriques et de gaz. Très courant à Paris où de nombreux appartements anciens conservent une partie de leur installation d'origine.",
  },
  {
    icon: FileWarning,
    nom: "ERP — État des Risques et Pollutions",
    validite: "6 mois",
    obligatoire: "Tous les biens, partout en France",
    desc: "Informe l'acheteur sur les risques naturels, miniers, technologiques, sismiques et de pollution des sols liés à la localisation du bien. À Paris, concerne notamment le risque d'inondation (zones proches de la Seine) et certaines anciennes carrières.",
  },
];

const dpeClasses = [
  { lettre: "A", desc: "≤ 70 kWh/m²/an — Très performant, rare dans l'ancien parisien" },
  { lettre: "B", desc: "71 à 110 kWh/m²/an — Performant, souvent rénovation lourde récente" },
  { lettre: "C", desc: "111 à 180 kWh/m²/an — Bon niveau, immeubles récents ou rénovés" },
  { lettre: "D", desc: "181 à 250 kWh/m²/an — Moyenne nationale, fréquent dans l'ancien" },
  { lettre: "E", desc: "251 à 330 kWh/m²/an — Sous la moyenne, travaux recommandés" },
  { lettre: "F", desc: "331 à 420 kWh/m²/an — Passoire thermique, mention obligatoire en annonce" },
  { lettre: "G", desc: "> 420 kWh/m²/an — Passoire thermique, restrictions de location renforcées" },
];

export default function Page() {
  return (<>
    <Script id="faq-diag" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    <Script id="bc-diag" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Diagnostic immobilier Paris", item: "https://sellmyhome.fr/diagnostic-immobilier-paris" }] }) }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Diagnostic immobilier Paris</span></nav>
      <h1>Diagnostic immobilier à Paris — DPE, Carrez, amiante : le guide complet</h1>
      <p className="seo-intro">Avant de vendre un bien à Paris, un <strong>dossier de diagnostic technique (DDT)</strong> complet doit être constitué et annexé au compromis de vente. Ce guide détaille chaque diagnostic obligatoire, sa durée de validité, son coût indicatif et son impact réel sur votre projet de vente.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Estimer mon bien avant les diagnostics</Link></div>

      <h2>Pourquoi les diagnostics sont-ils essentiels à Paris ?</h2>
      <p>Le parc immobilier parisien est ancien : la majorité des immeubles datent d'avant 1949, voire du XIXe siècle pour les immeubles haussmanniens. Cette ancienneté implique presque systématiquement la présence de plomb et d'amiante, et des performances énergétiques souvent en retrait par rapport aux constructions récentes.</p>
      <p>Un dossier de diagnostic incomplet ou périmé peut retarder une vente, voire engager la responsabilité du vendeur après la signature. À l'inverse, un dossier anticipé et complet rassure les acheteurs et accélère la transaction — un argument que Marie intègre systématiquement dans sa stratégie de vente.</p>

      <Reveal>
        <h2>Les 6 diagnostics à connaître pour vendre à Paris</h2>
      </Reveal>
      {diagnostics.map((d, i) => {
        const Icon = d.icon;
        return (
          <Reveal key={i} delay={i * 60} className="seo-callout" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span className="icon-badge" style={{ flexShrink: 0 }}><Icon /></span>
            <div>
              <p style={{ marginBottom: 4 }}><strong>{d.nom}</strong></p>
              <p style={{ marginBottom: 4, fontSize: 13 }}>Validité : {d.validite} · Concerne : {d.obligatoire}</p>
              <p style={{ marginBottom: 0 }}>{d.desc}</p>
            </div>
          </Reveal>
        );
      })}

      <h2>Le DPE en détail — comprendre les classes énergétiques</h2>
      <p>Le Diagnostic de Performance Énergétique attribue une lettre de A à G selon la consommation énergétique annuelle du logement. À Paris, où le bâti ancien domine, les classes D et E sont les plus fréquentes. Voici la grille de lecture :</p>
      <div className="dpe-grid">
        {dpeClasses.map((d) => (
          <div key={d.lettre} className="dpe-row">
            <span className={`dpe-letter dpe-${d.lettre}`}>{d.lettre}</span>
            <span className="dpe-bar">{d.desc}</span>
          </div>
        ))}
      </div>

      <div className="seo-callout">
        <p><strong>Bon à savoir :</strong> depuis 2025, les logements classés G ne peuvent plus être proposés à la location. Cette restriction s'étendra aux logements F en 2028. Si votre bien est mal classé, anticiper ces échéances dans votre stratégie de vente (ou de travaux) est essentiel — Marie peut vous conseiller sur l'impact réel pour votre situation.</p>
      </div>

      <h2>Quel est l'impact des diagnostics sur le prix de vente ?</h2>
      <ul className="seo-list">
        <li><strong>DPE F ou G</strong> — décote généralement comprise entre 5 et 17 % selon le secteur et le type de bien, en forte croissance depuis 2025.</li>
        <li><strong>Amiante détecté</strong> — n'empêche pas la vente mais doit être mentionné ; un diagnostic montrant l'absence de matériaux dégradés rassure davantage que des recommandations de travaux.</li>
        <li><strong>Plomb détecté</strong> — impose une information claire à l'acheteur ; les travaux de mise en conformité restent à la charge du futur propriétaire sauf accord contraire.</li>
        <li><strong>Installations électriques/gaz non conformes</strong> — peuvent être un argument de négociation pour l'acheteur, mais ne bloquent pas la transaction.</li>
      </ul>
      <p>Pour évaluer précisément l'impact sur votre bien, consultez notre page <Link href="/estimation-paris">estimation immobilière à Paris</Link> ou notre <Link href="/prix-m2-paris">tableau des prix au m² par arrondissement</Link>.</p>

      <h2>Comment SellMyHome vous accompagne sur les diagnostics</h2>
      <p>Marie Houlier coordonne l'ensemble du dossier de diagnostic technique avec des diagnostiqueurs certifiés intervenant rapidement sur Paris et l'Île-de-France. Vous n'avez aucune démarche à effectuer seul : prise de rendez-vous, suivi, et intégration des résultats dans la stratégie de prix et de mise en valeur de votre bien.</p>

      <h2>FAQ — Diagnostic immobilier Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Vendre un appartement à Paris — guide complet</Link> · <Link href="/estimation-paris">Estimation immobilière gratuite à Paris</Link> · <Link href="/frais-notaire-paris">Frais de notaire à Paris</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Démarrer mon estimation gratuite</Link></div>
    </main>
  </>);
}
