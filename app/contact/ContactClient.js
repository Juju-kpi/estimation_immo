"use client";
import { useState } from "react";
import { trackClick } from "../../components/Tracker";

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
        <div className="contact-text">
          <h1>Donnez vie à votre projet immobilier</h1>
          <p>
            Que vous souhaitiez acheter, vendre ou investir à Paris,
            Marie est à vos côtés pour vous guider avec précision et transparence.
          </p>
          <p>
            Accédez à des conseils personnalisés et un accompagnement complet
            jusqu'à la concrétisation de votre projet.
          </p>
          <p>Laissez-nous vos informations, nous revenons vers vous sous 24h.</p>
          <div className="contact-direct">
            <a href="tel:+33752049878" className="contact-phone-link">📞 07 52 04 98 78</a>
            <a href="mailto:contact@sellmyhome.fr" className="contact-mail-link">✉️ contact@sellmyhome.fr</a>
          </div>
        </div>

        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text" name="name" placeholder="Nom et prénom"
              value={formData.name} onChange={handleChange} required
            />
            <input
              type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange} required
            />
            <textarea
              name="message"
              placeholder="Décrivez votre projet (type de bien, budget, localisation, délai...)"
              value={formData.message} onChange={handleChange} rows={5} required
            />
            <button
              type="submit" className="primary-btn"
              onClick={() => trackClick("message_envoyé")}
            >
              Envoyer
            </button>
            {status === "success" && <p className="success-msg">Message envoyé avec succès !</p>}
            {status === "error" && <p className="error-msg">Erreur, veuillez réessayer.</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
