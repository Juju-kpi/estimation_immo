"use client";

import { useState } from "react";
import Image from "next/image";

const agents = [
  {
    name: "Marie Dupont",
    role: "Spécialiste du marché résidentiel",
    email: "marie.dupont@example.com",
    phone: "+41 79 123 45 67",
    photo: "/Marie.jpeg",
  },
  {
    name: "Victor Martin",
    role: "Expert en estimation et investissement immobilier",
    email: "victor.martin@example.com",
    phone: "+41 78 987 65 43",
    photo: "/Victor.jpeg",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Exemple: POST vers ton API (send email)
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <main>
      <section className="agents">
        <h2>Vos experts immobiliers</h2>
        <div className="agents-grid">
          {agents.map((agent, i) => (
            <div key={i} className="agent-card">
              <div className="agent-image">
                <Image src={agent.photo} alt={agent.name} fill />
              </div>
              <h3>{agent.name}</h3>
              <p>{agent.role}</p>
              <p>
                <a href={`mailto:${agent.email}`} className="contact-link">{agent.email}</a><br />
                <a href={`tel:${agent.phone}`} className="contact-link">{agent.phone}</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Contactez-nous</h2>
        <p>Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
            />
          </div>
          <button type="submit" className="primary-btn">Envoyer</button>
        </form>

        {success && <p className="toast">Votre message a bien été envoyé !</p>}
      </section>
    </main>
  );
}
