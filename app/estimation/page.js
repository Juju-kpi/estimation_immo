"use client";
import { useState } from "react";

export default function Estimation() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    type: "",
    surface: "",
    city: "",
    email: "",
    telephone: ""
  });

  const next = () => setStep(step + 1);

  return (
    <div style={{ padding: 40, maxWidth: 500, margin: "auto" }}>
      <h1>Estimation</h1>

      {step === 1 && (
        <div>
          <p>Type de bien</p>
          <select onChange={(e) => setData({...data, type: e.target.value})}>
            <option>Appartement</option>
            <option>Maison</option>
          </select>
          <button className="btn" onClick={next}>Suivant</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>Surface</p>
          <input
            type="number"
            onChange={(e) => setData({...data, surface: e.target.value})}
          />
          <button className="btn" onClick={next}>Suivant</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p>Ville</p>
          <input
            onChange={(e) => setData({...data, city: e.target.value})}
          />
          <button className="btn" onClick={next}>Suivant</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <p>Email</p>
          <input
            onChange={(e) => setData({...data, email: e.target.value})}
          />
	
	  <div>
          <p>Télephone</p>
          <input
            onChange={(e) => setData({...data, telephone: e.target.value})}
          />


          <button
            className="btn"
            onClick={async () => {
              const res = await fetch("/api/estimate", {
                method: "POST",
                body: JSON.stringify(data)
              });

              const result = await res.json();
              alert(`Estimation: ${result.price} €`);
            }}
          >
            Obtenir estimation
          </button>
        </div>
      )}
    </div>
  );
}