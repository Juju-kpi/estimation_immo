"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaBuilding, FaRulerCombined, FaCalendarAlt, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Estimation() {
  const router = useRouter();
  const wrapperRef = useRef(null);
  const [data, setData] = useState({
    address: "",
    floor: "",
    type: "",
    surface: "",
    project: "",
    name: "",
    email: "",
    phone: "",
    callConsent: false
  });
  const [errors, setErrors] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);
  
useEffect(() => {
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSuggestions([]);
      setOpen(false);       // ferme dropdown "Projet"
      setOpenType(false);   // ferme dropdown "Type de bien"
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);
  // Fetch suggestions pour l'adresse via Nominatim
const debounceRef = useRef(null);

const fetchAddressSuggestions = (query) => {
  clearTimeout(debounceRef.current);

  debounceRef.current = setTimeout(async () => {
    if (!query || query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(`/api/adress?q=${encodeURIComponent(query)}`);
      const json = await res.json();
      setSuggestions(json.slice(0, 3));
    } catch {
      setSuggestions([]);
    }
  }, 300);
};
  const handleSubmit = async () => {
  const newErrors = {};

  if (!data.address) newErrors.address = "Adresse requise";
  if (!data.phone || data.phone.length < 8)
  newErrors.phone = "Téléphone requis";
  if (!data.name) newErrors.name = "Nom requis";
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
    newErrors.email = "Email valide requis";

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  await fetch("/api/lead", {
    method: "POST",
    body: JSON.stringify(data),
  });

  localStorage.setItem("showSuccessToast", "true");
  router.push("/");
};

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Estimation immobilière</h1>
        <p style={styles.subtitle}>Toutes vos données sont confidentielles et sécurisées.</p>

        {/* Adresse avec autocomplete Nominatim amélioré */}
<div  ref={wrapperRef} style={{ marginBottom: 15, position: "relative" }}>
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

{/* TYPE DE BIEN (dropdown clean) */}
<div style={{ marginBottom: 15, position: "relative" }}>
  <div
    style={styles.fieldContainer}
    onClick={() => setOpenType(!openType)}
  >
    <FaBuilding style={styles.icon} />

    <span style={{
      flex: 1,
      fontSize: 13,
      color: data.type ? "#000" : "#999"
    }}>
      {data.type || "Type de bien"}
    </span>

    <div style={{
      transform: openType ? "rotate(180deg)" : "rotate(0deg)",
      transition: "0.3s",
      color: "var(--color-primary)",
      fontSize: 12
    }}>
      ▼
    </div>
  </div>

  {openType && (
    <div style={styles.dropdown}>
      {["Appartement", "Maison", "Local commercial"].map(option => (
        <div
          key={option}
          style={{
            ...styles.dropdownItem,
            background: data.type === option ? "var(--color-light-blue)" : "transparent",
            color: data.type === option ? "var(--color-primary)" : "#333",
            fontWeight: data.type === option ? "500" : "400"
          }}
          onClick={() => {
            setData({ ...data, type: option });
            setOpenType(false);
          }}
        >
          <span>{option}</span>

          {data.type === option && (
            <span style={styles.check}>✓</span>
          )}
        </div>
      ))}
    </div>
  )}
</div>

        {data.type === "appartement" && (
  <Field
    icon={<FaBuilding />}
    placeholder="Étage"
    type="number"
    value={data.floor}
    onChange={val => setData({...data, floor: val})}
    error={errors.floor}
  />
)}
      <div style={styles.grid}>
      
        <Field icon={<FaRulerCombined />} placeholder="Surface (m²)" type="number" value={data.surface} onChange={val => setData({...data, surface: val})} error={errors.surface} />

    {/* Projet de vente avec flèche et style custom */}
<div style={{ marginBottom: 15, position: "relative" }}>
  <div
    style={styles.fieldContainer}
    onClick={() => setOpen(!open)}
  >
    <FaCalendarAlt style={styles.icon} />

    <span style={{
      flex: 1,
      fontSize: 13,
      color: data.project ? "#000" : "#999"
    }}>
      {data.project || "Sélectionnez"}
    </span>

    <div style={{
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      transition: "0.3s",
      color: "#0070f3",
      fontSize: 12
    }}>
      ▼
    </div>
  </div>

  {/* MENU */}
  {open && (
    <div style={styles.dropdown}>
      {["Court terme", "Moyen terme", "Long terme"].map(option => (
        <div
          key={option}
          style={{
            ...styles.dropdownItem,
            background: data.project === option ? "#f0f8ff" : "transparent",
            color: data.project === option ? "#0070f3" : "#333",
            fontWeight: data.project === option ? "500" : "400"
          }}
          onClick={() => {
            setData({ ...data, project: option });
            setOpen(false);
          }}
        >
          <span>{option}</span>

          {data.project === option && (
            <span style={styles.check}>✓</span>
          )}
        </div>
      ))}
    </div>
  )}

  {errors.project && <p style={styles.error}>{errors.project}</p>}
</div>

        <Field icon={<FaUser />} placeholder="Nom et prénom" value={data.name} onChange={val => setData({...data, name: val})} error={errors.name} />
        <Field icon={<FaEnvelope />} placeholder="Email" value={data.email} onChange={val => setData({...data, email: val})} error={errors.email} />
        <Field icon={<FaPhone />} placeholder="Téléphone" value={data.phone} onChange={val => setData({...data, phone: val})} error={errors.phone} />

    </div>
    
        <label style={styles.checkboxLabel}>
          <input type="checkbox" checked={data.callConsent} onChange={e => setData({...data, callConsent: e.target.checked})} />
          J’accepte d’être rappelé par Marie ou Victor, sans engagement, afin de discuter de mon estimation.
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
    <div style={{ marginBottom: 15 }}>
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
  background: #f0f7ff;
  border-left: 3px solid #0070f3;
}
`}</style>
        <style jsx>{`
  .dropdownItem:hover {
    background: #f0f8ff;
    color: #0070f3;
  }
