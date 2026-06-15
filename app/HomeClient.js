"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackClick } from "../components/Tracker";
import Script from "next/script";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import {
  BarChart3,
  Home as HomeIcon,
  Search,
  ShieldCheck,
  Lock,
  HeartHandshake,
  PhoneCall,
  Mail,
  ClipboardList,
  Globe2,
  FileSignature,
  Camera,
  MapPin,
  TrendingUp,
  UserRound,
  CheckCircle2,
  ChevronRight,
  Star,
} from "lucide-react";

const faqHome = [
  { q: "Comment estimer mon bien immobilier à Paris ?", a: "Remplissez notre formulaire gratuit en 3 minutes. Marie Houlier, experte du marché parisien depuis 15 ans, vous rappelle sous 24h avec une estimation précise basée sur les transactions réelles dans votre secteur." },
  { q: "L'estimation immobilière est-elle vraiment gratuite ?", a: "Oui, totalement gratuite et sans engagement. SellMyHome ne facture aucun frais pour l'estimation. Notre rémunération intervient uniquement en cas de vente réussie, ce qui aligne nos intérêts avec les vôtres." },
  { q: "Combien de temps faut-il pour vendre un appartement à Paris ?", a: "Pour un bien correctement estimé et bien présenté, le délai moyen est de 60 à 90 jours à Paris. Grâce au réseau international Leggett, SellMyHome touche aussi une clientèle d'acquéreurs étrangers qui peut accélérer la vente." },
  { q: "SellMyHome couvre quels secteurs ?", a: "SellMyHome est spécialisé à Paris (tous arrondissements) et en Île-de-France, avec une expertise particulière dans les 6e, 7e, 8e, 15e, 16e et 17e arrondissements." },
];

