"use client";
import Image from "next/image";

export default function NousPage() {
  return (
    <main>

      {/* AGENTS */}
      <section id="victor" className="agents presentation-agents">

<div className="nous-header">
  <h1 className="nous-title">Nos experts immobiliers</h1>

  <p className="nous-subtitle">
    Un accompagnement humain, précis et sur-mesure pour chaque projet.
  </p>

  <p>
    <a href="mailto:contact@sellmyhome.fr">
      contact@sellmyhome.fr
    </a>
  </p>
</div>

        <div className="agent-card">
          <div className="agent-image marie">
            <Image src="/marie2.jpeg" alt="Marie" fill />
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

          <p className="agent-phone">
            <a href="tel:+33752049878">+33 7 52 04 98 78</a>
          </p>
        </div>

        <div className="agent-card">
          <div className="agent-image">
            <Image src="/victor2.jpeg" alt="Victor" fill />
          </div>
          <h3>Victor Da Cruz</h3>

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

          <p className="agent-phone">
            <a href="tel:+33614206664">+33 6 14 20 66 64</a>
          </p>
        </div>

      </section>

    </main>
  );
}
