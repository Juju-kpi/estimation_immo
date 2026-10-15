"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import { trackClick } from "../Tracker";

// Champ « adresse du bien » du hero : ouvre /estimation avec l'adresse pré-remplie
export default function HeroEstimateForm() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const submit = (e) => {
    e.preventDefault();
    trackClick("hero_estimation");
    if (window.gtag) window.gtag("event", "click_estimation", { event_category: "engagement", event_label: "homepage_hero" });
    const a = address.trim();
    router.push(a ? `/estimation?adresse=${encodeURIComponent(a)}` : "/estimation");
  };
  return (
    <form className="hero-estimate" onSubmit={submit} role="search" aria-label="Démarrer une estimation">
      <label className="hero-estimate-field">
        <MapPin size={18} aria-hidden="true" />
        <span className="sr-only">Adresse de votre bien</span>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Adresse du bien à estimer"
          autoComplete="street-address"
        />
      </label>
      <button type="submit">Estimer gratuitement</button>
    </form>
  );
}
