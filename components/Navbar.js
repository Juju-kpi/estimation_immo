"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          >
            Recherche
          </Link>
              
              <Link
            href="/estimation"
            className={`nav-cta ${pathname === "/estimation" ? "active-cta" : ""}`}
          >
            Estimation
          </Link>

          <Link
            href="/presentation"
            className={`nav-link ${pathname === "/presentation" ? "active" : ""}`}
          >
            A propos
          </Link>

               <Link
            href="/nous"
            className={`nav-link ${pathname === "/nous" ? "active" : ""}`}
          >
            Nous contacter
          </Link>


        </div>
      </div>
    </nav>
  );
}
