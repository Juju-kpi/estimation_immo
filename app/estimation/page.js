"use client";
import { useState } from "react";

export default function Estimation() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const next = () => setStep(step + 1);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>
      <div style={{
        background: "#fff",
        padding: 40,
        borderRadius: 12,
        width: 500,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{ textAlign: "center", marginBottom: 30 }}>
          Estimation immobilière
        </h1>

        {/* STEP 1 : Adresse */}
        {step === 1 && (
          <>
            <h2>Quelle est l’adresse du logement ?</h2>
            <input
              placeholder="Ex: 10 rue de Paris, Lyon"
              style={inputStyle}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />

            <button style={buttonStyle} onClick={next}>
              Continuer
            </button>
          </>
        )}

        {/* STEP 2 : Type */}
        {step === 2 && (
          <>
            <h2>Type de bien</h2>

            <div style={gridStyle}>
              {["Appartement", "Maison", "Bureau"].map((type) => (
                <div
                  key={type}
                  style={cardStyle}
                  onClick={() => {
                    setData({ ...data, type });
                    next();
                  }}
                >
                  <p>{type}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 3 : Caractéristiques */}
        {step === 3 && (
          <>
            <h2>Caractéristiques principales</h2>

            <input
              placeholder="Surface (m²)"
              style={inputStyle}
              onChange={(e) => setData({ ...data, surface: e.target.value })}
            />

            <input
              placeholder="Nombre de pièces"
              style={inputStyle}
              onChange={(e) => setData({ ...data, rooms: e.target.value })}
            />

            <select
              style={inputStyle}
              onChange={(e) => setData({ ...data, condition: e.target.value })}
            >
              <option>État du bien</option>
              <option>Neuf</option>
              <option>Excellent</option>
              <option>Standard</option>
              <option>À rénover</option>
            </select>

            <button style={buttonStyle} onClick={next}>
              Continuer
            </button>
          </>
        )}

        {/* STEP 4 : Projet */}
        {step === 4 && (
          <>
            <h2>Votre projet</h2>

            <select
              style={inputStyle}
              onChange={(e) => setData({ ...data, project: e.target.value })}
            >
              <option>Choisissez</option>
              <option>Vente immédiate</option>
              <option>3 à 6 mois</option>
              <option>+6 mois</option>
              <option>Pas de projet</option>
            </select>

            <button style={buttonStyle} onClick={next}>
              Continuer
            </button>
          </>
        )}

        {/* STEP 5 : Contact */}
        {step === 5 && (
          <>
            <h2>Vos coordonnées</h2>

            <input placeholder="Nom" style={inputStyle}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <input placeholder="Email" style={inputStyle}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <input placeholder="Téléphone" style={inputStyle}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />

            <button
              style={buttonStyle}
              onClick={async () => {
                await fetch("/api/lead", {
                  method: "POST",
                  body: JSON.stringify(data),
                });

                alert("Merci ! Vos informations ont été envoyées.");
              }}
            >
              Envoyer
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* 🎨 Styles */
const inputStyle = {
  width: "100%",
  padding: 12,
  marginTop: 10,
  marginBottom: 20,
  borderRadius: 8,
  border: "1px solid #ddd"
};

const buttonStyle = {
  width: "100%",
  padding: 15,
  background: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 16
};

const gridStyle = {
  display: "flex",
  gap: 20,
  justifyContent: "center"
};

const cardStyle = {
  padding: 20,
  border: "1px solid #ddd",
  borderRadius: 10,
  cursor: "pointer",
  textAlign: "center",
  width: 120,
  transition: "0.2s"
};