const services = [
  {
    icon: BarChart3,
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
  { value: "15+", label: "ans d'expérience à Paris" },
  { value: "24h", label: "délai de réponse garanti" },
  { value: "100%", label: "confidentiel & sans engagement" },
  { value: "Leggett", label: "réseau international" },
];

const trustItems = [
  {
    icon: Lock,
    title: "Vos données restent confidentielles",
    desc: "Aucune transmission à des tiers, aucune revente. Vos coordonnées et celles de votre bien ne servent qu'à votre accompagnement personnel avec Marie.",
  },
  {
    icon: HeartHandshake,
    title: "Un seul interlocuteur, sans pression",
    desc: "Pas de centre d'appel, pas de relance automatisée. Marie vous répond directement, à votre rythme, et respecte votre décision finale.",
  },
  {
    icon: ShieldCheck,
    title: "Une estimation honnête, pas un argument de vente",
    desc: "Les chiffres s'appuient sur les transactions réelles de votre quartier — pas sur une fourchette gonflée pour décrocher un mandat.",
  },
];

const timelineSteps = [
  {
    icon: ClipboardList,
    title: "Vous décrivez votre bien en 3 minutes",
    desc: "Adresse, type de bien, surface, projet. Le formulaire est court, confidentiel, sans engagement d'aucune sorte.",
  },
  {
    icon: PhoneCall,
    title: "Marie vous rappelle sous 24h",
    desc: "Un échange humain, pas un email automatique. Marie analyse votre quartier et répond à vos questions de vive voix.",
  },
  {
    icon: Camera,
    title: "Mise en valeur professionnelle",
    desc: "Photos, home staging léger, préparation du dossier — si vous décidez d'avancer vers la vente, Marie gère tout.",
  },
  {
    icon: Globe2,
    title: "Diffusion France & international",
    desc: "Portails français et réseau Leggett : votre bien touche une clientèle nationale et internationale qualifiée.",
  },
  {
    icon: FileSignature,
    title: "Jusqu'à la signature chez le notaire",
    desc: "Marie reste à vos côtés pour défendre vos intérêts à chaque étape, jusqu'à l'acte authentique.",
  },
];

const temoignages = [
  {
    nom: "Sophie R.",
    bien: "Appartement 3P — 15e",
    texte: "Marie a su fixer le bon prix dès le départ. Vendu en 6 semaines, au prix demandé. Un accompagnement vraiment humain.",
  },
  {
    nom: "François & Claire M.",
    bien: "Maison — Neuilly-sur-Seine",
    texte: "Nous avons apprécié la transparence totale : chaque visite était suivie d'un compte-rendu détaillé. Aucune pression.",
  },
  {
    nom: "Antoine L.",
    bien: "Appartement 2P — 7e",
    texte: "Estimation très précise, conforme au prix final obtenu. Je recommande sans hésiter pour tout projet à Paris.",
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

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Agente Leggett · Paris &amp; Île-de-France · Estimation gratuite</p>
            <h1>
              Vendez votre bien à Paris<br />
              <span className="hero-highlight">au juste prix, accompagné par Marie</span>
            </h1>
            <p className="hero-sub">
              De l'estimation à la signature chez le notaire — un seul interlocuteur,
              une vraie connaissance du marché parisien, aucune pression commerciale.
            </p>
            <div className="hero-cta-group">
              <Link href="/estimation">
                <button className="primary-btn hero-btn-main" onClick={() => { trackClick("hero_estimation"); if (window.gtag) window.gtag("event", "click_estimation", { event_category: "engagement", event_label: "homepage_hero" }); }}>
                  Obtenir mon estimation gratuite
                </button>
              </Link>
              <Link href="/nous" className="hero-secondary-cta">
                Parler à Marie <ChevronRight size={16} />
              </Link>
            </div>
            <div className="hero-trust">
              <span><CheckCircle2 size={14} /> Gratuit &amp; sans engagement</span>
              <span><Lock size={14} /> 100% confidentiel</span>
              <span><CheckCircle2 size={14} /> Réponse sous 24h</span>
              <span><Globe2 size={14} /> Réseau Leggett</span>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
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

        {/* ── SERVICES ── */}
        <section className="services-section" aria-label="Nos services immobiliers">
          <div className="services-container">
            <Reveal>
              <p className="section-eyebrow">Ce que nous faisons pour vous</p>
              <h2 className="section-title">
                Nos services immobiliers à Paris
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub">Vente, estimation, recherche — un seul interlocuteur du début à la fin</p>
            </Reveal>

            <Reveal delay={100}>
              <div className="service-tabs" role="tablist">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button key={i} role="tab" aria-selected={activeService === i}
                      className={`service-tab${activeService === i ? " active" : ""}`}
                      onClick={() => setActiveService(i)}>
                      <Icon size={17} aria-hidden="true" />
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

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
                        {s.points.map((p, j) => (
                          <li key={j}><span className="sd-check"><CheckCircle2 size={16} /></span>{p}</li>
                        ))}
                      </ul>
                      <Link href={s.href} className="primary-btn sd-cta" onClick={() => trackClick(s.track)}>
                        {s.cta} <ChevronRight size={16} style={{ verticalAlign: "-3px" }} />
                      </Link>
                    </div>
                    <div className="sd-right">
                      <div className="sd-visual">
                        <div className="sd-icon-large"><Icon size={52} strokeWidth={1.25} /></div>
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

            <div className="services-grid">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={i} delay={i * 80}>
                    <Link href={s.href}
                      className={`service-card${activeService === i ? " service-card-active" : ""}`}
                      onClick={() => { setActiveService(i); trackClick(s.track); }}>
                      <div className="service-card-header">
                        <span className="icon-badge"><Icon size={22} /></span>
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

        {/* ── COMMENT ÇA SE PASSE — TIMELINE ── */}
        <section className="timeline-section" aria-label="Comment se déroule l'accompagnement">
          <div className="timeline-container">
            <Reveal>
              <p className="section-eyebrow">Le parcours avec Marie</p>
              <h2 className="section-title">
                Comment ça se passe
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub">Un accompagnement clair, sans jargon ni pression commerciale.</p>
            </Reveal>
            <div className="timeline">
              {timelineSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={i} delay={i * 100} className="timeline-step">
                    <div className="timeline-marker">
                      <Icon size={22} />
                    </div>
                    <div className="timeline-content">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={200}>
              <div className="timeline-cta">
                <Link href="/estimation" className="primary-btn" onClick={() => trackClick("timeline_cta")}>
                  Commencer — c'est gratuit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── MARIE ── */}
        <section className="agents" aria-label="Votre experte immobilière">
          <Reveal>
            <p className="section-eyebrow">Votre interlocutrice</p>
            <h2 className="section-title">
              Marie Houlier
              <span className="section-title-underline" />
            </h2>
            <p className="section-sub">15 ans de connaissance du marché parisien — un seul interlocuteur de bout en bout</p>
          </Reveal>
          <Reveal delay={100} className="agent-single">
            <Link href="/nous" className="agent-card agent-card-large" onClick={() => trackClick("marie_contact")}>
              <div className="agent-image marie">
                <Image src="/marie_houlier.png"
                  alt="Marie Houlier, conseillère en immobilier spécialiste vente appartement Paris et Île-de-France, agente Leggett"
                  fill quality={95} unoptimized />
              </div>
              <div className="agent-info">
                <h3>Marie Houlier</h3>
                <p className="agent-tagline">Agente Leggett · Spécialiste Paris &amp; Île-de-France</p>
                <p>Installée à Paris depuis plus de quinze ans, je mets à votre service ma connaissance fine du marché et des ambiances propres à chaque quartier. Estimation, vente, achat : je vous accompagne avec empathie et efficacité.</p>
                <p>De la mise en valeur de votre bien à la diffusion internationale via Leggett, en passant par la négociation et la signature notariale — je gère tout, pour vous.</p>
                <div className="agent-contact-block">
                  <a href="tel:+33752049878" className="agent-phone-btn" onClick={(e) => e.stopPropagation()}>
                    <PhoneCall size={15} /> 07 52 04 98 78
                  </a>
                  <a href="mailto:contact@sellmyhome.fr" className="agent-mail-btn" onClick={(e) => e.stopPropagation()}>
                    <Mail size={15} /> contact@sellmyhome.fr
                  </a>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        <section className="temoignages-section" aria-label="Avis clients">
          <Reveal>
            <p className="section-eyebrow">Ce qu'ils en disent</p>
            <h2 className="section-title">
              Ils ont vendu avec Marie
              <span className="section-title-underline" />
            </h2>
          </Reveal>
          <div className="temoignages-grid">
            {temoignages.map((t, i) => (
              <Reveal key={i} delay={i * 80} className="temoignage-card">
                <div className="temoignage-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="temoignage-texte">«&nbsp;{t.texte}&nbsp;»</p>
                <div className="temoignage-auteur">
                  <span className="temoignage-nom">{t.nom}</span>
                  <span className="temoignage-bien">{t.bien}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CONFIANCE ── */}
        <section className="trust-section" aria-label="Confidentialité et confiance">
          <Reveal>
            <p className="section-eyebrow">Notre engagement</p>
            <h2 className="section-title">
              La confidentialité avant tout
              <span className="section-title-underline" />
            </h2>
            <p className="section-sub">Vendre ou acheter est une démarche personnelle. Nous la traitons comme telle.</p>
          </Reveal>
          <div className="trust-container">
            {trustItems.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={i} delay={i * 100} className="trust-card">
                  <span className="icon-badge"><Icon size={22} /></span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── CTA INTERMÉDIAIRE ── */}
        <Reveal>
          <section className="mid-cta-section">
            <div className="mid-cta-box">
              <h2>Votre bien vaut combien aujourd'hui ?</h2>
              <p>Une estimation précise, gratuite, réalisée par Marie sous 24h. Sans engagement, sans démarchage.</p>
              <Link href="/estimation" className="primary-btn" onClick={() => trackClick("mid_cta")}>
                Obtenir mon estimation gratuite
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ── FAQ ── */}
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
              <Link href="/estimation" className="btn" onClick={() => trackClick("faq_cta")}>
                Obtenir mon estimation gratuite
              </Link>
            </div>
          </div>
        </section>

        {/* ── SEO LINKS ── */}
        <section className="seo-links-section">
          <div className="seo-links-container">
            <Reveal><h2 className="seo-links-title">Explorer nos ressources</h2></Reveal>
            <div className="seo-links-grid">
              {[
                { href: "/estimation-paris", icon: MapPin, title: "Estimation immobilière Paris", desc: "Par arrondissement, gratuit, sous 24h" },
                { href: "/prix-m2-paris", icon: TrendingUp, title: "Prix m² Paris 2026", desc: "Tableau complet par arrondissement" },
                { href: "/vendre-a-paris", icon: HomeIcon, title: "Vendre à Paris", desc: "Guide complet de la vente immobilière" },
                { href: "/chasseur-paris", icon: Search, title: "Chasseur immobilier Paris", desc: "Biens off-market, négociation incluse" },
                { href: "/diagnostic-immobilier-paris", icon: ShieldCheck, title: "Diagnostics immobiliers", desc: "DPE, Carrez, amiante : ce qu'il faut savoir" },
                { href: "/nous", icon: UserRound, title: "Marie Houlier", desc: "Votre experte immobilière à Paris" },
              ].map((l, i) => {
                const Icon = l.icon;
                return (
                  <Reveal key={i} delay={i * 40}>
                    <Link href={l.href} className="seo-link-card">
                      <span className="icon-badge"><Icon size={18} /></span>
                      <div><strong>{l.title}</strong><p>{l.desc}</p></div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LEGAL ── */}
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