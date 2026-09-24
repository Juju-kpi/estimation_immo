import { YEARS_EXPERIENCE, PHONE_DISPLAY } from "../lib/site";

// FAQ de l'accueil — partagée entre le rendu (HomeClient) et le JSON-LD (page.js)
export const faqHome = [
  { q: "Comment estimer mon bien immobilier à Paris ou en Île-de-France ?", a: `Remplissez notre formulaire gratuit en 3 minutes, ou appelez directement Marie au ${PHONE_DISPLAY}. Marie Houlier, agente Leggett depuis ${YEARS_EXPERIENCE} ans, étudie les ventes réelles de votre secteur et vous rappelle sous 24h avec une fourchette argumentée. Elle peut ensuite visiter votre bien pour affiner l'estimation.` },
  { q: "L'estimation immobilière est-elle vraiment gratuite ?", a: "Oui, totalement gratuite et sans engagement. SellMyHome ne facture rien pour l'estimation. Marie n'est rémunérée que si vous décidez de lui confier la vente et que celle-ci aboutit, ce qui aligne ses intérêts sur les vôtres." },
  { q: "Qu'est-ce que SellMyHome exactement ?", a: "SellMyHome est le site de Marie Houlier, conseillère immobilière affiliée au réseau Leggett. Son rôle est simple : vous mettre en relation directe avec Marie, qui vous accompagne personnellement pour estimer, vendre ou acheter. Pas de plateforme anonyme, pas de revente de vos coordonnées." },
  { q: "Combien de temps faut-il pour vendre un appartement à Paris ?", a: "Pour un bien correctement estimé et bien présenté, comptez en moyenne 60 à 90 jours jusqu'au compromis à Paris, puis 2 à 3 mois jusqu'à la signature chez le notaire. Grâce au réseau international Leggett, votre bien touche aussi des acquéreurs étrangers." },
  { q: "Quels secteurs couvrez-vous ?", a: "Paris (les 20 arrondissements) et l'Île-de-France, notamment les communes proches comme Neuilly-sur-Seine, Levallois-Perret, Boulogne-Billancourt, Issy-les-Moulineaux, Vincennes, Saint-Mandé, Montreuil, Versailles ou Saint-Germain-en-Laye. Pour une autre commune, appelez Marie : elle vous répondra franchement." },
];
