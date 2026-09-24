export const metadata = {
  title: "Agent immobilier Paris & IDF affilié Leggett",
  description: "Un seul interlocuteur de l'estimation à la signature : Marie Houlier, agente Leggett depuis 15 ans à Paris et en Île-de-France. Estimation gratuite sous 24h.",
  alternates: { canonical: "https://sellmyhome.fr/agence-immobiliere-paris" },
  openGraph: { images: [OG_IMAGE], title: "Agent immobilier Paris & IDF affilié Leggett | SellMyHome", description: "Un seul interlocuteur de l'estimation à la signature : Marie Houlier, agente Leggett depuis 15 ans à Paris et en Île-de-France. Estimation gratuite sous 24h.", url: "https://sellmyhome.fr/agence-immobiliere-paris" },
};
import { OG_IMAGE } from "../../../lib/site";
import Link from "next/link";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb, ZoneChips } from "../../../components/SeoBits";
import { PARIS, IDF } from "../../../lib/locations";

const faq = [
  { q: "SellMyHome est-il une agence immobilière ?", a: "SellMyHome est le site de Marie Houlier, conseillère immobilière affiliée au réseau Leggett. Son rôle est de vous mettre en relation directe avec elle : c'est Marie qui estime votre bien, organise la vente et vous accompagne jusqu'au notaire. Vous bénéficiez ainsi de l'attention d'une agente indépendante et de la diffusion d'un grand réseau international." },
  { q: "Qu'est-ce qui distingue Marie des grandes agences parisiennes ?", a: "Un suivi personnalisé avec un seul interlocuteur du début à la fin. Pas de turn-over, pas de dossier qui passe de main en main, pas de centre d'appel. Et grâce à l'affiliation Leggett, une diffusion internationale que peu d'agences de quartier peuvent offrir." },
  { q: "Marie peut-elle vendre des biens de prestige ?", a: "Oui. Le réseau Leggett est reconnu pour la vente de biens de caractère et de prestige, avec une clientèle internationale (britannique, américaine, européenne) très active sur le haut de gamme parisien et dans l'ouest francilien." },
  { q: "Quels sont les honoraires pour une vente ?", a: "Les honoraires dépendent du type de bien et de la mission confiée ; Marie vous les présente clairement avant toute signature de mandat. L'estimation initiale est toujours gratuite et sans engagement." },
  { q: "Dans quels secteurs Marie intervient-elle ?", a: "Dans les 20 arrondissements de Paris et en Île-de-France, en particulier dans les communes proches comme Neuilly-sur-Seine, Levallois-Perret, Boulogne-Billancourt, Issy-les-Moulineaux, Vincennes, Saint-Mandé, Montreuil, Versailles ou Saint-Germain-en-Laye." },
];

