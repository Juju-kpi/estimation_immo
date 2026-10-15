import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb } from "../../../components/SeoBits";

const PATH = "/vendre-appartement-indivision-paris";
const DESC = "Héritiers, ex-conjoints ou co-acheteurs en indivision : comment vendre à Paris, même sans accord de tous ? Unanimité, règle des 2/3, rachat de parts, délais.";

export const metadata = {
  title: "Vendre un bien en indivision à Paris : solutions",
  description: DESC,
  alternates: { canonical: `https://sellmyhome.fr${PATH}` },
  openGraph: { images: [OG_IMAGE], title: "Vendre un bien en indivision à Paris | SellMyHome", description: DESC, url: `https://sellmyhome.fr${PATH}` },
};

const faq = [
  { q: "Un seul indivisaire peut-il bloquer la vente ?", a: "En principe oui : vendre le bien entier est un acte de disposition qui exige l'accord de tous les indivisaires (article 815-3 du Code civil). Mais des solutions existent : la procédure des deux tiers devant notaire, la vente de sa propre part ou, en dernier recours, le partage judiciaire." },
  { q: "Qu'est-ce que la règle des deux tiers ?", a: "Les indivisaires qui détiennent au moins deux tiers des droits (et non deux tiers des personnes) peuvent exprimer devant notaire leur intention de vendre. Les autres sont informés et disposent de trois mois pour s'y opposer. En cas d'opposition ou de silence, le tribunal judiciaire peut autoriser la vente, qui se fait alors aux enchères (licitation), si elle ne porte pas une atteinte excessive aux droits des autres." },
  { q: "Peut-on racheter la part des autres indivisaires ?", a: "Oui. L'un des indivisaires peut racheter les parts des autres en leur versant une soulte, calculée sur la valeur du bien. L'opération passe par un acte de partage chez le notaire. Une estimation objective du bien est alors essentielle pour que chacun accepte le montant." },
  { q: "Peut-on vendre sa part à un tiers ?", a: "Oui, mais les autres indivisaires bénéficient d'un droit de préemption : ils doivent être informés du prix et des conditions par commissaire de justice et disposent d'un mois pour se porter acquéreurs. En pratique, une part d'indivision se vend difficilement et avec une forte décote." },
  { q: "Comment se répartit le prix de vente ?", a: "Après remboursement des éventuels crédits et frais, le notaire répartit le prix entre les indivisaires selon leurs quotes-parts, en tenant compte des comptes d'indivision (dépenses avancées par l'un, occupation du bien par un autre, etc.)." },
  { q: "Combien de temps faut-il pour vendre un bien en indivision ?", a: "Avec l'accord de tous, une vente en indivision prend le même temps qu'une vente classique : 2 à 3 mois pour trouver un acquéreur à Paris, puis 2 à 3 mois jusqu'à l'acte. La procédure des deux tiers ajoute plusieurs mois, et un partage judiciaire dure souvent un à trois ans." },
];

const solutions = [
  { num: "01", titre: "La vente amiable, avec l'accord de tous", desc: "C'est la voie la plus rapide et celle qui obtient le meilleur prix : tous les indivisaires signent le mandat puis la promesse de vente. Une estimation objective, fondée sur les ventes réelles, facilite grandement l'accord." },
  { num: "02", titre: "Le rachat des parts par un indivisaire", desc: "Celui qui souhaite garder le bien rachète les parts des autres contre une soulte. Le partage est acté chez le notaire ; un droit de partage s'applique sur la valeur des biens partagés." },
  { num: "03", titre: "La procédure des deux tiers", desc: "Les indivisaires détenant au moins deux tiers des droits peuvent saisir un notaire. Faute d'accord des autres dans les trois mois, le tribunal peut autoriser la vente, mais aux enchères, souvent en dessous du prix du marché." },
  { num: "04", titre: "Le partage judiciaire", desc: "En dernier recours, un indivisaire demande au juge de sortir de l'indivision (« nul n'est tenu de demeurer dans l'indivision »). Procédure longue et coûteuse, qui se termine souvent par une licitation." },
];

