"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackClick } from "../components/Tracker";
import Script from "next/script";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import {
  LineChart,
  Home as HomeIcon,
  Search,
  ShieldCheck,
  Lock,
  HeartHandshake,
  PhoneCall,
  Mail,
  ClipboardList,
  Users,
  Camera,
  Globe2,
  FileSignature,
  MapPin,
  TrendingUp,
  Building2,
  UserRound,
  CheckCircle2,
} from "lucide-react";

const faqHome = [
  { q: "Comment estimer mon bien immobilier à Paris ?", a: "Remplissez notre formulaire gratuit en 3 minutes. Marie Houlier, experte du marché parisien depuis 20 ans, vous rappelle sous 24h avec une estimation précise basée sur les transactions réelles dans votre secteur." },
  { q: "L'estimation immobilière est-elle vraiment gratuite ?", a: "Oui, totalement gratuite et sans engagement. SellMyHome ne facture aucun frais pour l'estimation. Notre rémunération intervient uniquement en cas de vente réussie, ce qui aligne nos intérêts avec les vôtres." },
  { q: "Combien de temps faut-il pour vendre un appartement à Paris ?", a: "Pour un bien correctement estimé et bien présenté, le délai moyen est de 60 à 90 jours à Paris. Grâce au réseau international Leggett, SellMyHome touche aussi une clientèle d'acquéreurs étrangers qui peut accélérer la vente." },
  { q: "SellMyHome couvre quels secteurs ?", a: "SellMyHome est spécialisé à Paris (tous arrondissements) et en Île-de-France, avec une expertise particulière dans les 6e, 7e, 8e, 15e, 16e et 17e arrondissements." },
];

const services = [
  {
    icon: LineChart,
    label: "Estimation",
    title: "Estimation immobilière gratuite",
    desc: "Une fourchette de prix fiable basée sur les transactions réelles DVF et la connaissance terrain de Marie. Résultat sous 24h, sans engagement.",
    points: ["Données marché actualisées", "Analyse arrondissement par arrondissement", "Comparaison avec transactions récentes"],
    cta: "Estimer mon bien",
    href: "/estimation",
    tag: "Gratuit",
    track: "service_estimation",
  },
  {
    icon: HomeIcon,
    label: "Vente",
    title: "Vente de bien immobilier à Paris",
    desc: "De la mise en valeur photographique à la signature chez le notaire : Marie gère l'intégralité de votre vente avec rigueur et transparence.",
    points: ["Diffusion nationale + internationale Leggett", "Photos professionnelles incluses", "Suivi personnalisé jusqu'à la signature"],
    cta: "Vendre mon bien",
    href: "/estimation",
    tag: "Accompagnement complet",
    track: "service_vente",
  },
  {
    icon: Search,
    label: "Recherche",
    title: "Chasseur immobilier Paris",
    desc: "Marie chasse pour vous : accès aux biens off-market, visites organisées, négociation incluse. Vous gagnez du temps et achetez au bon prix.",
    points: ["Biens off-market exclusifs", "Négociation dans votre intérêt", "Accompagnement notaire inclus"],
    cta: "Lancer ma recherche",
    href: "/chasseur-paris",
    tag: "Sur-mesure",
    track: "service_chasseur",
  },
];

const stats = [
  { value: "40+", label: "ans d'expérience à Paris" },
  { value: "24h", label: "délai de réponse garanti" },
  { value: "100%", label: "confidentiel & sans engagement" },
  { value: "Leggett", label: "réseau international" },
];

const trustItems = [
  {
    icon: Lock,
    title: "Vos informations restent confidentielles",
    desc: "Aucune transmission à des tiers, aucune revente de données. Vos coordonnées et celles de votre bien ne servent qu'à votre accompagnement personnel avec Marie.",
  },
  {
    icon: HeartHandshake,
    title: "Un seul interlocuteur, sans pression",
    desc: "Pas de centre d'appel, pas de relance automatisée. Marie échange avec vous directement, à votre rythme, et respecte toujours votre décision finale.",
  },
  {
    icon: ShieldCheck,
    title: "Une estimation honnête, pas un argument commercial",
    desc: "Les chiffres présentés s'appuient sur les transactions réelles de votre quartier — pas sur une fourchette gonflée pour signer un mandat.",
  },
];

const timelineSteps = [
  {
    icon: ClipboardList,
    title: "Vous décrivez votre bien",
    desc: "3 minutes suffisent : adresse, type de bien, surface, projet. Tout est confidentiel et sans engagement.",
  },
  {
    icon: PhoneCall,
    title: "Marie vous rappelle sous 24h",
    desc: "Un échange humain, pas un email automatique : Marie analyse votre quartier et répond à vos questions de vive voix.",
  },
  {
    icon: Camera,
    title: "Mise en valeur de votre bien",
    desc: "Photos professionnelles, conseils de présentation, et préparation du dossier si vous décidez d'avancer vers la vente.",
  },
  {
    icon: Globe2,
    title: "Diffusion ciblée, France & international",
    desc: "Votre annonce touche les acquéreurs parisiens et, via le réseau Leggett, une clientèle internationale qualifiée.",
  },
  {
    icon: FileSignature,
    title: "Négociation et signature accompagnées",
    desc: "Marie reste à vos côtés jusqu'à l'acte authentique chez le notaire, pour défendre vos intérêts à chaque étape.",
  },
];

