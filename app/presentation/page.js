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
            et un réel engagement à atteindre vos objectifs.
          </p>
        </div>
      </section>

      {/* AGENTS */}
      <section id="victor" className="agents presentation-agents">

        <div className="agent-card large">
          <div className="agent-image">
            <Image src="/victor2.jpeg" alt="Victor" fill />
          </div>
          <h3>Victor</h3>

          <p>
            Originaire de Paris, j’ai débuté ma carrière dans le secteur bancaire,
            avant de me tourner vers les télécommunications, puis de trouver ma voie dans l’immobilier en 2019.
          </p>

          <p>
            L’immobilier est pour moi bien plus qu’un métier : c’est une véritable passion.
          </p>

          <p>
            Ma connaissance du marché parisien et mon engagement à fournir un service sur-mesure
            me permettent de répondre aux besoins spécifiques de chacun.
          </p>

          <p className="agent-phone">+33 6 14 20 66 64</p>
        </div>

        <div className="agent-card large">
          <div className="agent-image">
            <Image src="/Marie.jpeg" alt="Marie" fill />
          </div>
          <h3>Marie Houlier</h3>

          <p>
            Installée à Paris depuis plus de quarante ans, je mets à votre service
            ma connaissance fine du marché immobilier.
          </p>

          <p>
            Je vous accompagne avec empathie et efficacité à chaque étape de votre projet de vente.
          </p>

          <p>
            Je valorise votre bien, assure sa diffusion y compris à l’international,
            et mène les négociations avec rigueur.
          </p>

          <p className="agent-phone">+33 7 52 04 98 78</p>
        </div>

      </section>

    </main>
  );
}
