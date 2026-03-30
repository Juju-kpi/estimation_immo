"use client";

import Image from "next/image";
import { useState } from "react";

const agents = [
  {
    name: "Marie Dupont",
    role: "Spécialiste du marché résidentiel depuis 10 ans",
    img: "/Marie.jpeg",
    phone: "+41 79 123 45 67",
  },
  {
    name: "Victor Martin",
    role: "Expert en estimation et investissement immobilier",
    img: "/Victor.jpeg",
    phone: "+41 79 987 65 43",
  },
];

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
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Colonne Formulaire + Texte */}
        <div className="contact-form-section">
         <h1>Donnez vie à votre projet immobilier</h1>

<p>
Que vous souhaitiez acheter, investir ou être accompagné dans votre recherche,
nos experts sont à vos côtés pour vous guider avec précision et transparence.
</p>

<p>
Accédez à des opportunités ciblées, des conseils personnalisés et un accompagnement
complet jusqu’à la concrétisation de votre projet.
</p>

<p>
Laissez-nous vos informations — Nous revenons vers vous rapidement.
</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
           <textarea
  name="message"
  placeholder="Décrivez votre projet (type de bien, budget, localisation, délai...)"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            ></textarea>
            <button type="submit" className="primary-btn">Envoyer</button>
            {status === "success" && <p className="success-msg">Message envoyé avec succès !</p>}
            {status === "error" && <p className="error-msg">Erreur, veuillez réessayer.</p>}
          </form>
        </div>

        {/* Colonne Agents */}
        <div className="contact-agents-section">
          {agents.map((agent, idx) => (
            <div key={idx} className="agent-card">
              <div className="agent-image">
                <Image src={agent.img} alt={agent.name} fill />
              </div>
              <h3>{agent.name}</h3>
              <p>{agent.role}</p>
              <p>
                <a href={`tel:${agent.phone}`} className="agent-contact">{agent.phone}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
