"use client";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-links">
          <a href="/" className="nav-link">Accueil</a>
          <a href="/estimation" className="nav-cta">Estimation</a>
          <a href="/contact" className="nav-link">Recherche</a>
          <a href="/presentation" className="nav-link">A propos</a>
        </div>

      </div>
    </nav>
  );
}
