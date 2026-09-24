// Constantes partagées du site — à modifier ici une seule fois.
export const SITE_URL = "https://sellmyhome.fr";
export const SITE_NAME = "SellMyHome";

export const AGENT_NAME = "Marie Houlier";
export const PHONE = "+33752049878";
export const PHONE_DISPLAY = "07 52 04 98 78";
export const EMAIL = "contact@sellmyhome.fr";

// Ancienneté affichée partout sur le site (stats, bio, métadonnées)
export const YEARS_EXPERIENCE = 15;

// Date de dernière mise à jour éditoriale (affichée sur les guides + sitemap)
export const UPDATED_LABEL = "septembre 2026";
export const UPDATED_ISO = "2026-09-24";

export const url = (path = "") => `${SITE_URL}${path}`;

// Image de partage générée par app/opengraph-image.js. À répéter dans chaque
// `openGraph` de page : un openGraph enfant remplace entièrement celui du parent.
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "SellMyHome — Estimation immobilière gratuite à Paris et en Île-de-France avec Marie Houlier",
};
