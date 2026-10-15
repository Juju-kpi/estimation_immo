import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb } from "../../../components/SeoBits";

const PATH = "/vendre-appartement-loue-paris";
const DESC = "Vendre un appartement loué à Paris : vente occupée ou congé pour vendre, préavis, droit de préemption du locataire, décote réelle. Le guide 2026 pour décider.";

export const metadata = {
  title: "Vendre un appartement loué à Paris : guide 2026",
  description: DESC,
  alternates: { canonical: `https://sellmyhome.fr${PATH}` },
  openGraph: { images: [OG_IMAGE], title: "Vendre un appartement loué à Paris | SellMyHome", description: DESC, url: `https://sellmyhome.fr${PATH}` },
};

const faq = [
  { q: "Peut-on vendre un appartement avec un locataire en place ?", a: "Oui, à tout moment. Le bail continue simplement avec le nouveau propriétaire, aux mêmes conditions. L'acheteur est alors le plus souvent un investisseur, qui raisonne en rendement locatif." },
  { q: "Le locataire est-il prioritaire pour acheter ?", a: "Seulement si vous lui donnez congé pour vendre un logement loué vide : il bénéficie alors d'un droit de préemption et peut acheter au prix et aux conditions indiqués dans le congé pendant les deux premiers mois du préavis. Si vous vendez le logement occupé, ou s'il s'agit d'un bail meublé, il n'y a pas de droit de préemption légal." },
  { q: "Quand donner congé pour vendre ?", a: "Pour un logement loué vide, le congé doit parvenir au locataire au moins six mois avant la fin du bail ; pour un meublé, au moins trois mois avant. Le congé est envoyé par lettre recommandée avec accusé de réception, par commissaire de justice ou remis en main propre contre récépissé." },
  { q: "Quelle décote pour un appartement loué à Paris ?", a: "Les écarts constatés vont généralement de 10 à 20 % par rapport au même bien vendu libre. La décote dépend surtout du temps restant sur le bail, du niveau du loyer par rapport au marché (encadré à Paris), du type de bail (meublé ou vide) et du profil du locataire." },
  { q: "Que devient le dépôt de garantie ?", a: "En cas de vente, c'est le nouveau propriétaire qui devra le restituer au locataire en fin de bail. En pratique, son montant est pris en compte entre vendeur et acheteur lors de la signature chez le notaire." },
  { q: "Peut-on donner congé à un locataire âgé ?", a: "Si le locataire a plus de 65 ans et des ressources modestes, le propriétaire doit, en plus du congé, lui proposer un relogement correspondant à ses besoins et à ses possibilités, sauf si le propriétaire est lui-même âgé de plus de 65 ans ou dispose de ressources modestes. Ce point se vérifie au cas par cas avec le notaire." },
];

export default function Page() {
  return (<>
    <JsonLd data={faqSchema(faq)} />
    <JsonLd data={breadcrumbSchema([{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Vendre un appartement loué", path: PATH }])} />
    <main className="seo-page">
      <Breadcrumb items={[{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Appartement loué" }]} />
      <h1>Vendre un appartement loué à Paris : occupé ou libre, que choisir ?</h1>
      <Byline readingTime={6} updated="octobre 2026" />
      <p className="seo-intro">
        Vous êtes propriétaire bailleur à Paris et souhaitez vendre ? Deux stratégies s'offrent à vous : <strong>vendre le logement occupé</strong>,
        avec le locataire en place, ou <strong>donner congé pour vendre</strong> et céder un bien libre. Le bon choix dépend de la date de fin du bail,
        du loyer, du type de bail… et de l'écart de prix entre les deux options, que Marie chiffre pour vous.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn" data-track="loue_estimation">Estimer mon bien loué et libre — gratuit</Link>
      </div>

      <h2>Option 1 : vendre le logement occupé</h2>
      <p>
        Le bail se poursuit avec l'acquéreur, sans préavis ni délai : vous pouvez mettre en vente immédiatement. La clientèle est celle des
        <strong> investisseurs</strong>, qui regardent la rentabilité (loyer, charges, taxe foncière), la durée restante du bail et la qualité du locataire.
        À Paris, l'<strong>encadrement des loyers</strong> limite la marge de progression du loyer, ce qui pèse sur le prix.
      </p>
      <ul className="seo-list">
        <li><strong>Avantages</strong> — vente rapide à organiser, revenus locatifs jusqu'à la signature, pas de période de vacance.</li>
        <li><strong>Inconvénients</strong> — décote généralement comprise entre 10 et 20 %, visites à organiser avec le locataire, clientèle plus restreinte.</li>
      </ul>

      <h2>Option 2 : donner congé pour vendre libre</h2>
      <p>
        Vous donnez congé au locataire pour la fin du bail, puis vendez un logement vide, accessible à tous les acheteurs (résidence principale comprise),
        donc au <strong>prix du marché</strong>.
      </p>
      <ul className="seo-list">
        <li><strong>Bail vide</strong> — congé au moins <strong>6 mois</strong> avant l'échéance. Le locataire dispose d'un <strong>droit de préemption</strong> : il peut acheter au prix du congé pendant les deux premiers mois du préavis. Si vous baissez ensuite le prix, il doit de nouveau en être informé.</li>
        <li><strong>Bail meublé</strong> — congé au moins <strong>3 mois</strong> avant l'échéance, sans droit de préemption légal.</li>
        <li><strong>Locataire protégé</strong> — plus de 65 ans et ressources modestes : une offre de relogement est en principe obligatoire.</li>
      </ul>

      <div className="seo-callout">
        <p><strong>Le calcul à faire :</strong> comparez le prix « occupé » obtenu tout de suite avec le prix « libre » obtenu après le préavis, diminué des loyers perdus pendant la vacance et des éventuels travaux de remise en état. Marie vous présente les deux estimations, chiffres à l'appui, pour décider sereinement.</p>
      </div>

      <h2>Les documents à prévoir</h2>
      <ul className="seo-list">
        <li>Le bail et ses avenants, les dernières quittances et l'état des lieux d'entrée.</li>
        <li>Le montant du dépôt de garantie, qui sera à la charge du nouveau propriétaire en fin de bail.</li>
        <li>Le <Link href="/diagnostic-immobilier-paris">dossier de diagnostics</Link> habituel ; le DPE est scruté par les investisseurs, car les logements classés G ne peuvent plus être loués aux nouveaux baux depuis 2025 (F en 2028) — voir <Link href="/vendre-passoire-thermique-paris">vendre un appartement DPE F ou G</Link>.</li>
      </ul>

      <AdvisorBox source="loue" title="Occupé ou libre : faisons le calcul ensemble" />

      <h2>FAQ — Vendre un appartement loué à Paris</h2>
      <FaqList faq={faq} />

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Guide pour vendre à Paris</Link> · <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/vendre-appartement-rapidement-paris">Vendre rapidement</Link> · <Link href="/frais-notaire-paris">Frais de notaire</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn" data-track="loue_estimation_bas">Obtenir mon estimation gratuite</Link>
      </div>
    </main>
  </>);
}
