import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb } from "../../../components/SeoBits";

const PATH = "/vendre-appartement-paris-depuis-etranger";
const DESC = "Expatrié en Suisse, au Royaume-Uni ou ailleurs : vendez votre appartement parisien sans revenir. Visites, offres, procuration, fiscalité des non-résidents.";

export const metadata = {
  title: "Vendre son appartement à Paris depuis l'étranger",
  description: DESC,
  alternates: { canonical: `https://sellmyhome.fr${PATH}` },
  openGraph: { images: [OG_IMAGE], title: "Vendre son appartement à Paris depuis l'étranger | SellMyHome", description: DESC, url: `https://sellmyhome.fr${PATH}` },
};

const faq = [
  { q: "Peut-on vendre son appartement parisien sans venir en France ?", a: "Oui. L'estimation, la mise en vente, les visites et la négociation se gèrent à distance avec votre agente, et vous pouvez signer la promesse puis l'acte de vente par procuration. Les notaires peuvent aussi recevoir une procuration à distance, par visioconférence sécurisée, depuis 2020." },
  { q: "Comment signer l'acte de vente à distance ?", a: "Le plus souvent par procuration : vous donnez pouvoir à une personne (clerc de notaire, proche) de signer en votre nom. Elle peut être établie à distance par un notaire français en visioconférence, ou devant un notaire ou un consulat de votre pays de résidence, avec si nécessaire une apostille et une traduction." },
  { q: "Quels impôts pour un non-résident qui vend à Paris ?", a: "La plus-value est imposable en France à 19 %, plus des prélèvements sociaux de 17,2 %, ramenés à 7,5 % si vous êtes affilié à la sécurité sociale d'un pays de l'Union européenne, de l'EEE, de la Suisse ou du Royaume-Uni. Des abattements s'appliquent selon la durée de détention (exonération d'impôt sur le revenu après 22 ans, de prélèvements sociaux après 30 ans) et des exonérations existent sous conditions. Le notaire calcule et prélève l'impôt lors de la vente." },
  { q: "Faut-il un représentant fiscal ?", a: "Selon votre pays de résidence, un représentant fiscal accrédité peut être exigé lorsque le prix dépasse 150 000 € et qu'une plus-value est imposable. Les résidents de l'Union européenne en sont dispensés ; pour les autres pays, dont la Suisse, le notaire vous indique s'il est nécessaire." },
  { q: "Qui fait visiter l'appartement ?", a: "Marie organise et assure toutes les visites, avec un compte rendu détaillé après chacune (retours des acheteurs, niveau d'intérêt, questions). Vous suivez tout par téléphone, email ou visioconférence, aux horaires qui vous conviennent." },
  { q: "Combien de temps prend une vente à distance ?", a: "Le délai est le même qu'une vente classique à Paris : en général 2 à 3 mois pour trouver l'acquéreur, puis 2 à 3 mois jusqu'à l'acte. Prévoyez simplement quelques semaines pour établir la procuration, à anticiper dès l'acceptation d'une offre." },
];

const etapes = [
  { num: "01", titre: "Estimation à distance, puis visite sur place", desc: "Vous décrivez le bien en ligne ou par téléphone ; Marie se rend sur place (avec un proche, le gardien ou vos clés) et vous présente une estimation argumentée en visioconférence." },
  { num: "02", titre: "Préparation sans vous déplacer", desc: "Diagnostics, photos professionnelles, petits travaux de rafraîchissement : Marie coordonne les intervenants et vous envoie devis et photos avant toute décision." },
  { num: "03", titre: "Diffusion France et international", desc: "Portails français et réseau Leggett, qui présente votre bien à des acquéreurs britanniques, suisses, belges ou américains — souvent eux-mêmes familiers des achats à distance." },
  { num: "04", titre: "Visites et offres suivies en temps réel", desc: "Comptes rendus après chaque visite, offres transmises immédiatement avec un avis sur la position à adopter. Vous décidez de tout, depuis chez vous." },
  { num: "05", titre: "Signatures par procuration", desc: "Promesse puis acte authentique : Marie coordonne avec le notaire la procuration (à distance ou auprès d'un consulat) et le versement du prix sur votre compte." },
];

