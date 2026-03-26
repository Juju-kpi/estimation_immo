"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaCalendarAlt, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

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
    callConsent: false
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const newErrors = {};
    if (!data.address) newErrors.address = "Adresse requise";
    if (!data.floor || isNaN(data.floor)) newErrors.floor = "Étage valide requis";
    if (!data.surface || isNaN(data.surface)) newErrors.surface = "Surface valide requise";
    if (!data.project) newErrors.project = "Choisir un projet";
    if (!data.name) newErrors.name = "Nom requis";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Email valide requis";
    if (!data.phone || !/^\+?[0-9\s]{7,15}$/.test(data.phone)) newErrors.phone = "Téléphone valide requis";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

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
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Estimation immobilière</h1>
        <p style={styles.subtitle}>Toutes vos données sont confidentielles et sécurisées.</p>

        <Field icon={<FaMapMarkerAlt />} placeholder="Adresse du logement" value={data.address} onChange={val => setData({...data, address: val})} error={errors.address} />
        <Field icon={<FaBuilding />} placeholder="Étage" type="number" value={data.floor} onChange={val => setData({...data, floor: val})} error={errors.floor} />
        <Field icon={<FaRulerCombined />} placeholder="Surface (m²)" type="number" value={data.surface} onChange={val => setData({...data, surface: val})} error={errors.surface} />
        <Field icon={<FaCalendarAlt />} placeholder="Projet de vente" type="select" options={["Court terme", "Moyen terme", "Long terme"]} value={data.project} onChange={val => setData({...data, project: val})} error={errors.project} />
        <Field icon={<FaUser />} placeholder="Nom et prénom" value={data.name} onChange={val => setData({...data, name: val})} error={errors.name} />
        <Field icon={<FaEnvelope />} placeholder="Email" value={data.email} onChange={val => setData({...data, email: val})} error={errors.email} />
        <Field icon={<FaPhone />} placeholder="Téléphone" value={data.phone} onChange={val => setData({...data, phone: val})} error={errors.phone} />

        <label style={styles.checkboxLabel}>
          <input type="checkbox" checked={data.callConsent} onChange={e => setData({...data, callConsent: e.target.checked})} />
          J’accepte d’être rappelé par nos experts.
        </label>

        <button style={styles.submitBtn} onClick={handleSubmit}>
          Envoyer ma demande
        </button>
      </div>
    </div>
  );
}

// Champ avec icône et animation focus
function Field({ icon, placeholder, type="text", options=[], value, onChange, error }) {
  return (
    <div style={{ marginBottom: 20, position: "relative" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: "12px 15px",
        background: "#fafafa",
        transition: "0.3s",
        outline: "none"
      }} className="field-container">
        <div style={{ color: "#0070f3", fontSize: 20 }}>{icon}</div>
        {type === "select" ? (
          <select value={value} onChange={e => onChange(e.target.value)} style={styles.input}>
            <option value="">Sélectionnez</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        ) : (
          <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} style={styles.input} />
        )}
      </div>
      {error && <p style={{ color: "red", fontSize: 12, marginTop: 5, opacity: 0.9, transition: "0.3s" }}>{error}</p>}
      <style jsx>{`
        .field-container:focus-within {
          border-color: #0070f3;
          box-shadow: 0 0 8px rgba(0,112,243,0.2);
          background: #fff;
        }
      `}</style>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
    padding: 20
  },
  container: {
    background: "#fff",
    padding: 40,
    borderRadius: 16,
    width: "100%",
    maxWidth: 600,
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
    animation: "fadeUp 0.8s ease"
  },
  title: { textAlign: "center", marginBottom: 10, fontSize: 32 },
  subtitle: { textAlign: "center", color: "#666", marginBottom: 30 },
  input: { flex: 1, border: "none", background: "transparent", fontSize: 16, outline: "none" },
  checkboxLabel: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20, fontSize: 14, color: "#555" },
  submitBtn: {
    width: "100%",
    padding: 16,
    fontSize: 18,
    background: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    transition: "0.3s",
  }
};
