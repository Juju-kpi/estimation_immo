"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { trackClick } from "../components/Tracker";
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
  Heart,
  Scale,
  Plane,
  TreePalm,
  Zap,
  XCircle,
} from "lucide-react";
import { faqHome } from "./homeData";
import { YEARS_EXPERIENCE, PHONE, PHONE_DISPLAY, EMAIL } from "../lib/site";
import { PARIS, IDF } from "../lib/locations";

const services = [
  {
    icon: BarChart3,
    label: "Estimation",
    title: "Estimation immobilière gratuite",
    desc: "Une fourchette de prix fiable basée sur les transactions réelles DVF et la connaissance terrain de Marie, à Paris comme en Île-de-France. Résultat sous 24h, sans engagement.",
    points: ["Données marché actualisées", "Analyse rue par rue, arrondissement par arrondissement", "Comparaison avec les ventes récentes"],
    cta: "Estimer mon bien",
    href: "/estimation",
    tag: "Gratuit",
    track: "service_estimation",
  },
  {
    icon: HomeIcon,
    label: "Vente",
    title: "Vente de bien immobilier à Paris & IDF",
    desc: "De la mise en valeur photographique à la signature chez le notaire : Marie gère l'intégralité de votre vente avec rigueur et transparence.",
    points: ["Diffusion nationale + internationale Leggett", "Photos professionnelles incluses", "Suivi personnalisé jusqu'à la signature"],
    cta: "Vendre mon bien",
    href: "/vendre-a-paris",
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
  { value: `${YEARS_EXPERIENCE}+`, label: "ans d'expérience à Paris" },
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

// ── Situations de vie ──────────────────────────────
const situations = [
  {
    icon: Heart,
    titre: "Succession ou héritage",
    desc: "Un bien à gérer après un décès, une indivision à résoudre entre héritiers. Marie vous accompagne avec discrétion pour valoriser et vendre dans les meilleures conditions.",
    href: "/vendre-appartement-succession-paris",
    track: "situation_succession",
  },
  {
    icon: Scale,
    titre: "Séparation ou divorce",
    desc: "Vendre le bien commun lors d'une séparation ou d'un divorce demande rapidité et neutralité. Marie assure un accompagnement équitable pour les deux parties.",
    href: "/vendre-appartement-divorce-paris",
    track: "situation_divorce",
  },
  {
    icon: Plane,
    titre: "Déménagement ou mutation",
    desc: "Vous quittez Paris pour raisons professionnelles ou personnelles. Vendre vite au bon prix, même à distance — c'est ce que Marie organise pour vous.",
    href: "/vendre-appartement-rapidement-paris",
    track: "situation_demenagement",
  },
  {
    icon: TreePalm,
    titre: "Départ en retraite",
    desc: "Libérer du capital pour financer une nouvelle vie. Marie vous aide à vendre sereinement votre bien parisien et à optimiser le produit de la vente.",
    href: "/vendre-maison-retraite-paris",
    track: "situation_retraite",
  },
  {
    icon: HomeIcon,
    titre: "Vendre pour acheter plus grand",
    desc: "Vous souhaitez vendre votre bien actuel pour financer un achat plus adapté. Marie coordonne les deux projets pour éviter les délais et les imprévus.",
    href: "/vendre-avant-achat-paris",
    track: "situation_vendre_acheter",
  },
  {
    icon: Zap,
    titre: "Vente urgente",
    desc: "Besoin de liquidités rapidement, délai contraint. Marie mobilise son réseau pour trouver un acquéreur sérieux sans sacrifier le prix.",
    href: "/vendre-appartement-rapidement-paris",
    track: "situation_urgent",
  },
];

export default function HomeClient() {
  const router = useRouter();
  const [heroAddress, setHeroAddress] = useState("");
  const startEstimation = (e) => {
    e.preventDefault();
    trackClick("hero_estimation");
    if (window.gtag) window.gtag("event", "click_estimation", { event_category: "engagement", event_label: "homepage_hero" });
    const a = heroAddress.trim();
    router.push(a ? `/estimation?adresse=${encodeURIComponent(a)}` : "/estimation");
  };
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
      <main className="home">
        {showToast && <div className="toast">✓ Votre demande a bien été envoyée — Marie vous contacte sous 24h !</div>}

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              <span className="hero-h1-kicker">Estimation immobilière gratuite à Paris &amp; en Île-de-France</span>
              Vendez votre bien au juste prix,
              <span className="hero-highlight">accompagné par Marie</span>
            </h1>
            <p className="hero-sub">
              Ici, pas d'algorithme anonyme : une vraie personne étudie votre bien et vous rappelle.
              De l'estimation à la signature chez le notaire, un seul interlocuteur, aucune pression commerciale.
            </p>
            <form className="hero-estimate" onSubmit={startEstimation} role="search" aria-label="Démarrer une estimation">
              <label className="hero-estimate-field">
                <MapPin size={18} aria-hidden="true" />
                <span className="sr-only">Adresse de votre bien</span>
                <input
                  type="text"
                  value={heroAddress}
                  onChange={(e) => setHeroAddress(e.target.value)}
                  placeholder="Adresse du bien à estimer"
                  autoComplete="street-address"
                />
              </label>
              <button type="submit">Estimer gratuitement</button>
            </form>
            <div className="hero-cta-group">
              <a href={`tel:${PHONE}`} className="hero-secondary-cta" onClick={() => trackClick("hero_tel")}>
                <PhoneCall size={16} /> Ou appelez Marie · {PHONE_DISPLAY}
              </a>
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

        {/* ── VOUS ENVISAGEZ DE VENDRE ? — SITUATIONS ── */}
        <section className="situations-section" aria-label="Situations de vente">
          <div className="situations-container">
            <Reveal>
              <p className="section-eyebrow">Votre situation</p>
              <h2 className="section-title">
                Vous envisagez de vendre ?
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub">
                Chaque vente part d'une situation personnelle. Marie s'adapte à la vôtre
                avec discrétion, efficacité et sans pression.
              </p>
            </Reveal>
            <div className="situations-grid">
              {situations.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <Link
                      href={s.href}
                      className="situation-card"
                      onClick={() => trackClick(s.track)}
                    >
                      <span className="situation-icon"><Icon size={24} /></span>
                      <div className="situation-body">
                        <h3>{s.titre}</h3>
                        <p>{s.desc}</p>
                      </div>
                      <span className="situation-arrow"><ChevronRight size={18} /></span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={100}>
              <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                <Link href="/estimation" className="primary-btn" onClick={() => trackClick("situations_cta")}>
                  Obtenir mon estimation gratuite
                </Link>
              </div>
            </Reveal>
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

        {/* ── TIMELINE ── */}
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
                      <span className="timeline-marker-number">{i + 1}</span>
                    </div>
                    <div className="timeline-content">
                      <h3>
                        <Icon size={16} style={{ verticalAlign: "-2px", marginRight: 8, color: "var(--color-accent)", flexShrink: 0 }} aria-hidden="true" />
                        {step.title}
                      </h3>
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
            <p className="section-sub">{YEARS_EXPERIENCE} ans de connaissance du marché parisien — un seul interlocuteur de bout en bout</p>
          </Reveal>
          <Reveal delay={100} className="agent-single">
            <div className="agent-card agent-card-large">
              <div className="agent-image marie">
                <Image src="/marie_houlier.jpg"
                  alt="Marie Houlier, conseillère en immobilier spécialiste vente appartement Paris et Île-de-France, agente Leggett"
                  fill
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 100vw, 260px" />
              </div>
              <div className="agent-info">
                <span className="agent-leggett-badge"><Globe2 size={12} /> Agente Leggett</span>
                <h3><Link href="/nous" onClick={() => trackClick("marie_contact")}>Marie Houlier</Link></h3>
                <p className="agent-tagline">Agente Leggett · Spécialiste Paris &amp; Île-de-France</p>
                <p>Depuis {YEARS_EXPERIENCE} ans, je mets à votre service ma connaissance fine du marché parisien et francilien, et des ambiances propres à chaque quartier. Estimation, vente, achat : je vous accompagne avec empathie et efficacité.</p>
                <p>De la mise en valeur de votre bien à la diffusion internationale via Leggett, en passant par la négociation et la signature notariale — je gère tout, pour vous.</p>
                <div className="agent-contact-block">
                  <a href={`tel:${PHONE}`} className="agent-phone-btn" onClick={() => trackClick("marie_tel")}>
                    <PhoneCall size={15} /> {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="agent-mail-btn" onClick={() => trackClick("marie_mail")}>
                    <Mail size={15} /> {EMAIL}
                  </a>
                </div>
                <Link href="/nous" className="agent-more-link" onClick={() => trackClick("marie_profil")}>
                  Découvrir Marie et sa façon de travailler <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── HUMAIN VS SIMULATEUR ── */}
        <section className="human-section" aria-label="Pourquoi un accompagnement humain">
          <Reveal>
            <p className="section-eyebrow">Ce que nous proposons</p>
            <h2 className="section-title">
              Un contact humain, pas un simulateur
              <span className="section-title-underline" />
            </h2>
            <p className="section-sub">
              SellMyHome est le site de Marie : son seul but est de vous mettre en relation directe avec elle,
              pour un accompagnement personnalisé du premier appel jusqu'à la signature.
            </p>
          </Reveal>
          <div className="human-container">
            <Reveal className="human-card human-card-yes">
              <h3>Avec Marie</h3>
              <ul>
                <li><CheckCircle2 size={17} /> Une personne qui vous rappelle sous 24h et répond à vos questions de vive voix</li>
                <li><CheckCircle2 size={17} /> Une estimation qui tient compte de ce que les données ne voient pas : lumière, vue, calme, état de l'immeuble</li>
                <li><CheckCircle2 size={17} /> Le même interlocuteur de l'estimation à l'acte chez le notaire</li>
                <li><CheckCircle2 size={17} /> Vos coordonnées restent entre vous et elle</li>
              </ul>
            </Reveal>
            <Reveal delay={100} className="human-card human-card-no">
              <h3>Avec un simulateur en ligne seul</h3>
              <ul>
                <li><XCircle size={17} /> Une moyenne de quartier, sans visite ni prise en compte de votre étage ou de votre vue</li>
                <li><XCircle size={17} /> Des écarts de 10 à 20 % fréquents sur les biens atypiques</li>
                <li><XCircle size={17} /> Vos coordonnées parfois transmises à plusieurs agences</li>
                <li><XCircle size={17} /> Personne pour vous conseiller sur la stratégie de vente</li>
              </ul>
            </Reveal>
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
              <span className="mid-cta-note">Gratuit · Confidentiel · Sans engagement</span>
            </div>
          </section>
        </Reveal>

        {/* ── SECTEURS ── */}
        <section className="zones-section" aria-label="Secteurs d'intervention">
          <div className="zones-container">
            <Reveal>
              <p className="section-eyebrow">Où intervient Marie</p>
              <h2 className="section-title">
                Estimation à Paris &amp; en Île-de-France
                <span className="section-title-underline" />
              </h2>
              <p className="section-sub">Prix au m², quartiers, points de vigilance : choisissez votre secteur pour une lecture locale du marché.</p>
            </Reveal>
            <div className="zones-grid">
              <div className="zones-col">
                <h3>Paris, arrondissement par arrondissement</h3>
                <p>Du Marais au 16e, chaque arrondissement a ses micro-marchés.</p>
                <div className="zone-chips">
                  {PARIS.map((z) => (
                    <Link key={z.slug} href={`/estimation-immobiliere/${z.slug}`} className="zone-chip" onClick={() => trackClick(`zone_${z.slug}`)}>{z.name}</Link>
                  ))}
                </div>
                <Link href="/estimation-paris" className="zones-more">Estimation à Paris →</Link>
              </div>
              <div className="zones-col">
                <h3>Île-de-France</h3>
                <p>Hauts-de-Seine, Val-de-Marne, est parisien et Yvelines.</p>
                <div className="zone-chips">
                  {IDF.map((z) => (
                    <Link key={z.slug} href={`/estimation-immobiliere/${z.slug}`} className="zone-chip" onClick={() => trackClick(`zone_${z.slug}`)}>{z.name}</Link>
                  ))}
                </div>
                <Link href="/estimation-ile-de-france" className="zones-more">Estimation en Île-de-France →</Link>
              </div>
            </div>
          </div>
        </section>

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
                { href: "/estimation-ile-de-france", icon: Globe2, title: "Estimation Île-de-France", desc: "Prix m² 2026 ville par ville" },
                { href: "/prix-m2-paris", icon: TrendingUp, title: "Prix m² Paris 2026", desc: "Tableau complet par arrondissement" },
                { href: "/vendre-a-paris", icon: HomeIcon, title: "Vendre à Paris", desc: "Guide complet de la vente immobilière" },
                { href: "/chasseur-paris", icon: Search, title: "Chasseur immobilier Paris", desc: "Biens off-market, négociation incluse" },
                { href: "/diagnostic-immobilier-paris", icon: ShieldCheck, title: "Diagnostics immobiliers", desc: "DPE, Carrez, amiante : ce qu'il faut savoir" },
                { href: "/frais-notaire-paris", icon: FileSignature, title: "Frais de notaire 2026", desc: "Calcul et exemples chiffrés" },
                { href: "/estimation-appartement", icon: BarChart3, title: "Estimer un appartement", desc: "Les critères qui font le prix" },
                { href: "/nous", icon: UserRound, title: "Marie Houlier", desc: "Votre interlocutrice à Paris & IDF" },
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