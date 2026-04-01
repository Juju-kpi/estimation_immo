"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

{/* const images = [
  "/appart1.jpeg",
  "/appart2.jpeg",
  "/appart3.jpeg",
  "/appart4.jpeg",
  "/test_appart.jpeg"
];  */}

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

  // Carousel auto
  {/*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); */}

  return (
    <main className="home">

      {showToast && <div className="toast">Votre demande a bien été envoyée !</div>}

      {/* HERO */}
      <section className="hero">
  <div className="hero-content">
    <h1>Une estimation, oui. Mais surtout un accompagnement humain.</h1>

    <p>
      Bienvenue sur Sellmyhome, votre partenaire de confiance pour concrétiser vos projets immobiliers.
      Que vous souhaitiez vendre, acheter ou investir, nous vous accompagnons à chaque étape avec un service personnalisé.
    </p>
        <p>
        Notre mission est simple : vous offrir un service personnalisé et efficace, en mettant à votre disposition un agent expérimenté, doté d’un vaste carnet d’adresses et entouré d’un réseau de partenaires de confiance. Avec Sellmyhome, vous bénéficiez d’un interlocuteur unique, dédié à vos besoins, pour simplifier vos démarches et maximiser vos chances de réussite.
        </p>

    <a href="/estimation">
      <button className="primary-btn">
        Obtenir mon estimation
      </button>
    </a>

    <p style={{ marginTop: 15, fontSize: 14 }}>
      Rencontrez nos experts • Gratuit • Sans engagement  • Confidentiel
    </p>
  </div>
</section>

        {/* BACKGROUND CAROUSEL */}
{/*  {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Appartement"
            fill
            priority
            quality={100}
            sizes= "100vw"
            style={{ objectFit: "cover"}}
            className={`hero-bg ${index === currentImage ? "active" : ""}`}
          />
        ))} 

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Estimez votre bien immobilier</h1>
          <p>
            Une estimation fiable, rapide et confidentielle réalisée par des experts.
          </p>

          <a href="/estimation">
            <button className="primary-btn">
              Commencer l’estimation
            </button>
          </a>
        </div>
      </section>
*/}
      {/* SECTION AGENTS (plus humain) */}
   
<section className="agents">
  <h2>Vos experts immobiliers</h2>

  <div className="agents-grid">

   <Link href="/#" className="agent-card">
      <div className="agent-image">
        <Image
          src="/Marie.jpeg"
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
   <Link href="/#" className="agent-card">
      <div className="agent-image">
        <Image
          src="/victor2.jpeg"
          alt="Victor Martin"
          fill
          quality={100}
        />
      </div>
      <h3>Victor</h3>
      <p>
Ma connaissance du marché parisien et mon engagement à fournir un service sur-mesure me permettent de répondre aux besoins spécifiques de chacun, qu’il s’agisse d’acheter, de vendre ou d’investir.</p>
    </Link>

  </div>
</section>

  <footer className="footer-legal">
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
             <p style={{ marginTop: 20, fontSize: 13, color: "#999" }}>
  © 2026 Sellmyhome — Tous droits réservés
</p>
    </div>

  </div>
</footer>

    </main>
  );
}
