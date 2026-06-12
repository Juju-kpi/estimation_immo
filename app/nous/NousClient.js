"use client";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Reveal from "../../components/Reveal";

export default function NousClient() {
  return (
    <main>
      <section className="agents presentation-agents">
        <Reveal className="nous-header">
          <h1 className="nous-title">Votre experte immobilière à Paris</h1>
          <p className="nous-subtitle">
            Un accompagnement humain, précis et sur-mesure pour chaque projet immobilier.
          </p>
          <p>
            <a href="mailto:contact@sellmyhome.fr">contact@sellmyhome.fr</a>
          </p>
        </Reveal>

        <Reveal delay={120} className="agent-card agent-card-solo">
          <div className="agent-image marie">
            <Image
              src="/Marie.jpeg"
              alt="Marie Houlier, conseillère immobilière spécialiste Paris et Île-de-France"
              fill
              quality={95}
            />
          </div>
          <h3>Marie Houlier</h3>
          <p className="agent-tagline">Conseillère en immobilier · Spécialiste Paris &amp; IDF</p>
          <p>
            Installée à Paris depuis plus de quarante ans, je mets à votre service
            ma connaissance fine du marché immobilier et des ambiances propres à chaque quartier.
          </p>
          <p>
            Je vous accompagne avec empathie et efficacité à chaque étape de votre projet de vente :
            estimation, mise en valeur, diffusion nationale et internationale, négociation.
          </p>
          <p>
            Je valorise votre bien, assure sa diffusion y compris à l'international,
            et mène les négociations avec rigueur jusqu'à la signature chez le notaire.
          </p>
          <p className="agent-phone">
            <a href="tel:+33752049878">
              <Phone size={15} style={{ verticalAlign: "-2px", marginRight: 6 }} />
              +33 7 52 04 98 78
            </a>
          </p>
          <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
            <a href="mailto:contact@sellmyhome.fr" style={{ color: "var(--color-primary)", textDecoration: "none", fontSize: "14px" }}>
              <Mail size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />
              contact@sellmyhome.fr
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
