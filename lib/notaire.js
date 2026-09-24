// Estimation indicative des frais d'acquisition ("frais de notaire") à Paris (75).
// Sources : DMTO Paris 6,32 % depuis avril 2025 (5,81 % pour les primo-accédants),
// barème réglementé des émoluments du notaire, contribution de sécurité immobilière 0,10 %.

export const DMTO_ANCIEN = 0.0632;
export const DMTO_PRIMO = 0.0581;
export const DMTO_NEUF = 0.00715;
const TVA = 0.2;
const CSI = 0.001;
const DEBOURS = 1200; // débours et formalités, ordre de grandeur

// Barème dégressif des émoluments du notaire (HT)
const TRANCHES = [
  [6500, 0.0387],
  [17000, 0.01596],
  [60000, 0.01064],
  [Infinity, 0.00799],
];

export function emolumentsHT(price) {
  let rest = price, prev = 0, total = 0;
  for (const [cap, rate] of TRANCHES) {
    const part = Math.min(rest, cap - prev);
    if (part <= 0) break;
    total += part * rate;
    rest -= part;
    prev = cap;
  }
  return total;
}

export function fraisNotaire(price, { neuf = false, primo = false } = {}) {
  const p = Math.max(0, Number(price) || 0);
  const droits = p * (neuf ? DMTO_NEUF : primo ? DMTO_PRIMO : DMTO_ANCIEN);
  const emoluments = emolumentsHT(p) * (1 + TVA);
  const csi = p * CSI;
  const debours = p > 0 ? DEBOURS : 0;
  const total = droits + emoluments + csi + debours;
  return { droits, emoluments, csi, debours, total, pct: p ? (total / p) * 100 : 0 };
}

export const round100 = (n) => Math.round(n / 100) * 100;
