"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

export default function Estimation() {
  const router = useRouter();
  const [data, setData] = useState({
    address: "",
    floor: "",
    surface: "",
    project: "",
    name: "",
    email: "",
    phone: "",
    acceptCall: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!data.address.trim()) newErrors.address = "Veuillez entrer l'adresse";
    if (!data.floor || isNaN(data.floor) || parseInt(data.floor) < 0) newErrors.floor = "Étage invalide";
    if (!data.surface || isNaN(data.surface) || parseInt(data.surface) <= 0) newErrors.surface = "Surface invalide";
    if (!data.name.trim()) newErrors.name = "Nom requis";
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Email invalide";
    if (!data.phone.match(/^\+?\d{8,15}$/)) newErrors.phone = "Téléphone invalide";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (typeof window !== "undefined") {
      localStorage.setItem("showSuccessToast", "true");
    }

    router.push("/");
  };

  return (
    <main className="estimation-page">
      <section className="hero-estimation">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Estimez votre bien immobilier</h1>
          <p>Une estimation fiable, rapide et confidentielle réalisée par nos experts.</p>
        </div>
      </section>

      <section className="form-section">
        <div className="form-card">
          <h2>Informations sur votre bien</h2>

          <div className="input-wrapper">
            <FaMapMarkerAlt className="icon" />
            <input
              placeholder="Adresse complète"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          {errors.address && <p className="error">{errors.address}</p>}

          <div className="input-wrapper">
            <FaBuilding className="icon" />
            <input
              placeholder="Étage (si applicable)"
              value={data.floor}
              onChange={(e) => setData({ ...data, floor: e.target.value })}
            />
          </div>
          {errors.floor && <p className="error">{errors.floor}</p>}

          <div className="input-wrapper">
            <FaRulerCombined className="icon" />
            <input
              placeholder="Surface (m²)"
              value={data.surface}
              onChange={(e) => setData({ ...data, surface: e.target.value })}
            />
          </div>
          {errors.surface && <p className="error">{errors.surface}</p>}

          <select
            value={data.project}
            onChange={(e) => setData({ ...data, project: e.target.value })}
          >
            <option value="">Projet de vente</option>
            <option value="court">Court terme (0-3 mois)</option>
            <option value="moyen">Moyen terme (3-6 mois)</option>
            <option value="long">Long terme (+6 mois)</option>
          </select>

          <h2>Vos coordonnées</h2>

          <div className="input-wrapper">
            <FaUser className="icon" />
            <input
              placeholder="Nom"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="input-wrapper">
            <FaEnvelope className="icon" />
            <input
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="input-wrapper">
            <FaPhone className="icon" />
            <input
              placeholder="Téléphone"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.acceptCall}
              onChange={(e) => setData({ ...data, acceptCall: e.target.checked })}
            />
            J'accepte d'être rappelé par nos experts
          </label>

          <p className="confidentiality">
            🔒 Vos données sont confidentielles et ne seront jamais partagées.
          </p>

          <button className="primary-btn" onClick={handleSubmit}>
            Envoyer ma demande
          </button>
        </div>
      </section>
    </main>
  );
}
