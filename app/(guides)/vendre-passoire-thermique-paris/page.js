import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb } from "../../../components/SeoBits";

const PATH = "/vendre-passoire-thermique-paris";
const DESC = "Vendre un appartement classé F ou G à Paris en 2026 : c'est autorisé. Décote réelle, obligations, DPE recalculé en 2026, travaux ou pas : le guide pour décider.";

export const metadata = {
  title: "Vendre un appartement DPE F ou G à Paris en 2026",
  description: DESC,
  alternates: { canonical: `https://sellmyhome.fr${PATH}` },
  openGraph: { images: [OG_IMAGE], title: "Vendre un appartement DPE F ou G à Paris | SellMyHome", description: DESC, url: `https://sellmyhome.fr${PATH}` },
};

const faq = [
  { q: "Peut-on vendre un logement classé G ?", a: "Oui. Aucune loi n'interdit de vendre une passoire thermique : les restrictions issues de la loi Climat et résilience portent sur la location (logements G depuis 2025, F à partir de 2028, E à partir de 2034). Vous n'êtes pas non plus obligé de faire des travaux avant de vendre." },
  { q: "Quelle décote pour un appartement F ou G à Paris ?", a: "À Paris, l'écart de prix reste plus modéré que dans le reste de la France, car la rareté de l'offre soutient la demande : il est souvent de quelques pourcents pour un appartement familial, davantage pour un studio destiné à la location. Il dépend surtout du coût des travaux nécessaires et de la clientèle visée." },
  { q: "L'audit énergétique est-il obligatoire pour vendre un appartement ?", a: "Non, pas pour un appartement en copropriété. L'audit énergétique réglementaire concerne la vente des maisons individuelles et des immeubles en monopropriété classés F ou G (et E depuis 2025). Pour un appartement, le DPE suffit." },
  { q: "Mon DPE peut-il s'améliorer sans travaux en 2026 ?", a: "C'est possible si votre logement est chauffé à l'électricité : depuis le 1er janvier 2026, le coefficient de conversion de l'électricité est passé de 2,3 à 1,9. Si votre DPE date d'avant 2026, une attestation gratuite actualisée peut être téléchargée sur l'observatoire DPE de l'ADEME, sans nouvelle visite. Certains logements changent ainsi de classe." },
  { q: "Faut-il faire des travaux avant de vendre ?", a: "Pas forcément. Des travaux ciblés (chauffage, fenêtres, ventilation) peuvent faire gagner une classe et rassurer les acheteurs, mais leur coût n'est pas toujours récupéré dans le prix. Le plus souvent, il est plus efficace de vendre en l'état avec des devis chiffrés qui permettent aux acheteurs d'évaluer le budget." },
  { q: "Que doit mentionner l'annonce d'un bien F ou G ?", a: "Les classes énergie et climat, l'estimation des dépenses annuelles d'énergie et, pour un logement classé F ou G, la mention « Logement à consommation énergétique excessive ». Marie rédige des annonces conformes, qui présentent ces informations sans dévaloriser le bien." },
];