export default function Page() {
  return (<>
    <JsonLd data={faqSchema(faq)} />
    <JsonLd data={breadcrumbSchema([{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Vendre en indivision", path: PATH }])} />
    <main className="seo-page">
      <Breadcrumb items={[{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Indivision" }]} />
      <h1>Vendre un appartement en indivision à Paris : comment faire, même sans accord de tous</h1>
      <Byline readingTime={6} updated="octobre 2026" />
      <p className="seo-intro">
        Héritiers après une <Link href="/vendre-appartement-succession-paris">succession</Link>, couple non marié qui se sépare,
        amis ou frères et sœurs ayant acheté ensemble : à Paris, de nombreux appartements sont détenus <strong>en indivision</strong>.
        Tant que tout le monde est d'accord, la vente est simple. Quand ce n'est pas le cas, il existe des solutions — et le rôle
        d'un intermédiaire neutre devient déterminant.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn" data-track="indivision_estimation">Faire estimer le bien indivis — gratuit</Link>
      </div>

      <h2>Qu'est-ce que l'indivision ?</h2>
      <p>
        L'indivision, c'est la situation dans laquelle plusieurs personnes possèdent ensemble un même bien, chacune pour une
        <strong> quote-part</strong> (par exemple un tiers chacun entre trois héritiers), sans que le bien soit physiquement divisé.
        Les décisions importantes, et en premier lieu la vente du bien entier, exigent en principe l'<strong>accord de tous</strong>
        les indivisaires (article 815-3 du Code civil).
      </p>

      <h2>Les 4 façons de sortir d'une indivision</h2>
      <div className="etapes-grid">
        {solutions.map((e) => (
          <div key={e.num} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      <div className="seo-callout">
        <p><strong>Pourquoi l'accord amiable reste la meilleure option :</strong> une vente aux enchères (licitation) se conclut souvent en dessous du prix du marché, après des mois de procédure et des frais d'avocats. Une vente amiable, bien estimée et bien présentée, obtient le vrai prix du marché parisien pour tous les indivisaires.</p>
      </div>

      <h2>Comment Marie facilite l'accord entre indivisaires</h2>
      <ul className="seo-list">
        <li><strong>Une estimation objective et documentée</strong> — fondée sur les ventes réelles de l'immeuble et du quartier, pas sur l'avis de l'un ou de l'autre. C'est souvent ce qui débloque la situation.</li>
        <li><strong>Une information identique pour tous</strong> — mêmes comptes rendus de visite, mêmes offres présentées simultanément à chaque indivisaire, où qu'il vive.</li>
        <li><strong>Un mandat signé par tous</strong> — dès le départ, pour sécuriser la suite de la vente.</li>
        <li><strong>La coordination avec le notaire</strong> — répartition du prix, comptes d'indivision, éventuel rachat de parts.</li>
        <li><strong>La gestion à distance</strong> — visites, offres et signatures organisées pour les indivisaires qui vivent en province ou à l'étranger.</li>
      </ul>

      <h2>Indivision après une succession ou une séparation</h2>
      <p>
        Après un décès, les héritiers sont en indivision jusqu'au partage : la vente suppose d'abord que la succession soit réglée chez le notaire
        (voir notre guide <Link href="/vendre-appartement-succession-paris">vendre un appartement en succession à Paris</Link>).
        Pour les couples non mariés ou pacsés sous le régime de la séparation, le bien acheté ensemble est également en indivision ; les règles
        décrites ici s'appliquent, tout comme pour un <Link href="/vendre-appartement-divorce-paris">divorce</Link> tant que le partage n'est pas fait.
      </p>

      <AdvisorBox source="indivision" title="Vous êtes en indivision et souhaitez vendre ?" />

      <h2>FAQ — Vendre un bien en indivision à Paris</h2>
      <FaqList faq={faq} />

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-appartement-succession-paris">Vendre en succession</Link> · <Link href="/vendre-appartement-divorce-paris">Vendre lors d'un divorce</Link> · <Link href="/estimation-paris">Estimation immobilière à Paris</Link> · <Link href="/frais-notaire-paris">Frais de notaire</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn" data-track="indivision_estimation_bas">Obtenir une estimation gratuite</Link>
      </div>
    </main>
  </>);
}
