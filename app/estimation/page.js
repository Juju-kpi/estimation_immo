"use client";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";
import { trackClick } from "../components/Tracker";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaRulerCombined,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

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
        setOpen(false);
        setOpenType(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
if (Object.keys(newErrors).length > 0) return; 
await fetch("/api/lead", { method: "POST", body: JSON.stringify(data), });
localStorage.setItem("showSuccessToast", "true"); 
router.push("/"); };

  return (

<>
      <Head>
        <title>Estimation immobilière gratuite en ligne | SellMyHome</title>
        <meta
          name="description"
          content="Réalisez une estimation immobilière gratuite et rapide en ligne avec SellMyHome. Obtenez la valeur réelle de votre appartement, maison ou local commercial. Localisé à Paris."
        />
        <meta name="keywords" content="estimation immobilière, appartement, maison, local commercial, prix immobilier, vente bien, Paris, vente immobilière, SeLoger, se loger, meilleurs agents, cherche à vendre, acheter immobilier, Leggett, Ile-de-France" />
        <meta name="author" content="SellMyHome" />
        <meta property="og:title" content="Estimation immobilière gratuite en ligne | SellMyHome" />
        <meta property="og:description" content="Obtenez votre estimation immobilière rapidement et sans engagement avec SellMyHome. Localisé à Paris" />
        <meta property="og:image" content="https://sellmyhome.fr/logo.png" />
        <meta property="og:url" content="https://sellmyhome.fr/estimation" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    
    <div style={styles.page} className="estimation-page">
      <div ref={wrapperRef} style={styles.container} className="estimation-container">
        <h1 style={styles.title} className="estimation-title">
          Estimation immobilière
        </h1>
        <p style={styles.subtitle} className="estimation-subtitle">
          Toutes vos données sont confidentielles et sécurisées.
        </p>

        {/* Adresse avec autocomplete Nominatim amélioré */}
        <div style={{ marginBottom: 15, position: "relative" }}>
          <div style={styles.fieldContainer}>
            <FaMapMarkerAlt style={styles.icon} />
            <input
              type="text"
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
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          className="estimation-grid"
        >
          {/* COLONNE GAUCHE */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                    fontSize: 13,
                    color: data.type ? "#000" : "#999",
                    minWidth: 0
                  }}
                >
                  {data.type || "Type de bien"}
                </span>
                <div
                  style={{
                    transform: openType ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                    color: "var(--color-primary)",
                    fontSize: 12,
                    flexShrink: 0
                  }}
                >
                  ▼
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
                    fontSize: 13,
                    color: data.project ? "#000" : "#999",
                    minWidth: 0
                  }}
                >
                  {data.project || "Projet de vente"}
                </span>
                <div
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                    color: "var(--color-primary)",
                    fontSize: 12,
                    flexShrink: 0
                  }}
                >
                  ▼
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
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
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
          J’accepte d’être rappelé par Marie ou Victor, sans engagement, afin de discuter de mon estimation.
        </label>

        <button
          style={styles.submitBtn}
          className="estimation-submit"
           onClick={() => {
    trackClick("formulaire_envoyé");
    handleSubmit();
  }}
        >
          Envoyer ma demande
        </button>

<div style={styles.seoContainer} className="seo-container">
  <h2 style={styles.seoTitle}>
    Estimation immobilière gratuite en ligne
  </h2>

  <p style={styles.seoText}>
    Réaliser une estimation immobilière est une étape essentielle avant de vendre un bien. Que vous soyez propriétaire d’un appartement, d’une maison ou d’un local, connaître la valeur réelle de votre bien vous permet de prendre les bonnes décisions et d’optimiser votre vente.
  </p>

  <p style={styles.seoText}>
    Avec SellMyHome, vous bénéficiez d’une estimation immobilière gratuite en ligne, simple, rapide et sans engagement. En quelques minutes, vous obtenez une première estimation basée sur des données concrètes du marché immobilier.
  </p>

  <h3 style={styles.seoSubtitle}>
    Comment estimer son bien immobilier efficacement
  </h3>

  <p style={styles.seoText}>
    Estimer son bien immobilier ne se résume pas à comparer quelques annonces. Une estimation fiable repose sur plusieurs éléments comme la localisation, la surface, les caractéristiques du bien et les tendances du marché immobilier.
  </p>

  <h3 style={styles.seoSubtitle}>
    Pourquoi utiliser une estimation immobilière en ligne
  </h3>

  <p style={styles.seoText}>
    Les outils d’estimation immobilière en ligne permettent d’obtenir rapidement une première indication du prix de votre bien. Ils sont accessibles à tout moment et permettent d’éviter les erreurs de prix.
  </p>

  <h3 style={styles.seoSubtitle}>
    L’importance d’un accompagnement humain
  </h3>

  <p style={styles.seoText}>
    Une estimation automatisée constitue une première étape, mais elle ne suffit pas toujours. SellMyHome vous propose également un accompagnement humain pour affiner votre estimation et vous aider à vendre dans les meilleures conditions.
  </p>

  <h3 style={styles.seoSubtitle}>
    Les erreurs à éviter
  </h3>

  <p style={styles.seoText}>
    Se baser uniquement sur les annonces, surestimer son bien ou ignorer le marché sont des erreurs fréquentes. Une estimation fiable permet d’éviter ces pièges et d’optimiser votre vente.
  </p>

  <p style={styles.seoText}>
    Faites votre estimation dès maintenant et découvrez la valeur réelle de votre bien immobilier.
  </p>
</div>
              </div>

<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment estimer son bien immobilier ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vous pouvez utiliser un outil d’estimation immobilière en ligne comme SellMyHome pour obtenir une estimation rapide et fiable, puis être accompagné par un expert.",
          },
        },
        {
          "@type": "Question",
          name: "L’estimation immobilière est-elle gratuite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l’estimation proposée par SellMyHome est gratuite et sans engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps prend une estimation immobilière ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L’estimation en ligne prend seulement quelques minutes après avoir renseigné les informations de votre bien.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je être accompagné après l’estimation ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, vous pouvez être rappelé par un expert immobilier pour affiner votre estimation et vous accompagner dans la vente.",
          },
        },
      ],
    }),
  }}
/>

<Script
  id="product-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Estimation immobilière SellMyHome",
      description:
        "Outil d’estimation immobilière gratuite en ligne avec accompagnement humain pour vendre votre bien rapidement. Localisé à Paris",
      image: "https://sellmyhome.fr/logo.png",
      url: "https://sellmyhome.fr/estimation",
      category: "Immobilier",
      brand: {
        "@type": "Brand",
        name: "SellMyHome",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    }),
  }}
/>
            
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
          background: #f0f7ff;
          border-left: 3px solid #0070f3;
        }

        .dropdownItem:hover {
          background: #f0f8ff;
          color: #0070f3;
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
            gap: 0 !important;
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
    <div style={{ marginBottom: 15 }}>
      <div style={styles.fieldContainer}>
        <div style={styles.icon}>{icon}</div>
        <input
          type={type}
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
  title: {
    textAlign: "center",
    marginBottom: 5,
    fontSize: 20
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10
  },
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid #ddd",
    borderRadius: 10,
    padding: "8px 10px",
    background: "#fafafa",
    transition: "0.3s",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  },
  input: {
    flex: 1,
    border: "none",
    background: "transparent",
    fontSize: 13,
    outline: "none",
    minWidth: 0
  },
  icon: {
    color: "var(--color-primary)",
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
    marginBottom: 15,
    fontSize: 14,
    color: "#555"
  },
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
    backgroundColor: "#f0f8ff",
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
