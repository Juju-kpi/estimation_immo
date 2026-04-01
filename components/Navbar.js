"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">

          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Accueil
          </Link>

          <Link
            href="/estimation"
            className={`nav-cta ${pathname === "/estimation" ? "active-cta" : ""}`}
          >
            Estimation
          </Link>

          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
          >
            Recherche
          </Link>

          <Link
            href="/presentation"
            className={`nav-link ${pathname === "/presentation" ? "active" : ""}`}
          >
            A propos
          </Link>

        </div>
      </div>
    </nav>
  );
}
