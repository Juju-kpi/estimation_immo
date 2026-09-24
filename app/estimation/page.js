"use client";
import { useState, useEffect, useRef } from "react";
import { trackClick } from "../../components/Tracker";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, PhoneCall, CheckCircle2 } from "lucide-react";
import { PHONE, PHONE_DISPLAY, AGENT_NAME, YEARS_EXPERIENCE } from "../../lib/site";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaRulerCombined,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const FALLBACK_ERROR = `Une erreur est survenue, réessayez ou appelez Marie au ${PHONE_DISPLAY}.`;

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
        setOpen(false);
        setOpenType(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Adresse saisie dans le hero de l'accueil (/estimation?adresse=...)
  useEffect(() => {
    const adresse = new URLSearchParams(window.location.search).get("adresse");
    if (adresse) setData((d) => ({ ...d, address: adresse.slice(0, 300) }));
  }, []);

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
    if (!data.phone || data.phone.length < 8) newErrors.phone = "Téléphone requis";
    if (!data.name) newErrors.name = "Nom requis";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email valide requis";
    }

    setErrors(newErrors);
    setSubmitError("");
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        localStorage.setItem("showSuccessToast", "true");
        router.push("/");
        return; // on garde le bouton désactivé pendant la redirection
      }
      // 4xx : message précis du serveur (validation, limite d'envois) ; 5xx : proposer d'appeler Marie
      setSubmitError(res.status < 500 && json.error ? json.error : FALLBACK_ERROR);
    } catch {
      setSubmitError(FALLBACK_ERROR);
    }
    setSubmitting(false);
  };

  return (

<>
    
    <div style={styles.page} className="estimation-page">
      <div className="estimation-layout">
      <div ref={wrapperRef} style={styles.container} className="estimation-container">
        <p className="estimation-eyebrow">Gratuit · Sans engagement · 3 minutes</p>
        <h1 style={styles.title} className="estimation-title">
          Estimation immobilière gratuite
        </h1>
        <p style={styles.subtitle} className="estimation-subtitle">
          Marie vous rappelle personnellement sous 24h · Paris &amp; Île-de-France · Données confidentielles
        </p>

        {/* Adresse avec autocomplete Nominatim amélioré */}
        <div style={{ marginBottom: 12, position: "relative" }}>
          <div style={styles.fieldContainer}>
            <FaMapMarkerAlt style={styles.icon} />
            <input
              type="text"
              aria-label="Adresse du logement"
              autoComplete="street-address"
              placeholder="Adresse du logement"
              value={data.address}
              onChange={(e) => {
                setData({ ...data, address: e.target.value });
                fetchAddressSuggestions(e.target.value);
              }}
              style={styles.input}
            />
          </div>

          {suggestions.length > 0 && (
            <ul style={styles.suggestions}>
              {suggestions.map((s) => (
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

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          className="estimation-grid"
        >
          {/* COLONNE GAUCHE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* TYPE DE BIEN */}
            <div style={{ position: "relative" }}>
              <div
                style={styles.fieldContainer}
                onClick={() => setOpenType(!openType)}
              >
                <FaBuilding style={styles.icon} />
                <span
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: data.type ? "var(--color-text)" : "#8A949E",
                    minWidth: 0
                  }}
                >
                  {data.type || "Type de bien"}
                </span>
                <div
                  style={{
                    transform: openType ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                    color: "var(--color-secondary)",
                    display: "flex",
                    flexShrink: 0
                  }}
                >
                  <ChevronDown size={16} />
                </div>
              </div>

              {openType && (
                <div style={styles.dropdown}>
                  {["Appartement", "Maison", "Local commercial"].map((option) => (
                    <div
                      key={option}
                      className="dropdownItem"
                      style={{
                        ...styles.dropdownItem,
                        background: data.type === option ? "var(--color-light-blue)" : "transparent",
                        color: data.type === option ? "var(--color-primary)" : "#333"
                      }}
                      onClick={() => {
                        setData({ ...data, type: option });
                        setOpenType(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SURFACE */}
            <Field
              icon={<FaRulerCombined />}
              placeholder="Surface (m²)"
              type="number"
              value={data.surface}
              onChange={(val) => setData({ ...data, surface: val })}
              error={errors.surface}
            />

            {/* PROJET */}
            <div style={{ position: "relative" }}>
              <div
                style={styles.fieldContainer}
                onClick={() => setOpen(!open)}
              >
                <FaCalendarAlt style={styles.icon} />
                <span
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: data.project ? "var(--color-text)" : "#8A949E",
                    minWidth: 0
                  }}
                >
                  {data.project || "Projet de vente"}
                </span>
                <div
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                    color: "var(--color-secondary)",
                    display: "flex",
                    flexShrink: 0
                  }}
                >
                  <ChevronDown size={16} />
                </div>
              </div>

              {open && (
                <div style={styles.dropdown}>
                  {["Court terme", "Moyen terme", "Long terme"].map((option) => (
                    <div
                      key={option}
                      className="dropdownItem"
                      style={{
                        ...styles.dropdownItem,
                        background: data.project === option ? "var(--color-light-blue)" : "transparent",
                        color: data.project === option ? "var(--color-primary)" : "#333"
                      }}
                      onClick={() => {
                        setData({ ...data, project: option });
                        setOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ÉTAGE si appartement */}
            {data.type === "Appartement" && (
              <Field
                icon={<FaBuilding />}
                placeholder="Étage"
                type="number"
                value={data.floor}
                onChange={(val) => setData({ ...data, floor: val })}
                error={errors.floor}
              />
            )}
          </div>

          {/* COLONNE DROITE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Field
              icon={<FaUser />}
              placeholder="Nom et prénom"
              value={data.name}
              onChange={(val) => setData({ ...data, name: val })}
              error={errors.name}
            />
            <Field
              icon={<FaEnvelope />}
              placeholder="Email"
              value={data.email}
              onChange={(val) => setData({ ...data, email: val })}
              error={errors.email}
            />
            <Field
              icon={<FaPhone />}
              placeholder="Téléphone"
              value={data.phone}
              onChange={(val) => setData({ ...data, phone: val })}
              error={errors.phone}
            />
          </div>
        </div>

        <label style={styles.checkboxLabel} className="estimation-checkbox">
          <input
            type="checkbox"
            checked={data.callConsent}
            onChange={(e) => setData({ ...data, callConsent: e.target.checked })}
          />
          J’accepte d’être rappelé par Marie, sans engagement, afin de discuter de mon estimation.
        </label>

        <button
          style={submitting ? { ...styles.submitBtn, ...styles.submitBtnDisabled } : styles.submitBtn}
          className="estimation-submit"
          disabled={submitting}
          aria-busy={submitting}
          onClick={() => {
            if (submitting) return;
            trackClick("formulaire_envoyé");
            handleSubmit();
          }}
        >
          {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>

        {submitError && (
          <p role="alert" style={styles.submitError}>
            {submitError}
          </p>
        )}

<div style={styles.seoContainer} className="seo-container">
  <h2 style={styles.seoTitle}>
    Une estimation gratuite, réalisée par une vraie personne
  </h2>

  <p style={styles.seoText}>
    En envoyant ce formulaire, vous ne recevez pas un chiffre automatique : vous êtes mis en relation avec Marie Houlier, conseillère immobilière affiliée Leggett. Elle étudie les ventes réelles de votre rue et de votre quartier, puis vous rappelle sous 24h pour vous présenter une fourchette argumentée — à Paris comme en Île-de-France.
  </p>

  <h3 style={styles.seoSubtitle}>
    Ce qui se passe après votre demande
  </h3>

  <p style={styles.seoText}>
    1. Marie analyse votre secteur (transactions DVF, état du marché, spécificités de l'immeuble). 2. Elle vous appelle pour échanger de vive voix et répondre à vos questions. 3. Si vous le souhaitez, elle visite votre bien pour affiner l'estimation. 4. Vous décidez librement de la suite : aucune obligation, aucune relance insistante.
  </p>

  <h3 style={styles.seoSubtitle}>
    Pourquoi ne pas se fier uniquement aux simulateurs en ligne
  </h3>

  <p style={styles.seoText}>
    Les outils automatiques raisonnent sur des moyennes de quartier. Ils ignorent la lumière, la vue, le calme, l'état de la copropriété ou le cachet de l'immeuble — autant d'éléments qui font varier le prix de 10 à 20 %. Une estimation humaine évite de surestimer (et de voir son bien stagner) ou de sous-estimer (et de perdre de l'argent).
  </p>

  <h3 style={styles.seoSubtitle}>
    Vos données restent confidentielles
  </h3>

  <p style={styles.seoText}>
    Vos coordonnées ne servent qu'à ce rappel. Elles ne sont ni revendues, ni transmises à d'autres agences. Vous préférez parler tout de suite ? Appelez Marie au 07 52 04 98 78.
  </p>

  <p style={styles.seoText}>
    Pour une première idée des prix : <a href="/prix-m2-paris" style={{ color: "var(--color-secondary)", fontWeight: 600 }}>prix au m² à Paris par arrondissement</a> · <a href="/estimation-ile-de-france" style={{ color: "var(--color-secondary)", fontWeight: 600 }}>prix en Île-de-France</a>.
  </p>
</div>
              </div>

      <aside className="estimation-aside" aria-label="Ce qui se passe ensuite">
        <div className="estimation-aside-agent">
          <Image src="/marie_houlier.jpg" alt={`${AGENT_NAME}, agente Leggett`} width={72} height={72} quality={80} />
          <div>
            <p className="estimation-aside-name">{AGENT_NAME}</p>
            <p className="estimation-aside-role">Agente Leggett · {YEARS_EXPERIENCE} ans d'expérience</p>
          </div>
        </div>
        <p className="estimation-aside-title">Ce qui se passe après votre demande</p>
        <ol className="estimation-steps">
          <li><strong>J'étudie votre secteur</strong> — ventes réelles de votre rue, état du marché, spécificités de l'immeuble.</li>
          <li><strong>Je vous rappelle sous 24h</strong> — une fourchette argumentée, expliquée de vive voix.</li>
          <li><strong>Visite si vous le souhaitez</strong> — pour affiner avec ce que les données ne voient pas.</li>
        </ol>
        <ul className="estimation-aside-points">
          <li><CheckCircle2 size={15} /> Aucune obligation de confier la vente</li>
          <li><CheckCircle2 size={15} /> Vos données ne sont jamais revendues</li>
        </ul>
        <a href={`tel:${PHONE}`} className="estimation-aside-phone" onClick={() => trackClick("estimation_aside_tel")}>
          <PhoneCall size={16} /> Préférez parler tout de suite ? {PHONE_DISPLAY}
        </a>
      </aside>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        ul li:hover {
          background: #EEF3F1;
          border-left: 3px solid #C98A6B;
        }

        .dropdownItem:hover {
          background: #EEF3F1;
          color: #203A63;
        }

        @media (max-width: 768px) {
          .estimation-page {
            padding: 14px 10px !important;
            align-items: flex-start !important;
          }

          .estimation-container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 16px !important;
            border-radius: 14px !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          .estimation-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .estimation-title {
            font-size: 22px !important;
            line-height: 1.25 !important;
            padding: 0 8px !important;
          }

          .estimation-subtitle {
            font-size: 14px !important;
            line-height: 1.5 !important;
            padding: 0 6px !important;
            margin-bottom: 14px !important;
          }

          .estimation-checkbox {
            align-items: flex-start !important;
            font-size: 13px !important;
            line-height: 1.5 !important;
          }

          .estimation-submit {
            width: 100% !important;
            margin-top: 8px !important;
            padding: 14px !important;
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  </>
  );
}

// Champ simple avec icône
function Field({ icon, placeholder, type = "text", value, onChange, error }) {
  return (
    <div style={{ marginBottom: 0 }}>
      <div style={styles.fieldContainer}>
        <div style={styles.icon}>{icon}</div>
        <input
          type={type}
          aria-label={placeholder}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={styles.input}
        />
      </div>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
    background: "transparent",
    padding: "40px 24px 56px"
  },
  container: {
    background: "#fff",
    padding: "32px 32px 28px",
    borderRadius: 16,
    width: "100%",
    border: "1px solid var(--color-line)",
    boxShadow: "0 12px 32px rgba(32,58,99,0.08)",
    animation: "fadeUp 0.6s ease"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 15
  },
  title: {
    marginBottom: 6,
    fontSize: 30,
    color: "var(--color-secondary)",
    lineHeight: 1.2
  },
  subtitle: {
    color: "var(--color-text-soft)",
    fontSize: 14.5,
    marginBottom: 22
  },
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid var(--color-line)",
    borderRadius: 10,
    padding: "0 14px",
    minHeight: 50,
    background: "#fff",
    cursor: "text",
    transition: "0.3s",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  },
  input: {
    flex: 1,
    border: "none",
    background: "transparent",
    fontSize: 15,
    color: "var(--color-text)",
    outline: "none",
    minWidth: 0,
    padding: "14px 0"
  },
  icon: {
    color: "var(--color-primary-dark)",
    fontSize: 16,
    flexShrink: 0
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    opacity: 0.9,
    transition: "0.3s"
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "6px 0 18px",
    fontSize: 14,
    color: "var(--color-text-soft)"
  },
  submitBtn: {
    width: "100%",
    display: "block",
    padding: 16,
    fontSize: 16,
    fontWeight: 600,
    background: "var(--color-secondary)",
    color: "white",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 8px 20px rgba(32,58,99,0.18)"
  },
  submitBtnDisabled: {
    opacity: 0.65,
    cursor: "wait"
  },
  submitError: {
    color: "#B5503F",
    background: "#FBEFEC",
    border: "1px solid rgba(181,80,63,0.25)",
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 14,
    textAlign: "center",
    maxWidth: 520,
    margin: "12px auto 0"
  },
  submitBtnHover: {
    transform: "translateY(-2px)"
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
  suggestionItemHover: {
    backgroundColor: "#EEF3F1",
  },
  selectArrow: {
    position: "absolute",
    right: 15,
    pointerEvents: "none",
    color: "var(--color-primary)"
  },
  dropdown: {
    position: "absolute",
    top: "105%",
    left: 0,
    right: 0,
    background: "#fff",
    borderRadius: 12,
    border: "1px solid var(--color-primary)",
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
    color: "var(--color-primary)",
    fontWeight: "bold",
    fontSize: 13
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
  },
  seoContainer: {
  marginTop: 35,
  padding: 10,
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(32, 58, 99, 0.08)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(230, 238, 250, 0.8)",
},

seoTitle: {
  fontSize: 18,
  marginBottom: 5,
  color: "#1a2b49",
  textAlign: "center",
},

seoSubtitle: {
  fontSize: 15,
  marginTop: 10,
  marginBottom: 5,
  color: "var(--color-primary)",
},

seoText: {
  fontSize: 14,
  color: "#555",
  lineHeight: 1.6,
  marginBottom: 5,
},
};
