import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, TrendingUp, Minus, Euro } from "lucide-react";
import JsonLd, { faqSchema, breadcrumbSchema } from "../../../components/JsonLd";
import AdvisorBox from "../../../components/AdvisorBox";
import { Byline, FaqList, Breadcrumb, ZoneChips } from "../../../components/SeoBits";
import { ALL_LOCATIONS, getLocation, shortName, inName, fmtEur } from "../../../lib/locations";
import { SITE_URL, PHONE_DISPLAY, AGENT_NAME, OG_IMAGE } from "../../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_LOCATIONS.map((l) => ({ slug: l.slug }));
}

const TYPES = [
  ["Studio", 25],
  ["2 pièces", 45],
  ["3 pièces", 65],
  ["4 pièces", 90],
];
const round5k = (n) => Math.round(n / 5000) * 5000;
const range = (loc, m2) => `${fmtEur(round5k(loc.min * m2))} – ${fmtEur(round5k(loc.max * m2))}`;

// "du 16e" / "de Vincennes" / "d'Issy-les-Moulineaux"
const ofName = (loc) =>
  loc.kind === "paris" ? `du ${shortName(loc)}` : /^[AEIOUÉÎ]/i.test(loc.name) ? `d'${loc.name}` : `de ${loc.name}`;

const hubFor = (loc) =>
  loc.kind === "paris"
    ? { name: "Estimation Paris", path: "/estimation-paris" }
    : { name: "Île-de-France", path: "/estimation-ile-de-france" };

// Titre ≤ 48 caractères (+ " | SellMyHome" ≈ 60) pour éviter la troncature dans Google
function titleFor(loc) {
  const candidates = [
    `Estimation immobilière ${loc.name} : prix m² 2026`,
    `Estimation immobilière ${loc.name} 2026`,
    `Estimation immobilière ${loc.name}`,
  ];
  return candidates.find((t) => t.length <= 48) || candidates[candidates.length - 1];
}

