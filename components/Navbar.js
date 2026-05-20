"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackClick } from "../components/Tracker";

export default function Navbar() {
  const pathname = usePathname();
  const nl = (href) => `nav-link${pathname === href ? " active" : ""}`;
  return (
    <nav className="navbar" role="navigation" aria-label="Navigation principale">
      <div className="nav-container">
        <Link href="/" className="nav-logo" aria-label="SellMyHome — Accueil">
          <Image src="/logo.png" alt="SellMyHome — Agence immobilière Paris" width={170} height={75} priority />
        </Link>
        <div className="nav-links">
          <Link href="/" className={nl("/")}>Accueil</Link>
          <Link href="/vendre-a-paris" className={nl("/vendre-a-paris")} onClick={() => trackClick("nav_vendre")}>Vendre</Link>
          <Link href="/chasseur-paris" className={nl("/chasseur-paris")} onClick={() => trackClick("nav_chasseur")}>Recherche</Link>
          <Link href="/prix-m2-paris" className={nl("/prix-m2-paris")} onClick={() => trackClick("nav_prix")}>Prix m²</Link>
          <Link href="/nous" className={nl("/nous")} onClick={() => trackClick("nav_nous")}>Marie</Link>
          <Link href="/estimation" className={`nav-cta${pathname === "/estimation" ? " active-cta" : ""}`} onClick={() => { trackClick("nav_estimation"); if (typeof window !== "undefined" && window.gtag) window.gtag("event", "click_estimation_nav", { event_category: "navigation", event_label: "navbar" }); }}>
            Estimation gratuite
          </Link>
        </div>
      </div>
    </nav>
  );
}
