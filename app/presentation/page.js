"use client";

import Image from "next/image";

export default function Presentation() {
  return (
    <main className="presentation-page">

      {/* HERO INTRO */}
      <section className="presentation-hero">
        <div className="overlay" />

        <div className="presentation-content">
          <h1>Sellmyhome</h1>

          <p>
            Bienvenue sur <strong>Sellmyhome</strong>, votre partenaire de confiance pour concrétiser tous vos projets immobiliers.
            Que vous souhaitiez vendre votre bien, acheter la maison de vos rêves ou réaliser un investissement,
            nous sommes là pour vous accompagner à chaque étape.
          </p>

          <p>
            Notre mission est simple : vous offrir un service personnalisé et efficace, en mettant à votre disposition
            un agent expérimenté, doté d’un vaste carnet d’adresses et entouré d’un réseau de partenaires de confiance.
          </p>

          <p>
            Avec Sellmyhome, vous bénéficiez d’un interlocuteur unique, dédié à vos besoins,
            pour simplifier vos démarches et maximiser vos chances de réussite.
          </p>

          <p>
            Laissez-nous vous accompagner dans cette aventure, avec professionnalisme, transparence
            et un réel engagement à atteindre vos objectifs. Nous gérons votre dossier de la mise en relation jusqu'à la signature definitive chez le notaire.
          </p>
        </div>
      </section>

    </main>
  );
}
