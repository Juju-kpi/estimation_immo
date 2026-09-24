"use client";
import { useState } from "react";
import { trackClick } from "../../components/Tracker";
import { Phone, Mail } from "lucide-react";
import Reveal from "../../components/Reveal";
import { PHONE, PHONE_DISPLAY, EMAIL } from "../../lib/site";

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        if (window.gtag) window.gtag("event", "generate_lead", { form: "contact" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <Reveal className="contact-text reveal-left">
          <h1>Parlez directement à Marie</h1>
          <p>
            Que vous souhaitiez vendre, acheter ou simplement connaître la valeur de votre bien à Paris
            ou en Île-de-France, Marie est à vos côtés pour vous guider avec précision et transparence.
          </p>
          <p>
            Pas de standard ni de centre d'appel : votre message arrive directement chez elle,
            et c'est elle qui vous répond, sous 24h.
          </p>
          <div className="contact-direct">
            <a href={`tel:${PHONE}`} className="contact-phone-link" onClick={() => trackClick("contact_tel")}><Phone size={16} /> {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="contact-mail-link" onClick={() => trackClick("contact_mail")}><Mail size={16} /> {EMAIL}</a>
          </div>
        </Reveal>

        <Reveal delay={120} className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <label className="contact-label" htmlFor="contact-name">Nom et prénom</label>
            <input
              id="contact-name" type="text" name="name" placeholder="Nom et prénom" autoComplete="name"
              value={formData.name} onChange={handleChange} required
            />
            <label className="contact-label" htmlFor="contact-email">Email</label>
            <input
              id="contact-email" type="email" name="email" placeholder="Email" autoComplete="email"
              value={formData.email} onChange={handleChange} required
            />
            <label className="contact-label" htmlFor="contact-message">Votre projet</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Décrivez votre projet (type de bien, budget, localisation, délai...)"
              value={formData.message} onChange={handleChange} rows={5} required
            />
            <button
              type="submit" className="primary-btn"
              onClick={() => trackClick("message_envoyé")}
            >
              Envoyer mon message à Marie
            </button>
            <p className="contact-reassure">Réponse personnelle sous 24h · Vos données ne sont jamais transmises à des tiers</p>
            {status === "success" && <p className="success-msg">Message envoyé avec succès !</p>}
            {status === "error" && <p className="error-msg">Erreur, veuillez réessayer.</p>}
          </form>
        </Reveal>

        <section className="contact-next-block" aria-label="Ce qui se passe ensuite">
          <h2>Ce qui se passe ensuite</h2>
          <ol>
            <li>Marie lit votre message et vous rappelle (ou vous répond par email) sous 24h.</li>
            <li>Vous faites le point ensemble sur votre projet, vos délais et vos questions.</li>
            <li>Si vous le souhaitez, elle vous propose une estimation gratuite ou une visite. Sans engagement.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}