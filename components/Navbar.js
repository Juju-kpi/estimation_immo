"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Clock } from "lucide-react";
import { trackClick } from "../components/Tracker";
import { PHONE, PHONE_DISPLAY, YEARS_EXPERIENCE } from "../lib/site";

const links = [
  ["/", "Accueil", "nav_accueil"],
  ["/vendre-a-paris", "Vendre", "nav_vendre"],
  ["/prix-m2-paris", "Prix m²", "nav_prix"],
  ["/estimation-ile-de-france", "Île-de-France", "nav_idf"],
  ["/chasseur-paris", "Acheter", "nav_chasseur"],
  ["/nous", "Marie", "nav_nous"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Ferme le menu mobile à chaque changement de page, et avec la touche Échap
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const trackEstimation = () => {
    trackClick("nav_estimation");
    if (typeof window !== "undefined" && window.gtag) window.gtag("event", "click_estimation_nav", { event_category: "navigation", event_label: "navbar" });
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>Agente Leggett · {YEARS_EXPERIENCE} ans d'expérience · Paris &amp; Île-de-France</span>
          <span className="topbar-right">
            <span className="topbar-item"><Clock size={13} /> Réponse sous 24h</span>
            <a href={`tel:${PHONE}`} className="topbar-phone" onClick={() => trackClick("topbar_tel")}>
              <PhoneCall size={13} /> {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      <nav className={`navbar${open ? " is-open" : ""}`} role="navigation" aria-label="Navigation principale">
        <div className="nav-container">
          <Link href="/" className="nav-logo" aria-label="SellMyHome — Accueil">
            <Image src="/logo.png" alt="SellMyHome — estimation immobilière Paris et Île-de-France" width={128} height={67} priority quality={90} />
          </Link>

          <div className="nav-links" id="nav-menu">
            {links.map(([href, label, track]) => (
              <Link key={href} href={href} className={`nav-link${pathname === href ? " active" : ""}`} onClick={() => trackClick(track)}>
                {label}
              </Link>
            ))}
            <Link href="/estimation" className={`nav-cta${pathname === "/estimation" ? " active-cta" : ""}`} onClick={trackEstimation}>
              Estimation gratuite
            </Link>
            <a href={`tel:${PHONE}`} className="nav-menu-phone" onClick={() => trackClick("menu_tel")}>
              <PhoneCall size={16} /> Appeler Marie · {PHONE_DISPLAY}
            </a>
          </div>

          <div className="nav-mobile-actions">
            <a href={`tel:${PHONE}`} className="nav-icon-btn" aria-label={`Appeler Marie au ${PHONE_DISPLAY}`} onClick={() => trackClick("nav_mobile_tel")}>
              <PhoneCall size={19} />
            </a>
            <button
              type="button"
              className="nav-icon-btn nav-burger"
              aria-expanded={open}
              aria-controls="nav-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
