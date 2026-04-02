"use client";

import { useState } from "react";

export const metadata = {
  title: "Nous contacter | Sell my home",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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
      Que vous souhaitiez acheter, investir ou être accompagné dans votre recherche,
      nous sommes à vos côtés pour vous guider avec précision et transparence.
    </p>

    <p>
      Accédez à des opportunités ciblées, des conseils personnalisés et un accompagnement
      complet jusqu’à la concrétisation de votre projet.
    </p>

    <p>
      Laissez-nous vos informations, nous revenons vers vous rapidement.
    </p>
  </div>

  <div className="contact-form-section">
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

      <textarea
        name="message"
        placeholder="Décrivez votre projet (type de bien, budget, localisation, délai...)"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
      />

      <button type="submit" className="primary-btn">Envoyer</button>

      {status === "success" && <p className="success-msg">Message envoyé avec succès !</p>}
      {status === "error" && <p className="error-msg">Erreur, veuillez réessayer.</p>}
    </form>
  </div>

</div>
    </main>
  );
}
