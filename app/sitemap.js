import { SITE_URL, UPDATED_ISO } from "../lib/site";
import { ALL_LOCATIONS } from "../lib/locations";

// Date fixe : ne change qu'à la mise à jour éditoriale (UPDATED_ISO dans lib/site.js),
// pour que Google ne voie pas toutes les pages "modifiées" à chaque déploiement.
const lastModified = new Date(UPDATED_ISO);

const NEW = "2026-10-15";

// [chemin, fréquence, priorité, date de dernière modification éditoriale (facultative)]
const pages = [
  ["", "weekly", 1.0],
  ["/estimation", "monthly", 0.95],
  ["/estimation-paris", "monthly", 0.95],
  ["/estimation-ile-de-france", "monthly", 0.9],
  ["/vendre-a-paris", "monthly", 0.9, NEW],
  ["/prix-m2-paris", "monthly", 0.9],
  ["/estimation-appartement", "monthly", 0.8],
  ["/chasseur-paris", "monthly", 0.8],
  ["/diagnostic-immobilier-paris", "monthly", 0.8],
  ["/frais-notaire-paris", "monthly", 0.8],
  ["/vendre-appartement-succession-paris", "monthly", 0.8, NEW],
  ["/vendre-appartement-divorce-paris", "monthly", 0.8],
  ["/vendre-appartement-rapidement-paris", "monthly", 0.8],
  ["/vendre-maison-retraite-paris", "monthly", 0.75],
  ["/vendre-avant-achat-paris", "monthly", 0.75],
  ["/vendre-appartement-indivision-paris", "monthly", 0.8, NEW],
  ["/vendre-appartement-loue-paris", "monthly", 0.8, NEW],
  ["/vendre-passoire-thermique-paris", "monthly", 0.8, NEW],
  ["/vendre-appartement-paris-depuis-etranger", "monthly", 0.8, NEW],
  ["/agence-immobiliere-paris", "monthly", 0.75],
  ["/nous", "monthly", 0.75],
  ["/contact", "yearly", 0.7],
];

export default function sitemap() {
  return [
    ...pages.map(([path, changeFrequency, priority, updated]) => ({
      url: `${SITE_URL}${path}`,
      lastModified: updated ? new Date(updated) : lastModified,
      changeFrequency,
      priority,
    })),
    ...ALL_LOCATIONS.map((l) => ({
      url: `${SITE_URL}/estimation-immobiliere/${l.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];
}
