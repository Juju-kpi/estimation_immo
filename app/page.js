export default function Home() {
  return (
    <main>

      <section
        style={{
          height: "80vh",
          backgroundImage: "url('/house.jpg')",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.5)", padding: 40 }}>
          <h1 style={{ color: "white", fontSize: 40 }}>
            Estimez votre bien immobilier
          </h1>

          <a href="/estimation">
            <button className="btn">Commencer</button>
          </a>
        </div>
      </section>

      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Pourquoi nous ?</h2>

        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          <div>
            <h3>Rapide</h3>
            <p>2 minutes</p>
          </div>
          <div>
            <h3>Fiable</h3>
            <p>Données marché</p>
          </div>
          <div>
            <h3>Gratuit</h3>
            <p>Sans engagement</p>
          </div>
        </div>
      </section>

    </main>
  );
}