function descriptionFor(loc) {
  const q = loc.quartiers.slice(0, 2).map((x) => x[0].split(" / ")[0]).join(", ");
  const full = `Prix m² ${loc.name} 2026 : ${fmtEur(loc.min)} à ${fmtEur(loc.max)}. ${q}… Estimation gratuite par Marie, agente Leggett, rappel sous 24h.`;
  return full.length <= 158
    ? full
    : `Prix m² ${loc.name} 2026 : ${fmtEur(loc.min)} à ${fmtEur(loc.max)}. Estimation gratuite par Marie, agente Leggett, rappel sous 24h.`;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const path = `/estimation-immobiliere/${loc.slug}`;
  return {
    title: titleFor(loc),
    description: descriptionFor(loc),
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
    images: [OG_IMAGE],
      title: `Estimation immobilière ${loc.name} | SellMyHome`,
      description: descriptionFor(loc),
      url: `${SITE_URL}${path}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const path = `/estimation-immobiliere/${loc.slug}`;
  const hub = hubFor(loc);
  const near = loc.near.map(getLocation).filter(Boolean);
  const isParis = loc.kind === "paris";

  const faq = [
    {
      q: `Combien vaut un appartement ${inName(loc)} en 2026 ?`,
      a: `En 2026, les appartements anciens en bon état se négocient généralement entre ${fmtEur(loc.min)} et ${fmtEur(loc.max)} le m² ${inName(loc)}, selon la rue, l'étage, l'état et le DPE. Pour un 2 pièces de 45 m², cela représente un ordre de grandeur de ${range(loc, 45)}. Une estimation personnalisée permet de situer précisément votre bien dans cette fourchette.`,
    },
    ...loc.faq,
    {
      q: `Comment obtenir une estimation gratuite ${inName(loc)} ?`,
      a: `Remplissez le formulaire en ligne (3 minutes) ou appelez directement ${AGENT_NAME} au ${PHONE_DISPLAY}. Marie analyse les ventes récentes de votre secteur et vous rappelle sous 24h avec une fourchette argumentée. Si vous le souhaitez, elle se déplace ensuite pour affiner l'estimation. C'est gratuit et sans engagement.`,
    },
  ];

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Estimation immobilière ${loc.name}`,
    serviceType: "Estimation immobilière",
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#agent` },
    areaServed: {
      "@type": isParis ? "AdministrativeArea" : "City",
      name: isParis ? loc.full : loc.name,
      address: { "@type": "PostalAddress", postalCode: loc.cp, addressRegion: "Île-de-France", addressCountry: "FR" },
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Estimation gratuite et sans engagement" },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: hub.name, path: hub.path }, { name: loc.name, path }])} />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd data={service} />

      <main className="seo-page">
        <Breadcrumb items={[hub, { name: loc.name }]} />
        <h1>Estimation immobilière {inName(loc)}</h1>
        <Byline readingTime={4} />
        <p className="seo-intro">{loc.intro}</p>

        <div className="loc-stats">
          <div className="loc-stat">
            <span className="loc-stat-icon"><Euro size={18} /></span>
            <span className="loc-stat-label">Prix bas</span>
            <strong>{fmtEur(loc.min)}/m²</strong>
          </div>
          <div className="loc-stat">
            <span className="loc-stat-icon"><Euro size={18} /></span>
            <span className="loc-stat-label">Prix haut</span>
            <strong>{fmtEur(loc.max)}/m²</strong>
          </div>
          <div className="loc-stat">
            <span className="loc-stat-icon">{loc.trend === "hausse" ? <TrendingUp size={18} /> : <Minus size={18} />}</span>
            <span className="loc-stat-label">Tendance 2026</span>
            <strong>{loc.trend === "hausse" ? "En hausse" : "Stable"}</strong>
          </div>
          <div className="loc-stat">
            <span className="loc-stat-icon"><MapPin size={18} /></span>
            <span className="loc-stat-label">{isParis ? "Code postal" : loc.dept}</span>
            <strong>{loc.cp}</strong>
          </div>
        </div>

        <div className="seo-cta-block">
          <Link href="/estimation" className="primary-btn">Estimer mon bien {inName(loc)}</Link>
        </div>

        <h2>Prix immobilier {loc.name} : ordres de grandeur 2026</h2>
        <p>
          {inName(loc).charAt(0).toUpperCase() + inName(loc).slice(1)}, un appartement ancien en bon état se vend
          en général entre <strong>{fmtEur(loc.min)} et {fmtEur(loc.max)} le m²</strong>. Voici ce que cela représente
          selon la taille du bien :
        </p>
        <div className="seo-table-wrapper">
          <table className="seo-table">
            <thead><tr><th>Type de bien</th><th>Surface type</th><th>Fourchette indicative</th></tr></thead>
            <tbody>
              {TYPES.map(([label, m2]) => (
                <tr key={label}><td><strong>{label}</strong></td><td>{m2} m²</td><td style={{ whiteSpace: "nowrap" }}>{range(loc, m2)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prix-source">
          Fourchettes indicatives établies à partir des données publiques DVF et des indicateurs des Notaires du Grand Paris
          (1er semestre 2026), pour des appartements anciens en bon état.
          {!isParis && " Les maisons s'estiment au cas par cas (terrain, état, exposition)."} Elles ne remplacent pas une estimation personnalisée.
          {isParis && <> Voir le <Link href="/prix-m2-paris">tableau des 20 arrondissements</Link>.</>}
        </p>

        <h2>Les quartiers {ofName(loc)} : où se jouent les écarts de prix</h2>
        <p>
          Le prix moyen ne dit pas tout : {isParis ? "au sein d'un même arrondissement" : "dans une même commune"}, deux biens
          de surface identique peuvent afficher 20 à 30 % d'écart selon le quartier, la rue et l'immeuble.
        </p>
        <div className="quartier-grid">
          {loc.quartiers.map(([nom, note]) => (
            <div key={nom} className="quartier-card">
              <h3>{nom}</h3>
              <p>{note}</p>
            </div>
          ))}
        </div>

        <h2>Ce qui fait la valeur d'un bien {inName(loc)}</h2>
        <h3>Le bâti</h3>
        <p>{loc.bati}</p>
        <h3>Qui achète</h3>
        <p>{loc.acheteurs}</p>
        <h3>Les points de vigilance pour l'estimation</h3>
        <p>{loc.vigilance}</p>
        <h3>Transports</h3>
        <p>{loc.transports}</p>

        <h2>Votre estimation avec Marie, étape par étape</h2>
        <ol className="seo-list">
          <li><strong>Vous décrivez votre bien</strong> — en ligne en 3 minutes, ou directement par téléphone si vous préférez parler à quelqu'un.</li>
          <li><strong>Marie étudie votre secteur</strong> — ventes réelles récentes de votre rue et de votre quartier, état de la copropriété, DPE.</li>
          <li><strong>Elle vous rappelle sous 24h</strong> — une fourchette argumentée, expliquée de vive voix, avec les ventes comparables.</li>
          <li><strong>Visite si vous le souhaitez</strong> — pour intégrer ce que les données ne voient pas : lumière, vue, calme, finitions.</li>
          <li><strong>Vous décidez librement</strong> — aucune obligation de confier la vente, aucune relance insistante.</li>
        </ol>

        <AdvisorBox
          source={`loc_${loc.slug}`}
          title={`Vous vendez ${inName(loc)} ?`}
          text={`Chaque rue a son histoire et chaque immeuble son prix. Parlez-en directement avec ${AGENT_NAME} : elle vous donne une lecture honnête du marché ${ofName(loc)}, sans jargon ni pression commerciale.`}
        />

        <h2>FAQ — Estimation immobilière {loc.name}</h2>
        <FaqList faq={faq} />

        <h2>Secteurs voisins</h2>
        <ZoneChips zones={near} label="Secteurs voisins" />

        <div className="seo-internal-links">
          <p>
            À lire aussi : <Link href={hub.path}>{isParis ? "Estimation immobilière à Paris" : "Estimation immobilière en Île-de-France"}</Link> ·{" "}
            <Link href="/prix-m2-paris">Prix m² Paris 2026</Link> · <Link href="/vendre-a-paris">Guide pour vendre</Link> ·{" "}
            <Link href="/diagnostic-immobilier-paris">Diagnostics obligatoires</Link> · <Link href="/frais-notaire-paris">Frais de notaire</Link>
          </p>
        </div>
        <div className="seo-cta-block" style={{ marginTop: "2.5rem" }}>
          <Link href="/estimation" className="primary-btn">Obtenir mon estimation gratuite</Link>
        </div>
      </main>
    </>
  );
}
