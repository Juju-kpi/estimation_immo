"use client";
import { useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";
import { fraisNotaire, round100 } from "../lib/notaire";
import { trackClick } from "./Tracker";

const eur = (n) => `${round100(n).toLocaleString("fr-FR").replace(/ | /g, " ")} €`;

// Simulateur de frais de notaire (Paris) — estimation indicative
export default function NotaryCalculator() {
  const [price, setPrice] = useState("600000");
  const [neuf, setNeuf] = useState(false);
  const [primo, setPrimo] = useState(false);
  const [used, setUsed] = useState(false);

  const value = Number(String(price).replace(/\D/g, "")) || 0;
  const r = fraisNotaire(value, { neuf, primo: !neuf && primo });

  const touch = () => {
    if (used) return;
    setUsed(true);
    trackClick("simulateur_notaire");
    if (typeof window !== "undefined" && window.gtag) window.gtag("event", "use_calculator", { calculator: "frais_notaire" });
  };

  return (
    <section className="calc" aria-labelledby="calc-title">
      <div className="calc-head">
        <span className="calc-icon"><Calculator size={20} /></span>
        <div>
          <h2 id="calc-title" className="calc-title">Simulateur de frais de notaire à Paris</h2>
          <p className="calc-sub">Estimation instantanée, barème 2026 (droits de mutation Paris : 6,32 %)</p>
        </div>
      </div>

      <div className="calc-grid">
        <div className="calc-inputs">
          <label className="calc-label" htmlFor="calc-price">Prix d'achat du bien</label>
          <div className="calc-price">
            <input
              id="calc-price"
              inputMode="numeric"
              autoComplete="off"
              value={value ? value.toLocaleString("fr-FR").replace(/ | /g, " ") : ""}
              onChange={(e) => { setPrice(e.target.value); touch(); }}
              placeholder="600 000"
            />
            <span>€</span>
          </div>

          <fieldset className="calc-toggle">
            <legend className="calc-label">Type de bien</legend>
            <label className={!neuf ? "is-on" : ""}>
              <input type="radio" name="calc-type" checked={!neuf} onChange={() => { setNeuf(false); touch(); }} /> Ancien
            </label>
            <label className={neuf ? "is-on" : ""}>
              <input type="radio" name="calc-type" checked={neuf} onChange={() => { setNeuf(true); touch(); }} /> Neuf (VEFA)
            </label>
          </fieldset>

          {!neuf && (
            <label className="calc-check">
              <input type="checkbox" checked={primo} onChange={(e) => { setPrimo(e.target.checked); touch(); }} />
              Primo-accédant (résidence principale, pas propriétaire depuis 2 ans)
            </label>
          )}
        </div>

        <div className="calc-result" aria-live="polite">
          <p className="calc-total-label">Frais estimés</p>
          <p className="calc-total">{eur(r.total)}</p>
          <p className="calc-pct">soit environ {r.pct.toFixed(1).replace(".", ",")} % du prix</p>
          <dl className="calc-breakdown">
            <div><dt>Droits de mutation</dt><dd>{eur(r.droits)}</dd></div>
            <div><dt>Émoluments du notaire (TTC)</dt><dd>{eur(r.emoluments)}</dd></div>
            <div><dt>Débours, formalités, CSI</dt><dd>{eur(r.debours + r.csi)}</dd></div>
          </dl>
        </div>
      </div>

      <p className="calc-note">
        Estimation indicative : le montant exact est calculé par le notaire (frais de prêt et de garantie en sus).
        Vous vendez pour acheter ? <Link href="/estimation" onClick={() => trackClick("simulateur_notaire_estimation")}>Faites d'abord estimer votre bien gratuitement</Link>.
      </p>
    </section>
  );
}
