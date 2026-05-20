export default function sitemap() {
  const base = "https://sellmyhome.fr";
  const now = new Date();
  return [
    { url: base,                                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/estimation`,                      lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/estimation-paris`,                lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/vendre-a-paris`,                  lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/prix-m2-paris`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/chasseur-paris`,                  lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/agence-immobiliere-paris`,        lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${base}/estimation-appartement`,          lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${base}/nous`,                            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/contact`,                         lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/presentation`,                    lastModified: now, changeFrequency: "monthly", priority: 0.70 },
  ];
}
