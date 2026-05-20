"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackClick } from "../components/Tracker";
import Script from "next/script";

export default function HomeClient() {
  const [showToast, setShowToast] = useState(false);

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
      <Script
        id="faq-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Comment estimer mon bien immobilier à Paris ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Remplissez notre formulaire gratuit en ligne avec les caractéristiques de votre bien. Marie Houlier, experte du marché parisien, vous rappelle pour affiner l'estimation et vous accompagner.",
                },
              },
              {
                "@type": "Question",
                name: "L'estimation immobilière est-elle vraiment gratuite ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, l'estimation proposée par SellMyHome est totalement gratuite et sans engagement. Aucune facturation ne sera effectuée pour ce service.",
                },
              },
              {
                "@type": "Question",
                name: "Combien de temps prend une estimation ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le formulaire en ligne prend moins de 3 minutes. Marie vous rappelle ensuite dans les 24h pour affiner l'estimation avec sa connaissance du marché parisien.",
                },
              },
              {
                "@type": "Question",
                name: "SellMyHome intervient dans quels secteurs ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "SellMyHome est spécialisé à Paris et en Île-de-France, avec une connaissance fine des quartiers parisiens, arrondissement par arrondissement.",
                },
              },
            ],
          }),
        }}
      />

      <main className="home">
        {showToast && <div className="toast">Votre demande a bien été envoyée !</div>}

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Estimation immobilière gratuite · Paris &amp; Île-de-France</p>
            <h1>
              Vendez votre bien à Paris <br />
              <span className="hero-highlight">au meilleur prix, avec l'humain au cœur</span>
            </h1>
            <p className="hero-sub">
              Un accompagnement personnalisé, de la première estimation jusqu'à la signature chez le notaire.
              Transparent, confidentiel, sans engagement.
            </p>

            <div className="hero-cta-group">
              <Link href="/estimation" passHref>
                <button
                  className="primary-btn"
                  onClick={() => {
                    trackClick("homeclient_estimation");
                    if (window.gtag) window.gtag("event", "click_estimation", { event_category: "engagement", event_label: "homepage" });
                  }}
                >
                  Obtenir mon estimation gratuite
                </button>
              </Link>
              <Link href="/nous" className="hero-secondary-cta">
                Parler à Marie →
              </Link>
            </div>

            <div className="hero-trust">
              <span>✓ Gratuit &amp; sans engagement</span>
              <span>✓ Confidentiel</span>
              <span>✓ Réponse sous 24h</span>
              <span>✓ Expert Paris &amp; IDF</span>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────── */}
        <section className="services-section">
          <div className="services-container">
            <h2 className="section-title">Nos services</h2>
            <p className="section-sub">Tout ce dont vous avez besoin pour réussir votre projet immobilier</p>
            <div className="services-grid">
              <Link href="/estimation" className="service-card" onClick={() => trackClick("service_estimation")}>
                <div className="service-icon">🏷️</div>
                <h3>Estimation gratuite</h3>
                <p>Une estimation fiable basée sur les données réelles du marché et la connaissance terrain de Marie.</p>
                <span className="service-link">Estimer mon bien →</span>
              </Link>
              <Link href="/contact" className="service-card" onClick={() => trackClick("service_achat")}>
                <div className="service-icon">🔍</div>
                <h3>Recherche de bien</h3>
                <p>Accédez à des biens off-market et bénéficiez d'un accompagnement dédié dans votre recherche à Paris.</p>
                <span className="service-link">Lancer ma recherche →</span>
              </Link>
              <Link href="/chasseur-paris" className="service-card" onClick={() => trackClick("service_chasseur")}>
                <div className="service-icon">🏠</div>
                <h3>Chasseur immobilier</h3>
                <p>Marie chasse pour vous le bien idéal dans tout Paris. Gain de temps, accès exclusif, négociation incluse.</p>
                <span className="service-link">En savoir plus →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── AGENT ────────────────────────────────────── */}
        <section className="agents">
          <h2>Votre experte immobilière à Paris</h2>
          <p className="section-sub" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Un seul interlocuteur, une vraie expertise du marché parisien
          </p>
          <div className="agent-single">
            <Link href="/nous" className="agent-card agent-card-large" onClick={() => trackClick("marie_contact")}>
              <div className="agent-image marie">
                <Image
                  src="/marie_houlier.png"
                  alt="Marie Houlier, conseillère immobilière spécialiste Paris et Île-de-France"
                  fill
                  quality={95}
                  unoptimized
                />
              </div>
              <div className="agent-info">
                <h3>Marie Houlier</h3>
                <p className="agent-tagline">Conseillère en immobilier · Spécialiste Paris</p>
                <p>
                  Installée à Paris depuis plus de quarante ans, je mets à votre service ma connaissance fine
                  du marché immobilier et des ambiances propres à chaque quartier. Je vous accompagne avec
                  empathie et efficacité à chaque étape de votre projet.
                </p>
                <p>
                  De la mise en valeur de votre bien à la diffusion internationale, en passant par la
                  négociation et la signature notariale : je gère tout, pour vous.
                </p>
                <div className="agent-contact-block">
                  <a href="tel:+33752049878" className="agent-phone-btn" onClick={(e) => e.stopPropagation()}>
                    📞 07 52 04 98 78
                  </a>
                  <a href="mailto:contact@sellmyhome.fr" className="agent-mail-btn" onClick={(e) => e.stopPropagation()}>
                    ✉️ contact@sellmyhome.fr
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="faq-section">
          <div className="faq-container">
            <h2 className="section-title">Questions fréquentes</h2>
            <div className="faq-grid">
              {[
                {
                  q: "Comment estimer mon bien immobilier à Paris ?",
                  a: "Remplissez notre formulaire gratuit en ligne avec les caractéristiques de votre bien. Marie Houlier, experte du marché parisien, vous rappelle pour affiner l'estimation et vous accompagner jusqu'à la vente.",
                },
                {
                  q: "L'estimation immobilière est-elle vraiment gratuite ?",
                  a: "Oui, l'estimation est totalement gratuite et sans engagement. Aucune facturation ne sera effectuée. Nous rémunérons notre service uniquement en cas de vente réussie.",
                },
                {
                  q: "Combien de temps prend une estimation ?",
                  a: "Le formulaire en ligne prend moins de 3 minutes. Marie vous rappelle ensuite dans les 24h pour affiner l'estimation avec sa connaissance terrain du marché parisien.",
                },
                {
                  q: "SellMyHome intervient dans quels secteurs ?",
                  a: "SellMyHome est spécialisé à Paris et en Île-de-France, avec une connaissance fine des quartiers parisiens, arrondissement par arrondissement.",
                },
              ].map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{item.q}</summary>
                  <p className="faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/estimation" className="btn">Obtenir mon estimation gratuite</Link>
            </div>
          </div>
        </section>

        {/* ── LEGAL ────────────────────────────────────── */}
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
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès,
              de rectification, de suppression et d'opposition concernant vos données personnelles.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
