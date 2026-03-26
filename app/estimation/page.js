"use client";
import { useState, useEffect } from "react";
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
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggestions pour l'adresse via Nominatim
  const fetchAddressSuggestions = async (query) => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
    const json = await res.json();
    setSuggestions(json.slice(0,5)); // top 5
  };

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

        {/* Adresse avec autocomplete Nominatim amélioré */}
<div style={{ marginBottom: 20, position: "relative" }}>
  <div style={styles.fieldContainer}>
    <FaMapMarkerAlt style={styles.icon} />
    <input
      type="text"
      placeholder="Adresse du logement"
      value={data.address}
      onChange={e => {
        setData({ ...data, address: e.target.value });
        fetchAddressSuggestions(e.target.value);
      }}
      style={styles.input}
    />
  </div>

  {suggestions.length > 0 && (
    <ul style={styles.suggestions}>
      {suggestions.map(s => (
        <li
          key={s.place_id}
          onClick={() => {
            setData({ ...data, address: s.display_name });
            setSuggestions([]);
          }}
          style={styles.suggestionItem}
        >
          {s.display_name}
        </li>
      ))}
    </ul>
  )}
  {errors.address && <p style={styles.error}>{errors.address}</p>}
</div>

        <Field icon={<FaBuilding />} placeholder="Étage" type="number" value={data.floor} onChange={val => setData({...data, floor: val})} error={errors.floor} />
        <Field icon={<FaRulerCombined />} placeholder="Surface (m²)" type="number" value={data.surface} onChange={val => setData({...data, surface: val})} error={errors.surface} />

        {/* Projet de vente avec flèche et style custom */}
        <div style={{ marginBottom: 20, position: "relative" }}>
          <div style={styles.fieldContainer}>
            <FaCalendarAlt style={styles.icon} />
            <select
              value={data.project}
              onChange={e => setData({ ...data, project: e.target.value })}
              style={{ ...styles.input, cursor: "pointer", appearance: "none", paddingRight: 30 }}
            >
              <option value="">Sélectionnez</option>
              <option value="Court terme">Court terme</option>
              <option value="Moyen terme">Moyen terme</option>
              <option value="Long terme">Long terme</option>
            </select>
            <div style={styles.selectArrow}>▼</div>
          </div>
          {errors.project && <p style={styles.error}>{errors.project}</p>}
        </div>

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

// Champ simple avec icône
function Field({ icon, placeholder, type="text", value, onChange, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={styles.fieldContainer}>
        <div style={styles.icon}>{icon}</div>
        <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} style={styles.input} />
      </div>
      {error && <p style={styles.error}>{error}</p>}
        <style jsx>{`
  @keyframes fadeSlideIn {
    0% { opacity: 0; transform: translateY(-5px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  ul li:hover {
    background-color: #f0f8ff;
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
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    border: "1px solid #ddd",
    borderRadius: 10,
    padding: "12px 15px",
    background: "#fafafa",
    transition: "0.3s",
    position: "relative"
  },
  input: { flex: 1, border: "none", background: "transparent", fontSize: 16, outline: "none" },
  icon: { color: "#0070f3", fontSize: 20 },
  error: { color: "red", fontSize: 12, marginTop: 5, opacity: 0.9, transition: "0.3s" },
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
  },
 suggestions: {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: 10,
  maxHeight: 180,
  overflowY: "auto",
  zIndex: 1000,
  marginTop: 5,
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  animation: "fadeSlideIn 0.2s ease",
},
suggestionItem: {
  padding: "10px 15px",
  cursor: "pointer",
  transition: "0.2s",
  borderBottom: "1px solid #f0f0f0",
},
suggestionItemHover: {
  backgroundColor: "#f0f8ff",
},
  selectArrow: {
    position: "absolute",
    right: 15,
    pointerEvents: "none",
    color: "#0070f3"
  }
};