export default function Page() {
  return (<>
    <JsonLd data={faqSchema(faq)} />
    <JsonLd data={breadcrumbSchema([{ name: "Notre approche", path: "/agence-immobiliere-paris" }])} />
    <main className="seo-page">
      <Breadcrumb items={[{ name: "Notre approche" }]} />
      <h1>Votre agent immobilier à Paris &amp; en Île-de-France, affilié Leggett</h1>
      <Byline readingTime={4} />
      <p className="seo-intro">SellMyHome est né d'une conviction simple : <strong>dans une vente immobilière, l'humain fait la différence</strong>. Ce site n'est pas une plateforme anonyme — c'est la porte d'entrée pour parler directement avec <strong>Marie Houlier</strong>, conseillère immobilière affiliée au réseau international <strong>Leggett</strong>, qui vous accompagne personnellement pour estimer, vendre ou acheter à Paris et en Île-de-France.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Estimation gratuite — Sans engagement</Link></div>

      <h2>Ce que nous proposons</h2>
      <ul className="seo-list">
        <li><Link href="/estimation"><strong>Une estimation gratuite et argumentée</strong></Link> — Marie étudie les ventes réelles de votre secteur et vous rappelle sous 24h.</li>
        <li><Link href="/vendre-a-paris"><strong>Un accompagnement complet à la vente</strong></Link> — mise en valeur, photos, diffusion France et international, visites, négociation, notaire.</li>
        <li><Link href="/chasseur-paris"><strong>Une recherche sur-mesure pour les acheteurs</strong></Link> — biens off-market, visites triées, négociation au juste prix.</li>
        <li><strong>Un seul interlocuteur</strong> — la même personne du premier appel à la signature de l'acte.</li>
      </ul>

      <h2>Une approche à taille humaine</h2>
      <p>Dans un marché immobilier de plus en plus digitalisé, SellMyHome fait le pari de l'humain. Vous avez un seul interlocuteur, Marie Houlier, qui vous connaît, connaît votre bien, et ne lâche pas votre dossier jusqu'à la signature chez le notaire.</p>
      <p>Pas de turn-over, pas de négociateur qui change en cours de route, pas de dossier qui se perd. Marie répond à vos appels, vous tient informé après chaque visite et défend vos intérêts à chaque étape. Si vous vivez loin de votre bien, elle s'organise pour tout gérer à distance, avec votre accord à chaque décision importante.</p>

      <h2>Le réseau Leggett : une diffusion internationale depuis Paris</h2>
      <p>Marie est affiliée à <strong>Leggett Immobilier</strong>, réseau spécialisé dans la vente de biens français auprès d'une clientèle internationale. Votre bien est ainsi présenté à des acquéreurs britanniques, américains, belges, suisses et européens, en plus des portails français.</p>
      <p>Pour les biens de caractère, les appartements haussmanniens ou les adresses recherchées (6e, 7e, 8e, 16e, Neuilly, Saint-Germain-en-Laye), cet accès à la clientèle internationale est un avantage décisif.</p>

      <h2>Notre zone d'intervention</h2>
      <p>Marie intervient dans les <Link href="/estimation-paris">20 arrondissements de Paris</Link>, avec une expertise particulière dans les 6e, 7e, 8e, 15e, 16e et 17e, et dans les <Link href="/estimation-ile-de-france">communes proches d'Île-de-France</Link>. Elle connaît chaque type de bâti de l'intérieur : les immeubles haussmanniens du 7e, les copropriétés des années 70 du 15e, les lofts du 11e, les maisons de Saint-Cloud ou les résidences familiales de Vincennes.</p>
      <ZoneChips zones={[...PARIS.filter((z) => ["paris-6", "paris-7", "paris-8", "paris-15", "paris-16", "paris-17"].includes(z.slug)), ...IDF.slice(0, 6)]} label="Secteurs principaux" />

      <h2>Nos engagements</h2>
      <ul className="seo-list">
        <li><strong>Transparence</strong> — une estimation fondée sur des ventes réelles, pas un prix gonflé pour décrocher un mandat.</li>
        <li><strong>Disponibilité</strong> — un rappel sous 24h, des comptes rendus après chaque visite.</li>
        <li><strong>Confidentialité</strong> — vos coordonnées ne sont ni revendues ni transmises à d'autres agences.</li>
        <li><strong>Liberté</strong> — l'estimation est gratuite et ne vous engage à rien.</li>
      </ul>

      <AdvisorBox source="agence" />

      <h2>FAQ — Notre approche</h2>
      <FaqList faq={faq} />
      <div className="seo-internal-links">
        <p><Link href="/nous">Qui est Marie Houlier ?</Link> · <Link href="/estimation-paris">Estimation immobilière Paris</Link> · <Link href="/estimation-ile-de-france">Estimation Île-de-France</Link> · <Link href="/vendre-a-paris">Vendre à Paris</Link> · <Link href="/chasseur-paris">Chasseur immobilier</Link> · <Link href="/prix-m2-paris">Prix m² Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Démarrer avec une estimation gratuite</Link></div>
    </main>
  </>);
}
