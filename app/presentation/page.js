export const metadata = {
  title: "SellMyHome — Agence immobilière à Paris avec Leggett",
  description:
    "SellMyHome est une agence immobilière parisienne affiliée Leggett, spécialisée dans la vente d'appartements et maisons à Paris et en Île-de-France. Découvrez notre approche humaine et notre expertise.",
  alternates: { canonical: "https://sellmyhome.fr/presentation" },
  openGraph: {
    title: "SellMyHome — Agence immobilière à Paris | Leggett",
    description: "Agence immobilière parisienne affiliée Leggett. Estimation gratuite et vente accompagnée.",
    url: "https://sellmyhome.fr/presentation",
  },
};

import Link from "next/link";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-presentation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sellmyhome.fr" },
              { "@type": "ListItem", position: 2, name: "Présentation", item: "https://sellmyhome.fr/presentation" },
            ],
          }),
        }}
      />

      <main className="seo-page">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link> &rsaquo; <span>Présentation</span>
        </nav>

        <h1>SellMyHome — Agence immobilière à Paris</h1>

        <p className="seo-intro">
          SellMyHome est une agence immobilière parisienne fondée sur un principe simple :
          mettre l'humain au cœur de chaque transaction. Affiliée au réseau international{" "}
          <strong>Leggett Immobilier</strong>, elle vous offre le meilleur des deux mondes —
          l'expertise locale d'une agence de quartier et la diffusion internationale d'un grand réseau.
        </p>

        <h2>Notre philosophie</h2>
        <p>
          Dans un marché immobilier de plus en plus digitalisé, nous faisons le pari de l'humain.
          Vous avez un interlocuteur unique — Marie Houlier — qui vous connaît, connaît votre bien
          et ne lâche pas votre dossier jusqu'à la signature chez le notaire.
        </p>
        <p>
          Pas de turn-over, pas de négociateur inconnu : une seule personne, disponible, qui répond
          à vos questions et défend vos intérêts.
        </p>

        <h2>Notre expertise du marché parisien</h2>
        <p>
          Installée à Paris depuis plus de quarante ans, Marie Houlier connaît chaque arrondissement
          de l'intérieur : les immeubles haussmanniens du 7e, les copropriétés des années 70 du 15e,
          les lofts du 11e, les studios d'investissement du 18e. Cette connaissance terrain se traduit
          par des estimations précises et des ventes rapides.
        </p>

        <h2>Notre réseau : Leggett Immobilier</h2>
        <p>
          En tant qu'agent Leggett, SellMyHome diffuse vos biens sur le plus grand réseau de vente
          de biens français à l'international, avec une clientèle d'acquéreurs anglophones, européens
          et internationaux. Un avantage décisif pour les biens haut de gamme.
        </p>

        <h2>Nos services</h2>
        <ul className="seo-list">
          <li><Link href="/estimation">Estimation immobilière gratuite</Link> — en ligne ou à domicile</li>
          <li><Link href="/estimation-paris">Estimation à Paris</Link> — par arrondissement</li>
          <li><Link href="/chasseur-paris">Chasseur immobilier Paris</Link> — pour les acquéreurs</li>
          <li>Vente accompagnée — de la mise en vente à la signature</li>
          <li>Diffusion internationale — réseau Leggett &amp; portails étrangers</li>
        </ul>

        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link>
        </div>
      </main>
    </>
  );
}