`}</style>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent",
    padding: 10
  },
  container: {
    background: "#fff",
    padding: 15,
    borderRadius: 16,
    width: "100%",
    maxWidth: 800,
    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
    animation: "fadeUp 0.8s ease"
  },
  grid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 15
},
  title: { textAlign: "center", marginBottom: 5, fontSize: 20 },
  subtitle: { textAlign: "center", color: "#666", marginBottom: 10 },
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid #ddd",
    borderRadius: 10,
    padding: "8px 10px",
    background: "#fafafa",
    transition: "0.3s",
    position: "relative"
  },
  input: { flex: 1, border: "none", background: "transparent", fontSize: 13, outline: "none" },
  icon: { 
  color: "var(--color-primary)", 
  fontSize: 16 
},
  error: { color: "red", fontSize: 12, marginTop: 5, opacity: 0.9, transition: "0.3s" },
  checkboxLabel: { display: "flex", alignItems: "center", gap: 10, marginBottom: 15, fontSize: 14, color: "#555" },
 submitBtn: {
  width: "50%",
  margin: "0 auto", 
  display: "block",
  padding: 13,
  fontSize: 15,
  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: "var(--shadow-soft)"
},
  submitBtnHover: {
  transform: "translateY(-2px)"
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
  },
  dropdown: {
  position: "absolute",
  top: "105%",
  left: 0,
  right: 0,
  background: "#fff",
  borderRadius: 12,
  border: "1px solid #0070f3",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  overflow: "hidden",
  zIndex: 1000,
},

dropdownItem: {
  padding: "12px 16px",
  fontSize: 14, 
  cursor: "pointer",
  borderBottom: "1px solid #f0f0f0",
  transition: "0.2s",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
},

check: {
  color: "#0070f3",
  fontWeight: "bold",
  fontSize: 13
},
  suggestions: {
  position: "absolute",
  top: "110%",
  left: 0,
  right: 0,
  background: "#fff",
  borderRadius: 12,
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  overflow: "hidden",
  zIndex: 1000,
  animation: "fadeSlideIn 0.2s ease",
},
  suggestionItem: {
  padding: "14px 16px",
  cursor: "pointer",
  borderBottom: "1px solid #f5f5f5",
  transition: "all 0.2s ease",
},
  typeContainer: {
  display: "flex",
  gap: 10,
  justifyContent: "space-between"
},

typeCard: {
  flex: 1,
  padding: 10,
  borderRadius: 12,
  textAlign: "center",
  cursor: "pointer",
  transition: "0.2s",
}
};