export default function Page() {
  return (<>
    <JsonLd data={faqSchema(faq)} />
    <JsonLd data={breadcrumbSchema([{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Vendre depuis l'étranger", path: PATH }])} />
    <main className="seo-page">
      <Breadcrumb items={[{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Depuis l'étranger" }]} />
      <h1>Vendre son appartement à Paris depuis l'étranger, sans revenir</h1>
      <Byline readingTime={6} updated="octobre 2026" />
      <p className="seo-intro">
        Vous vivez en Suisse, au Royaume-Uni, en Belgique ou plus loin, et vous possédez un appartement à Paris ? Vous pouvez le vendre
        <strong> entièrement à distance</strong>. La clé : une interlocutrice sur place, de confiance, qui gère les visites, la négociation et le lien avec
        le notaire, et vous tient informé à chaque étape. C'est exactement le rôle de Marie Houlier, agente du réseau international Leggett.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn" data-track="etranger_estimation">Faire estimer mon appartement à distance</Link>
      </div>

      <h2>Une vente à distance, étape par étape</h2>
      <div className="etapes-grid">
        {etapes.map((e) => (
          <div key={e.num} className="etape-card">
            <span className="etape-num">{e.num}</span>
            <h3 className="etape-titre">{e.titre}</h3>
            <p className="etape-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      <h2>La procuration : signer sans être présent</h2>
      <p>
        Pour la promesse de vente comme pour l'acte authentique, vous pouvez donner <strong>procuration</strong> à une personne qui signera en votre nom.
        Depuis 2020, les notaires français peuvent l'établir <strong>à distance, par visioconférence sécurisée</strong> ; elle peut aussi être signée devant
        un notaire ou un consulat de votre pays, avec si nécessaire une apostille et une traduction. Comptez quelques semaines : mieux vaut l'anticiper
        dès qu'une offre est acceptée.
      </p>

      <h2>La fiscalité d'un vendeur non-résident</h2>
      <ul className="seo-list">
        <li><strong>Plus-value imposable en France</strong> : 19 % d'impôt sur le revenu, plus 17,2 % de prélèvements sociaux, ramenés à <strong>7,5 %</strong> si vous êtes affilié à la sécurité sociale d'un pays de l'UE, de l'EEE, de la Suisse ou du Royaume-Uni.</li>
        <li><strong>Abattements pour durée de détention</strong> : exonération d'impôt sur le revenu après 22 ans, de prélèvements sociaux après 30 ans ; des exonérations existent aussi sous conditions (ancienne résidence principale, par exemple).</li>
        <li><strong>Représentant fiscal</strong> : il peut être exigé au-delà de 150 000 € selon votre pays de résidence (les résidents de l'UE en sont dispensés).</li>
        <li><strong>Prélèvement à la source</strong> : le notaire calcule l'impôt et le règle lors de la vente ; vous recevez le prix net.</li>
      </ul>
      <p className="prix-source">Ces règles générales ne remplacent pas l'avis du notaire, qui tient compte de votre situation et de la convention fiscale applicable avec votre pays.</p>

      <div className="seo-callout">
        <p><strong>Un atout pour vendre au meilleur prix :</strong> grâce au réseau Leggett, votre appartement est aussi présenté à des acquéreurs internationaux, souvent habitués à acheter à distance. Pour un bien de caractère dans un quartier recherché, cette clientèle fait souvent la différence.</p>
      </div>

      <AdvisorBox source="etranger" title="Vous vivez à l'étranger et vendez à Paris ?" text="Visioconférence, téléphone ou email, aux horaires de votre fuseau : Marie vous présente l'estimation, organise les visites et vous accompagne jusqu'au virement du prix, sans que vous ayez à vous déplacer." />

      <h2>FAQ — Vendre son appartement parisien depuis l'étranger</h2>
      <FaqList faq={faq} />

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/vendre-a-paris">Guide pour vendre à Paris</Link> · <Link href="/vendre-appartement-loue-paris">Vendre un appartement loué</Link> · <Link href="/vendre-appartement-succession-paris">Vendre en succession</Link> · <Link href="/frais-notaire-paris">Frais de notaire</Link> · <Link href="/prix-m2-paris">Prix m² Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn" data-track="etranger_estimation_bas">Obtenir mon estimation gratuite</Link>
      </div>
    </main>
  </>);
}
