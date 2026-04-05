"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackClick } from "./components/Tracker";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-container">

 <Link href="/" className="nav-logo">
      <Image
        src="/logo.png"
        alt="Sellmyhome"
        width={170}
        height={75}
        priority
      />
    </Link>
          
           <div className="nav-links">  
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Accueil
          </Link>


          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
 onClick={() => trackClick("nav_recherche")}
          >
            Recherche
          </Link>
              
              <Link
  href="/estimation"
  className={`nav-cta ${pathname === "/estimation" ? "active-cta" : ""}`}
  onClick={() => {
     trackClick("nav_estimation");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_estimation_nav", {
        event_category: "navigation",
        event_label: "navbar",
      });
    }
  }}
>
  Estimation
</Link>

          <Link
            href="/presentation"
            className={`nav-link ${pathname === "/presentation" ? "active" : ""}`}
 onClick={() => trackClick("nav_presentation")}
          >
            A propos
          </Link>

               <Link
            href="/nous"
            className={`nav-link ${pathname === "/nous" ? "active" : ""}`}
 onClick={() => trackClick("nav_contact")}
          >
            Nous contacter
          </Link>


        </div>
      </div>
    </nav>
  );
}
