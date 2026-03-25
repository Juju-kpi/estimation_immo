"use client";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldShow = localStorage.getItem("showSuccessToast");
      if (shouldShow) {
        setShowToast(true);
        localStorage.removeItem("showSuccessToast");

        const timer = setTimeout(() => setShowToast(false), 3000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
      {showToast && (
        <div style={{
          position: "fixed",
          top: 20,
          right: 20,
          background: "#d4edda",
          color: "#155724",
          padding: "15px 25px",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontWeight: 500,
          zIndex: 9999,
        }}>
          Votre demande a bien été envoyée !
        </div>
      )}
        {/* Hero Section */}
      <section
        style={{
          height: "90vh",
          backgroundImage: "url('/house.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{
          background: "rgba(0,0,0,0.5)",
          padding: "60px 40px",
          borderRadius: 12,
          textAlign: "center",
          maxWidth: 600
        }}>
          <h1 style={{
            color: "white",
            fontSize: 48,
            marginBottom: 20,
            fontWeight: 600
          }}>
            Estimez votre bien immobilier
          </h1>
          <p style={{
            color: "#ddd",
            fontSize: 18,
            marginBottom: 30
          }}>
            Découvrez la valeur réelle de votre appartement ou maison en quelques minutes.
          </p>
          <a href="/estimation">
            <button style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              padding: "15px 30px",
              fontSize: 18,
              borderRadius: 8,
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#005fcc"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#0070f3"}>
              Commencer
            </button>
          </a>
        </div>
      </section>

      {/* Pourquoi nous Section */}
      <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f8f8f8" }}>
        <h2 style={{ fontSize: 36, marginBottom: 50 }}>Pourquoi choisir Leggett Immobilier ?</h2>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "center"
        }}>
          <div style={{
            background: "#fff",
            padding: 30,
            borderRadius: 12,
            width: 200,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ fontSize: 24, marginBottom: 10 }}>Rapide</h3>
            <p style={{ fontSize: 16, color: "#555" }}>Obtenez une estimation en moins de 2 minutes</p>
          </div>

          <div style={{
            background: "#fff",
            padding: 30,
            borderRadius: 12,
            width: 200,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ fontSize: 24, marginBottom: 10 }}>Fiable</h3>
            <p style={{ fontSize: 16, color: "#555" }}>Basé sur les données réelles du marché immobilier</p>
          </div>

          <div style={{
            background: "#fff",
            padding: 30,
            borderRadius: 12,
            width: 200,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ fontSize: 24, marginBottom: 10 }}>Gratuit</h3>
            <p style={{ fontSize: 16, color: "#555" }}>Sans engagement, rapide et simple</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Prêt à connaître la valeur de votre bien ?</h2>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 30 }}>
          Laissez-nous vous fournir une estimation précise et rapide, adaptée à votre logement.
        </p>
        <a href="/estimation">
          <button style={{
            backgroundColor: "#FF6B00",
            color: "#fff",
            border: "none",
            padding: "15px 40px",
            fontSize: 18,
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = "#e55b00"}
          onMouseOut={e => e.currentTarget.style.backgroundColor = "#FF6B00"}>
            Obtenir mon estimation
          </button>
        </a>
      </section>

    </main>
  );
}
