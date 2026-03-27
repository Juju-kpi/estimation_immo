"use client";

import Image from "next/image";
import { useState } from "react";

const agents = [
  {
    name: "Marie Dupont",
    role: "Spécialiste du marché résidentiel depuis 10 ans",
    img: "/Marie.jpeg",
    email: "marie@example.com",
    phone: "+41 79 123 45 67",
  },
  {
    name: "Victor Martin",
    role: "Expert en estimation et investissement immobilier",
    img: "/Victor.jpeg",
    email: "victor@example.com",
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
          <h1>Contactez nos experts</h1>
          <p>
            Nous avons plus de 20 ans d’expérience dans l’immobilier résidentiel et
            commercial. Nos experts sont là pour répondre à toutes vos questions.
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
              placeholder="Message"
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
                <a href={`mailto:${agent.email}`} className="agent-contact">{agent.email}</a><br/>
                <a href={`tel:${agent.phone}`} className="agent-contact">{agent.phone}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
