"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldShow = localStorage.getItem("showSuccessToast");
      if (shouldShow) {
        setShowToast(true);
        localStorage.removeItem("showSuccessToast");

        const timer = setTimeout(() => setShowToast(false), 3000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <main className="home">

      {/* TOAST */}
      {showToast && (
        <div className="toast">
          Votre demande a bien été envoyée !
        </div>
      )}

      {/* HERO */}
      <section className="hero">
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

      {/* SECTION AGENTS (plus humain) */}
   
<section className="agents">
  <h2>Vos experts immobiliers</h2>

  <div className="agents-grid">

    <div className="agent-card">
      <div className="agent-image">
        <Image
          src="/Marie.jpeg"
          alt="Marie Dupont"
          fill
          sizes="250px"
        />
      </div>
      <h3>Marie Dupont</h3>
      <p>Spécialiste du marché résidentiel depuis 10 ans.</p>
    </div>

    <div className="agent-card">
      <div className="agent-image">
        <Image
          src="/Victor.jpeg"
          alt="Victor Martin"
          fill
          sizes="250px"
        />
      </div>
      <h3>Victor Martin</h3>
      <p>Expert en estimation et investissement immobilier.</p>
    </div>

  </div>
</section>

      {/* AVANTAGES */}
      <section className="benefits">
        <div className="benefit">✔ Gratuit</div>
        <div className="benefit">✔ Sans engagement</div>
        <div className="benefit">✔ 100% confidentiel</div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <h2>Prêt à connaître la valeur de votre bien ?</h2>
        <p>
          Lancez votre estimation en quelques clics seulement.
        </p>

        <a href="/estimation">
          <button className="cta-btn">
            Obtenir mon estimation
          </button>
        </a>
      </section>

    </main>
  );
}
