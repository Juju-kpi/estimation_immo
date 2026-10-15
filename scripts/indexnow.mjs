// Notifie IndexNow (Bing, Yandex, Seznam… — l'index de Bing alimente aussi Copilot et la
// recherche de ChatGPT) des URL du sitemap après chaque build de PRODUCTION sur Vercel.
// Ne fait jamais échouer le build : toute erreur est simplement journalisée.
import { readFileSync, existsSync } from "node:fs";

const KEY = "b038dcfd5ce9fc8aca87f64583ec9f8a"; // doit correspondre au fichier public/b038dcfd5ce9fc8aca87f64583ec9f8a.txt
const HOST = "sellmyhome.fr";
const SITEMAP = ".next/server/app/sitemap.xml.body";

async function main() {
  if (process.env.VERCEL_ENV !== "production") {
    console.log("[indexnow] ignoré (pas un build de production Vercel)");
    return;
  }
  if (!existsSync(SITEMAP)) {
    console.log("[indexnow] sitemap introuvable :", SITEMAP);
    return;
  }
  const urls = [...readFileSync(SITEMAP, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
    signal: AbortSignal.timeout(10000),
  });
  console.log(`[indexnow] ${urls.length} URL envoyées → HTTP ${res.status}`);
}

main().catch((e) => console.log("[indexnow] erreur ignorée :", e.message));
