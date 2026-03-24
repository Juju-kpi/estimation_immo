export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      borderRadius: 8,
      margin: "10px"
    }}>
      
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="/logo.png" alt="logo" style={{ height: 100 }} />
        <span style={{ fontWeight: 600, fontSize: 22, color: "#333" }}>
        </span>
      </div>

      {/* MENU */}
      <div style={{ display: "flex", gap: 30 }}>
        <a href="/" style={linkStyle}>Accueil</a>
        <a href="/estimation" style={linkStyle}>Estimation</a>
        <a href="#" style={linkStyle}>Contact</a>
        <a href="#" style={linkStyle}>Connexion</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#555",
  fontWeight: 500,
  fontSize: 16,
  padding: "5px 10px",
  borderRadius: 5,
  transition: "all 0.2s ease",
  cursor: "pointer",
};

// Optionnel: hover effect
// Ajoute dans app/globals.css ou inline
/*
a:hover {
  background-color: #f0f0f0;
  color: #000;
}
*/
