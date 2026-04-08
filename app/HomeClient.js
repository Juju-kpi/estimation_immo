"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { trackClick } from "../components/Tracker";

export default function HomeClient() {
  const [showToast, setShowToast] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Toast
  useEffect(() => {
    const shouldShow = localStorage.getItem("showSuccessToast");
    if (shouldShow) {
      setShowToast(true);
      localStorage.removeItem("showSuccessToast");
      setTimeout(() => setShowToast(false), 10000);
    }
  }, []);



  return (
     <>
      {/* SEO Meta Tags */}
      <Head>
        <title>SellMyHome | Estimation immobilière gratuite et accompagnement humain</title>
        <meta name="description" content="Bienvenue sur SellMyHome, votre partenaire pour estimer et vendre votre bien immobilier. Estimation gratuite, rapide et accompagnement personnalisé. Localisé à Paris et Ile-de-France" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sellmyhome.fr" />

    <Script
  id="product-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Estimation immobilière SellMyHome",
      "image": "https://sellmyhome.fr/public/logo_moteur_recherche.jpeg",
      "description": "Estimation immobilière gratuite et accompagnement humain à Paris et Ile-de-France",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120"
      }
    }),
  }}
/>
      </Head>
    
    
    <main className="home">

      {showToast && <div className="toast">Votre demande a bien été envoyée !</div>}

      {/* HERO */}
      <section className="hero">
  <div className="hero-content">
    <h1>Une estimation immobilière, oui. Mais surtout un accompagnement humain.</h1>

    <p>
      Bienvenue sur <strong style={{ fontSize: "1.1em" }}>Sellmyhome</strong>, votre partenaire de confiance pour concrétiser vos projets immobiliers.
      Que vous souhaitiez vendre, acheter ou investir, nous vous accompagnons à chaque étape avec un service personnalisé.
    </p>
        <p>
  Maximisez vos chances de réussite pour la <strong>vente d'appartement Paris</strong> avec notre accompagnement humain et personnalisé.
</p>
        <p>
        Un interlocuteur unique, un réseau solide, et un accompagnement
  humain pour maximiser vos chances de réussite.
        </p>

<Link href="/estimation" passHref>
  <button
    className="primary-btn"
    onClick={() => {
      trackClick("homeclient_estimation");
      if (window.gtag) {
        window.gtag("event", "click_estimation", {
          event_category: "engagement",
          event_label: "homepage",
        });
      }
    }}
  >
    Obtenir mon estimation
  </button>
</Link>

    <p style={{ marginTop: 15, fontSize: 14 }}>
      Rencontrez nos experts • Gratuit • Sans engagement  • Confidentiel • Paris et Ile-de-France
    </p>
  </div>
</section>

      {/* SECTION AGENTS (plus humain) */}
   
<section className="agents">
  <h2>Vos experts immobiliers</h2>

  <div className="agents-grid">

   <Link href="/nous" className="agent-card" onClick={() => trackClick("marie_contact")}>
      <div className="agent-image marie">
        <Image
          src="/marie2.jpeg"
          alt="Marie Dupont"
          fill
          quality={100}
          /*sizes="250px"*/
        />
      </div>
      <h3>Marie Houlier</h3>
      <p>Je mets à votre service ma connaissance fine du marché immobilier et des ambiances propres à chaque quartier.

Conseillère et commerciale en immobilier, je vous accompagne avec empathie et efficacité à chaque étape de votre projet de vente. </p>
            </Link>
   <Link href="/nous" className="agent-card" onClick={() => trackClick("victor_contact")}>
      <div className="agent-image">
        <Image
          src="/victor2.jpeg"
          alt="Victor Martin"
          fill
          quality={100}
        />
      </div>
      <h3>Victor Da Cruz</h3>
      <p>
Ma connaissance du marché parisien et mon engagement à fournir un service sur-mesure me permettent de répondre aux besoins spécifiques de chacun, qu’il s’agisse d’acheter, de vendre ou d’investir.</p>
    </Link>

  </div>
</section>
<div className="footer-container">
    <div className="footer-legal-text">
      <p>
        Les informations collectées sur le site Sellmyhome sont strictement confidentielles
        et utilisées uniquement dans le cadre de la relation avec les utilisateurs.
      </p>

      <p>
        Ces données ne sont ni vendues, ni échangées, ni transférées à des tiers sans votre consentement explicite.
      </p>

      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès,
        de rectification, de suppression et d’opposition concernant vos données personnelles.
      </p>

  </div>
          </div>
    </main>
  </>
  );
}
