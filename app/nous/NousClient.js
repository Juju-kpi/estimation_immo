"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, HeartHandshake, ShieldCheck, Globe2, ChevronRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import { trackClick } from "../../components/Tracker";
import { PARIS, IDF } from "../../lib/locations";
import { PHONE, PHONE_DISPLAY, EMAIL, YEARS_EXPERIENCE } from "../../lib/site";

const valeurs = [
  {
    icon: HeartHandshake,
    titre: "Un seul interlocuteur",
    desc: "C'est moi qui vous réponds, qui visite votre bien, qui organise les visites et qui négocie. Du premier appel à la signature, vous savez toujours à qui parler.",
  },
  {
    icon: ShieldCheck,
    titre: "Une estimation honnête",
    desc: "Mes chiffres s'appuient sur les ventes réelles de votre quartier, pas sur un prix gonflé pour obtenir un mandat. Un bien bien estimé se vend plus vite, et mieux.",
  },
  {
    icon: Globe2,
    titre: "La force du réseau Leggett",
    desc: "En plus des portails français, votre bien est présenté à une clientèle internationale : un vrai atout pour les biens de caractère et les adresses recherchées.",
  },
];

const services = [
  ["/estimation", "Estimer votre bien gratuitement", "rappel sous 24h, visite si vous le souhaitez"],
  ["/vendre-a-paris", "Vendre votre appartement ou votre maison", "de la mise en valeur à l'acte chez le notaire"],
  ["/chasseur-paris", "Trouver le bien que vous cherchez", "recherche sur-mesure, biens off-market, négociation"],
  ["/vendre-appartement-succession-paris", "Vendre un bien hérité", "avec discrétion, en lien avec le notaire de la succession"],
  ["/vendre-appartement-divorce-paris", "Vendre lors d'une séparation", "en toute neutralité pour les deux parties"],
  ["/vendre-maison-retraite-paris", "Vendre pour votre retraite", "y compris à distance si vous avez déjà quitté Paris"],
];

export default function NousClient() {
  return (
    <main className="nous-page">
      <Reveal className="nous-hero">
        <div className="nous-photo">
          <Image
            src="/Marie.jpg"
            alt="Marie Houlier, conseillère immobilière Leggett à Paris et en Île-de-France"
            fill
            quality={85}
            priority
            sizes="(max-width: 768px) 90vw, 320px"
          />
        </div>
        <div>
          <nav className="breadcrumb" aria-label="Fil d'Ariane"><Link href="/">Accueil</Link> <span aria-hidden="true">›</span> <span>Marie Houlier</span></nav>
          <h1>Marie Houlier, votre conseillère immobilière à Paris &amp; en Île-de-France</h1>
          <p className="agent-tagline">Agente Leggett · {YEARS_EXPERIENCE} ans d'expérience · Paris &amp; IDF</p>
          <p>
            Depuis {YEARS_EXPERIENCE} ans, je mets à votre service ma connaissance fine du marché immobilier parisien
            et francilien, et des ambiances propres à chaque quartier.
          </p>
          <p className="nous-quote">
            Je vous accompagne avec empathie et efficacité, de l'estimation jusqu'à la signature chez le notaire.
          </p>
          <p>
            Je valorise votre bien, assure sa diffusion y compris à l'international grâce au réseau Leggett,
            et mène les négociations avec rigueur. SellMyHome, c'est simplement le moyen de me joindre directement.
          </p>
          <div className="agent-contact-block">
            <a href={`tel:${PHONE}`} className="agent-phone-btn" onClick={() => trackClick("nous_tel")}>
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="agent-mail-btn" onClick={() => trackClick("nous_mail")}>
              <Mail size={15} /> {EMAIL}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal className="nous-block">
        <h2>Ma façon de travailler</h2>
        <p>
          Vendre ou acheter un bien est souvent lié à un moment important de la vie : une naissance, une séparation,
          une succession, un départ. Je prends le temps de comprendre votre situation avant de parler de prix.
        </p>
        <div className="nous-values">
          {valeurs.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.titre} className="nous-value">
                <span className="icon-badge"><Icon size={20} /></span>
                <h3>{v.titre}</h3>
                <p>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="nous-block">
        <h2>Ce que je fais pour vous</h2>
        <div className="seo-links-grid">
          {services.map(([href, titre, desc]) => (
            <Link key={href} href={href} className="seo-link-card" onClick={() => trackClick(`nous_${href.slice(1)}`)}>
              <span className="icon-badge"><ChevronRight size={18} /></span>
              <div><strong>{titre}</strong><p>{desc}</p></div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="nous-block">
        <h2>Où j'interviens</h2>
        <p>
          Les 20 arrondissements de Paris et les communes proches d'Île-de-France. Pour chaque secteur, retrouvez les prix
          2026 et ce qui fait la valeur d'un bien :
        </p>
        <div className="zone-chips">
          {[...PARIS, ...IDF].map((z) => (
            <Link key={z.slug} href={`/estimation-immobiliere/${z.slug}`} className="zone-chip">{z.name}</Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="nous-block" style={{ textAlign: "center" }}>
        <h2>Parlons de votre projet</h2>
        <p style={{ maxWidth: 560, margin: "0 auto 18px" }}>
          Un appel suffit pour faire le point, sans engagement. Si vous préférez, décrivez votre bien en ligne :
          je vous rappelle sous 24h.
        </p>
        <Link href="/estimation" className="primary-btn" onClick={() => trackClick("nous_estimation")}>Demander mon estimation gratuite</Link>
        <p style={{ marginTop: 8, fontSize: 14 }}>
          ou <Link href="/contact" style={{ color: "var(--color-secondary)", fontWeight: 600 }}>écrivez-moi</Link> ·{" "}
          <a href={`tel:${PHONE}`} style={{ color: "var(--color-secondary)", fontWeight: 600 }}>{PHONE_DISPLAY}</a>
        </p>
      </Reveal>
    </main>
  );
}
