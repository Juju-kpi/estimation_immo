export const metadata = {
  title: "Vendre un appartement lors d'un divorce à Paris",
  description: "Divorce ou séparation : comment vendre le bien commun à Paris ? Accord, régime matrimonial, partage du prix. Marie accompagne les deux parties, en neutralité.",
  alternates: { canonical: "https://sellmyhome.fr/vendre-appartement-divorce-paris" },
  openGraph: { images: [OG_IMAGE], title: "Vendre un appartement lors d'un divorce à Paris | SellMyHome", description: "Divorce ou séparation : comment vendre le bien commun à Paris ? Accord, régime matrimonial, partage du prix. Marie accompagne les deux parties, en neutralité.", url: "https://sellmyhome.fr/vendre-appartement-divorce-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline } from "../../../components/SeoBits";

const faq = [
  { q: "Les deux époux doivent-ils être d'accord pour vendre en cas de divorce ?", a: "En principe oui, les deux parties doivent signer le mandat de vente et l'acte de vente. En cas de désaccord total, un juge peut ordonner la licitation (vente aux enchères judiciaire), mais cette procédure est longue et le prix obtenu souvent inférieur au marché. Un accord amiable est toujours préférable." },
  { q: "Peut-on vendre avant que le divorce soit prononcé ?", a: "Oui, la vente du bien commun peut intervenir à n'importe quelle étape de la procédure de divorce, dès lors que les deux parties sont d'accord. Dans un divorce par consentement mutuel, la vente peut même précéder la signature de la convention de divorce." },
  { q: "Comment se répartit le produit de la vente lors d'un divorce ?", a: "La répartition dépend du régime matrimonial. En communauté de biens (le régime légal par défaut), le produit est partagé à 50/50, après remboursement des éventuels crédits et prise en compte des apports personnels. En séparation de biens, chacun récupère sa quote-part. Le notaire liquide la situation patrimoniale." },
  { q: "L'un des époux peut-il rester dans le logement pendant la vente ?", a: "Oui, l'un des époux peut continuer à occuper le logement pendant la mise en vente, selon les modalités fixées par le juge aux affaires familiales ou d'un commun accord. Cela peut compliquer les visites — Marie organise les créneaux de visite en tenant compte de cette contrainte." },
  { q: "Marie travaille-t-elle avec les deux parties ou seulement l'une d'elles ?", a: "Marie intervient comme mandataire commun des deux parties. Elle assure une neutralité totale : même information, même transparence, mêmes compte-rendus de visites pour les deux époux, qu'ils soient ou non en contact direct. Son objectif est d'obtenir le meilleur prix dans les meilleurs délais pour les deux." },
];

const etapes = [
  { num: "01", titre: "Mandat commun des deux parties", desc: "Marie établit un mandat de vente signé par les deux époux (ou leurs avocats). Chaque partie reçoit les mêmes informations tout au long du processus." },
  { num: "02", titre: "Estimation objective et documentée", desc: "Marie présente une estimation basée sur les transactions réelles DVF — pas sur les prix affichés. Cette objectivité aide les deux parties à se mettre d'accord sur le prix." },
  { num: "03", titre: "Organisation des visites", desc: "Marie coordonne les visites en tenant compte de la situation d'occupation du logement. Les deux parties reçoivent un compte-rendu identique après chaque visite." },
  { num: "04", titre: "Gestion des offres", desc: "Marie présente chaque offre aux deux parties simultanément et conseille sur la position à adopter. La décision finale appartient aux deux époux conjointement." },
  { num: "05", titre: "Compromis et acte de vente", desc: "Marie coordonne avec les avocats des deux parties et le notaire pour que la vente s'intègre dans le règlement du divorce. Les fonds sont consignés puis répartis selon les dispositions convenues." },
];

export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Vendre à Paris", item: "https://sellmyhome.fr/vendre-a-paris" }, { "@type": "ListItem", position: 3, name: "Vendre lors d'un divorce", item: "https://sellmyhome.fr/vendre-appartement-divorce-paris" }] }} />
    <main className="seo-page">
      <nav className="breadcrumb">
        <Link href="/">Accueil</Link> › <Link href="/vendre-a-paris">Vendre à Paris</Link> › <span>Divorce &amp; séparation</span>
      </nav>
      <h1>Vendre un appartement lors d'un divorce à Paris</h1>
      <Byline readingTime={6} />
      <p className="seo-intro">
        Un divorce ou une séparation implique souvent de vendre le bien immobilier commun. C'est une démarche délicate, qui demande neutralité, rigueur et discrétion. Marie Houlier intervient comme <strong>mandataire commun des deux parties</strong> — avec la même transparence et le même professionnalisme envers chacune, pour obtenir le meilleur prix dans les meilleures conditions.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn">Estimer le bien commun — Gratuit &amp; neutre</Link>
      </div>

      <h2>Quelle procédure pour vendre le bien commun lors d'un divorce ?</h2>
      <p>La procédure dépend du régime matrimonial et du type de divorce. Dans un <strong>divorce par consentement mutuel</strong>, les époux se mettent d'accord sur tout, y compris sur la vente du bien et la répartition du produit — la vente peut se faire rapidement, en parallèle de la procédure de divorce.</p>
      <p>Dans un <strong>divorce contentieux</strong>, la situation est plus complexe. Les deux époux doivent néanmoins s'accorder sur le principe de vente et désigner un mandataire commun. À défaut d'accord, le juge aux affaires familiales peut ordonner la vente judiciaire (licitation), qui aboutit généralement à un prix inférieur au marché.</p>

      <div className="seo-callout">
        <p><strong>Le rôle de Marie :</strong> en intervenant comme mandataire commun, Marie évite que l'un des époux ait le sentiment que l'agent "est du côté de l'autre". Elle présente les mêmes informations aux deux parties, coordonne avec leurs avocats respectifs, et n'a qu'un seul objectif : vendre au meilleur prix dans les meilleurs délais.</p>
      </div>

      <h2>Les 5 étapes d'une vente lors d'un divorce</h2>
      <div className="etapes-grid">
        {etapes.map((e, i) => (
          <div key={i} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      <h2>Régimes matrimoniaux et répartition du produit de vente</h2>
      <p>La répartition du produit de vente dépend du régime matrimonial :</p>
      <ul className="seo-list">
        <li><strong>Communauté légale</strong> (régime par défaut) — le bien est commun à 50/50. Le produit de vente, après remboursement du crédit immobilier et prise en compte des apports personnels de chaque époux, est partagé en deux parts égales.</li>
        <li><strong>Séparation de biens</strong> — chaque époux récupère sa quote-part selon la proportion d'acquisition initiale (souvent documentée dans l'acte d'achat).</li>
        <li><strong>Participation aux acquêts</strong> — régime mixte, liquidé au moment du divorce par le notaire.</li>
      </ul>
      <p>Dans tous les cas, la liquidation du régime matrimonial est effectuée par le notaire, qui calcule ce que chacun doit recevoir après règlement de toutes les dettes communes.</p>

      <h2>Et pour les couples non mariés (PACS, concubinage) ?</h2>
      <p>Pour les partenaires pacsés, le régime de séparation de biens s'applique par défaut : chacun reprend sa quote-part du bien selon les proportions d'acquisition. Pour les concubins, le bien est en indivision : les mêmes règles qu'une indivision classique s'appliquent, nécessitant l'accord des deux parties pour vendre.</p>

      <AdvisorBox source="vendre-appartement-divorce-paris" />

      <h2>FAQ — Vente lors d'un divorce à Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Guide complet pour vendre à Paris</Link> · <Link href="/estimation-paris">Estimation immobilière gratuite</Link> · <Link href="/frais-notaire-paris">Frais de notaire Paris</Link> · <Link href="/vendre-appartement-succession-paris">Vendre en succession</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/contact" className="primary-btn">Contacter Marie pour ma situation</Link>
      </div>
    </main>
  </>);
}