export default function Page() {
  return (<>
    <JsonLd data={faqSchema(faq)} />
    <JsonLd data={breadcrumbSchema([{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "Vendre un DPE F ou G", path: PATH }])} />
    <main className="seo-page">
      <Breadcrumb items={[{ name: "Vendre à Paris", path: "/vendre-a-paris" }, { name: "DPE F ou G" }]} />
      <h1>Vendre un appartement classé F ou G à Paris : ce qu'il faut savoir en 2026</h1>
      <Byline readingTime={6} updated="octobre 2026" />
      <p className="seo-intro">
        Votre appartement est classé F ou G au DPE ? Vous n'êtes pas seul : une grande partie du bâti ancien parisien est concernée.
        <strong> Vendre reste parfaitement possible</strong>, et la décote est souvent moins forte à Paris qu'ailleurs. Encore faut-il connaître
        les règles, vérifier son DPE et choisir la bonne stratégie : vendre en l'état ou faire des travaux.
      </p>
      <div className="seo-cta-block">
        <Link href="/estimation" className="primary-btn" data-track="dpe_estimation">Estimer mon appartement F ou G — gratuit</Link>
      </div>

      <h2>Ce que dit la loi pour la vente</h2>
      <ul className="seo-list">
        <li><strong>La vente est libre</strong> — aucune interdiction ni obligation de travaux avant de vendre.</li>
        <li><strong>L'annonce</strong> doit afficher les classes énergie et climat, l'estimation des dépenses annuelles d'énergie et, pour F et G, la mention « Logement à consommation énergétique excessive ».</li>
        <li><strong>L'audit énergétique</strong> n'est pas exigé pour un appartement en copropriété (il vise les maisons et les immeubles en monopropriété).</li>
        <li><strong>La location est encadrée</strong> — logements G interdits aux nouveaux baux depuis 2025, F à partir de 2028, E à partir de 2034 : c'est ce qui inquiète les acheteurs investisseurs.</li>
      </ul>

      <div className="seo-callout">
        <p><strong>Premier réflexe en 2026 : vérifiez votre DPE.</strong> Depuis le 1er janvier 2026, le calcul favorise les logements chauffés à l'électricité (coefficient passé de 2,3 à 1,9). Si votre DPE est antérieur, une attestation actualisée gratuite est disponible sur l'observatoire DPE de l'ADEME, sans nouvelle visite. Un studio classé G peut ainsi remonter en F, voire en E.</p>
      </div>

      <h2>Quelle décote à Paris ?</h2>
      <p>
        L'impact du DPE sur le prix est réel mais <strong>plus modéré à Paris</strong> que dans le reste de la France : la rareté de l'offre et la
        demande des propriétaires occupants le compensent en partie. Il est plus marqué pour les <strong>petites surfaces</strong> achetées par des
        investisseurs, qui ne pourront pas louer un logement G, et pour les biens nécessitant de lourds travaux (isolation, chauffage collectif à revoir en copropriété).
      </p>
      <p>
        La bonne estimation part donc de ventes réellement comparables, <strong>au même niveau de DPE</strong>, dans votre quartier. C'est précisément
        ce que fait Marie, en s'appuyant sur les données de vente et sur le <Link href="/prix-m2-paris">prix au m² de votre arrondissement</Link>.
      </p>

      <h2>Vendre en l'état ou faire des travaux ?</h2>
      <div className="etapes-grid">
        <div className="etape-card">
          <span className="etape-num">A</span>
          <h3 className="etape-titre">Vendre en l'état, chiffres à l'appui</h3>
          <p className="etape-desc">La solution la plus fréquente. Faites établir un ou deux devis de travaux : l'acheteur évalue son budget, négocie moins « à l'aveugle » et la vente se conclut plus vite.</p>
        </div>
        <div className="etape-card">
          <span className="etape-num">B</span>
          <h3 className="etape-titre">Des travaux ciblés pour gagner une classe</h3>
          <p className="etape-desc">Changement de mode de chauffage, fenêtres, ventilation, isolation intérieure : parfois quelques milliers d'euros suffisent à sortir d'une classe G, surtout pour une petite surface.</p>
        </div>
        <div className="etape-card">
          <span className="etape-num">C</span>
          <h3 className="etape-titre">Regarder la copropriété</h3>
          <p className="etape-desc">Des travaux votés (ravalement avec isolation, chaudière collective) ou un plan pluriannuel de travaux peuvent rassurer l'acheteur sur l'évolution du DPE. À mettre en avant dans l'annonce.</p>
        </div>
        <div className="etape-card">
          <span className="etape-num">D</span>
          <h3 className="etape-titre">Cibler la bonne clientèle</h3>
          <p className="etape-desc">Les acheteurs qui occupent le logement sont moins sensibles au DPE que les investisseurs. La présentation et la diffusion doivent s'adresser à eux en priorité.</p>
        </div>
      </div>

      <AdvisorBox source="dpe" title="Votre appartement est classé F ou G ?" />

      <h2>FAQ — Vendre un appartement F ou G à Paris</h2>
      <FaqList faq={faq} />

      <div className="seo-internal-links">
        <p>À lire aussi : <Link href="/diagnostic-immobilier-paris">Diagnostics immobiliers : prix et liste</Link> · <Link href="/vendre-appartement-loue-paris">Vendre un appartement loué</Link> · <Link href="/vendre-a-paris">Guide pour vendre à Paris</Link> · <Link href="/estimation-paris">Estimation à Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
        <Link href="/estimation" className="primary-btn" data-track="dpe_estimation_bas">Obtenir mon estimation gratuite</Link>
      </div>
    </main>
  </>);
}