export default function HomeClient() {
  const [showToast, setShowToast] = useState(false);
  const [activeService, setActiveService] = useState(0);

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
      <Script id="faq-schema-home" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqHome.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <main className="home">
        {showToast && <div className="toast">✓ Votre demande a bien été envoyée — Marie vous contacte sous 24h !</div>}

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Agente Leggett · Paris &amp; Île-de-France · Estimation gratuite</p>
            <h1>
              Estimation immobilière à Paris<br />
              <span className="hero-highlight">Vendez au meilleur prix avec l'humain au cœur</span>
            </h1>
            <p className="hero-sub">
              Marie Houlier vous accompagne de l'estimation à la signature — vente, achat, recherche de bien.
              Confidentiel, transparent, sans engagement.
            </p>
            <div className="hero-cta-group">
              <Link href="/estimation" passHref>
                <button className="primary-btn" onClick={() => { trackClick("hero_estimation"); if (window.gtag) window.gtag("event", "click_estimation", { event_category: "engagement", event_label: "homepage_hero" }); }}>
                  Obtenir mon estimation gratuite
                </button>
              </Link>
              <Link href="/nous" className="hero-secondary-cta">Parler à Marie →</Link>
            </div>
            <div className="hero-trust">
              <span><CheckCircle2 size={15} /> Gratuit &amp; sans engagement</span>
              <span><Lock size={15} /> Confidentiel</span>
              <span><CheckCircle2 size={15} /> Réponse sous 24h</span>
              <span><Globe2 size={15} /> Réseau Leggett international</span>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="stats-bar">
          <div className="stats-container">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value"><Counter value={s.value} /></span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES — redesigné */}
        <section className="services-section" aria-label="Nos services immobiliers">
          <div className="services-container">
            <Reveal>
              <p className="services-eyebrow">Ce que nous faisons pour vous</p>
              <h2 className="section-title">
                Nos services immobiliers à Paris
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub">Un seul interlocuteur pour tous vos projets — vente, estimation ou recherche de bien</p>
            </Reveal>

            {/* Tabs navigation */}
            <Reveal delay={100}>
              <div className="service-tabs" role="tablist">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button key={i} role="tab" aria-selected={activeService === i} className={`service-tab${activeService === i ? " active" : ""}`} onClick={() => setActiveService(i)}>
                      <Icon size={17} />
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Active service panel */}
            <div className="service-panel" role="tabpanel">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className={`service-detail${activeService === i ? " visible" : ""}`}>
                    <div className="sd-left">
                      <span className="sd-tag">{s.tag}</span>
                      <h3 className="sd-title">{s.title}</h3>
                      <p className="sd-desc">{s.desc}</p>
                      <ul className="sd-points">
                        {s.points.map((p, j) => <li key={j}><span className="sd-check"><CheckCircle2 size={16} /></span>{p}</li>)}
                      </ul>
                      <Link href={s.href} className="primary-btn sd-cta" onClick={() => trackClick(s.track)}>{s.cta} →</Link>
                    </div>
                    <div className="sd-right">
                      <div className="sd-visual">
                        <div className="sd-icon-large"><Icon /></div>
                        <div className="sd-links">
                          <Link href="/estimation-paris" className="sd-pill">Estimation Paris</Link>
                          <Link href="/prix-m2-paris" className="sd-pill">Prix m² Paris</Link>
                          <Link href="/chasseur-paris" className="sd-pill">Chasseur immobilier</Link>
                          <Link href="/vendre-a-paris" className="sd-pill">Vendre à Paris</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cards grid — always visible below tabs */}
            <div className="services-grid">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={i} delay={i * 80}>
                    <Link href={s.href} className={`service-card${activeService === i ? " service-card-active" : ""}`} onClick={() => { setActiveService(i); trackClick(s.track); }}>
                      <div className="service-card-header">
                        <span className="icon-badge"><Icon /></span>
                        <span className="service-badge">{s.tag}</span>
                      </div>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <span className="service-link">{s.cta} →</span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONFIDENTIALITÉ & CONFIANCE */}
        <section className="trust-section" aria-label="Confidentialité et confiance">
          <Reveal>
            <p className="section-eyebrow">Notre engagement</p>
            <h2 className="section-title">
              La confidentialité avant tout
              <span className="section-title-underline" />
            </h2>
            <p className="section-sub">Vendre ou acheter un bien est une démarche personnelle. Nous la traitons comme telle.</p>
          </Reveal>
          <div className="trust-container">
            {trustItems.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={i} delay={i * 100} className="trust-card">
                  <span className="icon-badge"><Icon /></span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* COMMENT ÇA SE PASSE — TIMELINE */}
        <section className="timeline-section" aria-label="Comment se déroule l'accompagnement">
          <div className="timeline-container">
            <Reveal>
              <p className="section-eyebrow">Le parcours avec Marie</p>
              <h2 className="section-title">
                Comment ça se passe
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub">Un accompagnement humain, étape par étape, sans jargon ni pression commerciale.</p>
            </Reveal>
            <div className="timeline">
              {timelineSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={i} delay={i * 90} className="timeline-step">
                    <div className="timeline-marker"><Icon size={22} /></div>
                    <div className="timeline-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* AGENT MARIE */}
        <section className="agents" aria-label="Votre experte immobilière">
          <Reveal>
            <h2>Votre experte immobilière à Paris</h2>
            <p className="section-sub" style={{ textAlign: "center", marginBottom: "2rem" }}>20 ans de connaissance du marché parisien, un seul interlocuteur de bout en bout</p>
          </Reveal>
          <Reveal className="agent-single" delay={100}>
            <Link href="/nous" className="agent-card agent-card-large" onClick={() => trackClick("marie_contact")}>
              <div className="agent-image marie">
                <Image src="/marie_houlier.png" alt="Marie Houlier, conseillère en immobilier spécialiste vente appartement Paris et Île-de-France, agente Leggett" fill quality={95} unoptimized />
              </div>
              <div className="agent-info">
                <h3>Marie Houlier</h3>
                <p className="agent-tagline">Agente Leggett · Spécialiste vente immobilière Paris</p>
                <p>Installée à Paris depuis plus de quarante ans, je mets à votre service ma connaissance fine du marché immobilier et des ambiances propres à chaque quartier. Estimation, vente, achat : je vous accompagne avec empathie et efficacité à chaque étape.</p>
                <p>De la mise en valeur de votre bien à la diffusion internationale via le réseau Leggett, en passant par la négociation et la signature notariale : je gère tout, pour vous.</p>
                <div className="agent-contact-block">
                  <a href="tel:+33752049878" className="agent-phone-btn" onClick={(e) => e.stopPropagation()}><PhoneCall size={15} /> 07 52 04 98 78</a>
                  <a href="mailto:contact@sellmyhome.fr" className="agent-mail-btn" onClick={(e) => e.stopPropagation()}><Mail size={15} /> contact@sellmyhome.fr</a>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="faq-section" aria-label="Questions fréquentes">
          <div className="faq-container">
            <Reveal>
              <h2 className="section-title">
                Questions fréquentes
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub" style={{ marginBottom: "1.5rem" }}>Estimation, vente, délais, tarifs — tout ce que vous voulez savoir</p>
            </Reveal>
            <div className="faq-grid">
              {faqHome.map((item, i) => (
                <Reveal key={i} delay={i * 60} as="details" className="faq-item">
                  <summary className="faq-question">{item.q}</summary>
                  <p className="faq-answer">{item.a}</p>
                </Reveal>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/estimation" className="btn" onClick={() => trackClick("faq_cta")}>Obtenir mon estimation gratuite</Link>
            </div>
          </div>
        </section>

        {/* SEO LINKS INTERNES */}
        <section className="seo-links-section">
          <div className="seo-links-container">
            <Reveal>
              <h2 className="seo-links-title">Explorer nos ressources</h2>
            </Reveal>
            <div className="seo-links-grid">
              <Reveal delay={0}>
                <Link href="/estimation-paris" className="seo-link-card">
                  <span className="icon-badge"><MapPin /></span>
                  <div><strong>Estimation immobilière Paris</strong><p>Par arrondissement, gratuit, sous 24h</p></div>
                </Link>
              </Reveal>
              <Reveal delay={40}>
                <Link href="/prix-m2-paris" className="seo-link-card">
                  <span className="icon-badge"><TrendingUp /></span>
                  <div><strong>Prix m² Paris 2026</strong><p>Tableau complet par arrondissement</p></div>
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <Link href="/vendre-a-paris" className="seo-link-card">
                  <span className="icon-badge"><HomeIcon /></span>
                  <div><strong>Vendre à Paris</strong><p>Guide complet de la vente immobilière</p></div>
                </Link>
              </Reveal>
              <Reveal delay={0}>
                <Link href="/chasseur-paris" className="seo-link-card">
                  <span className="icon-badge"><Search /></span>
                  <div><strong>Chasseur immobilier Paris</strong><p>Biens off-market, négociation incluse</p></div>
                </Link>
              </Reveal>
              <Reveal delay={40}>
                <Link href="/diagnostic-immobilier-paris" className="seo-link-card">
                  <span className="icon-badge"><ShieldCheck /></span>
                  <div><strong>Diagnostics immobiliers</strong><p>DPE, Carrez, amiante : ce qu'il faut savoir</p></div>
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <Link href="/nous" className="seo-link-card">
                  <span className="icon-badge"><UserRound /></span>
                  <div><strong>Marie Houlier</strong><p>Votre experte immobilière à Paris</p></div>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LEGAL */}
        <div className="footer-container">
          <div className="footer-legal-text">
            <p>Les informations collectées sur le site Sellmyhome sont strictement confidentielles et utilisées uniquement dans le cadre de la relation avec les utilisateurs.</p>
            <p>Ces données ne sont ni vendues, ni échangées, ni transférées à des tiers sans votre consentement explicite. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.</p>
          </div>
        </div>
      </main>
    </>
  );
}
