export const metadata = {
  title: "Agence immobilière Paris — SellMyHome, agente Leggett",
  description: "SellMyHome est une agence immobilière parisienne affiliée au réseau Leggett. Marie Houlier, spécialiste de la vente immobilière à Paris depuis 40 ans, vous accompagne pour estimer, vendre ou acheter.",
  alternates: { canonical: "https://sellmyhome.fr/agence-immobiliere-paris" },
  openGraph: { title: "Agence immobilière Paris | SellMyHome — Leggett", description: "Agence immobilière à Paris affiliée Leggett. Estimation gratuite, vente accompagnée, réseau international.", url: "https://sellmyhome.fr/agence-immobiliere-paris" },
};
import Link from "next/link";
import Script from "next/script";

const faq = [
  { q: "Qu'est-ce qui distingue SellMyHome des grandes agences parisiennes ?", a: "Contrairement aux grandes réseaux d'agences, SellMyHome offre un suivi personnalisé avec un seul interlocuteur — Marie Houlier — du début à la fin. Pas de turn-over, pas de dossier qui passe de main en main. Et grâce à l'affiliation Leggett, vous bénéficiez d'une diffusion internationale que peu d'agences locales peuvent offrir." },
  { q: "SellMyHome peut-il vendre des biens de prestige à Paris ?", a: "Oui. Le réseau Leggett auquel SellMyHome est affilié est particulièrement reconnu pour la vente de biens de caractère et de prestige, avec une clientèle internationale (britannique, américaine, européenne) très active sur le marché parisien haut de gamme." },
  { q: "Quels sont les honoraires de SellMyHome pour une vente immobilière à Paris ?", a: "Les honoraires varient selon le type de bien et la mission confiée. Contactez Marie directement pour un devis personnalisé. Sachez que l'estimation initiale est toujours gratuite et sans engagement." },
];

export default function Page() {
  return (<>
    <Script id="faq-agence" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
    <Script id="bc-agence" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" }, { "@type": "ListItem", position: 2, name: "Agence immobilière Paris", item: "https://sellmyhome.fr/agence-immobiliere-paris" }] }) }} />
    <main className="seo-page">
      <nav className="breadcrumb"><Link href="/">Accueil</Link> › <span>Agence immobilière Paris</span></nav>
      <h1>Agence immobilière à Paris — SellMyHome &amp; Leggett</h1>
      <p className="seo-intro">SellMyHome est une <strong>agence immobilière parisienne</strong> fondée sur la conviction que l'humain fait la différence. Affiliée au réseau international <strong>Leggett Immobilier</strong>, elle combine l'expertise locale d'une agence de quartier et la puissance de diffusion d'un grand réseau international.</p>
      <div className="seo-cta-block"><Link href="/estimation" className="primary-btn">Estimation gratuite — Sans engagement</Link></div>

      <h2>Une agence immobilière parisienne à taille humaine</h2>
      <p>Dans un marché immobilier de plus en plus digitalisé, SellMyHome fait le pari de l'humain. Vous avez un seul interlocuteur, Marie Houlier, qui vous connaît, connaît votre bien, et ne lâche pas votre dossier jusqu'à la signature chez le notaire.</p>
      <p>Pas de turn-over, pas de négociateur qui change en cours de route, pas de dossier qui se perd. Marie répond à vos appels, vous tient informé après chaque visite, et défend vos intérêts à chaque étape. C'est la promesse SellMyHome.</p>

      <h2>Le réseau Leggett : une diffusion internationale depuis Paris</h2>
      <p>SellMyHome est affiliée à <strong>Leggett Immobilier</strong>, le premier réseau de vente de biens français à l'international. Cela signifie que votre bien parisien est diffusé auprès d'une clientèle d'acquéreurs britanniques, américains, belges, suisses et européens — directement depuis Paris.</p>
      <p>Pour les biens de caractère, les appartements haussmanniens ou les biens de prestige dans les quartiers recherchés (6e, 7e, 8e, 16e), cet accès à la clientèle internationale est un avantage décisif.</p>

      <h2>Nos services à Paris</h2>
      <ul className="seo-list">
        <li><Link href="/estimation-paris"><strong>Estimation immobilière gratuite à Paris</strong></Link> — en ligne ou à domicile, résultat sous 24h</li>
        <li><Link href="/vendre-a-paris"><strong>Vente immobilière à Paris</strong></Link> — accompagnement complet de A à Z</li>
        <li><Link href="/chasseur-paris"><strong>Chasseur immobilier Paris</strong></Link> — recherche sur-mesure, biens off-market, négociation</li>
        <li><Link href="/prix-m2-paris"><strong>Prix m² Paris 2026</strong></Link> — données par arrondissement</li>
      </ul>

      <h2>Notre zone d'intervention</h2>
      <p>SellMyHome intervient dans l'ensemble des 20 arrondissements de Paris et le Grand Paris, avec une expertise particulière dans les 6e, 7e, 8e, 15e, 16e et 17e. Marie connaît chaque quartier de l'intérieur : les immeubles haussmanniens, les copropriétés des années 70, les lofts du 11e, les appartements familiaux du 15e.</p>

      <h2>FAQ — Agence immobilière Paris</h2>
      <div className="faq-seo-list">{faq.map((f, i) => <details key={i} className="faq-item"><summary className="faq-question">{f.q}</summary><p className="faq-answer">{f.a}</p></details>)}</div>
      <div className="seo-internal-links">
        <p><Link href="/estimation-paris">Estimation immobilière Paris</Link> · <Link href="/vendre-a-paris">Vendre à Paris</Link> · <Link href="/chasseur-paris">Chasseur immobilier</Link> · <Link href="/prix-m2-paris">Prix m² Paris</Link></p>
      </div>
      <div className="seo-cta-block" style={{marginTop:"2.5rem"}}><Link href="/estimation" className="primary-btn">Démarrer avec une estimation gratuite</Link></div>
    </main>
  </>);
}
