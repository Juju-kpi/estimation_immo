export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: "1px solid #eee"
    }}>
      
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src="/logo.png" alt="logo" style={{ height: 50 }} />
        <span style={{ fontWeight: "bold" }}>
          EstimImmo
        </span>
      </div>

      {/* MENU */}
      <div style={{ display: "flex", gap: 20 }}>
        <a href="/">Accueil</a>
        <a href="/estimation">Estimation</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  );
}