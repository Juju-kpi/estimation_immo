"use client";
import { useEffect, useState } from "react";

// Confirmation affichée sur l'accueil après l'envoi du formulaire d'estimation
export default function HomeToast() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("showSuccessToast")) return;
    localStorage.removeItem("showSuccessToast");
    setShow(true);
    const t = setTimeout(() => setShow(false), 10000);
    return () => clearTimeout(t);
  }, []);
  return show ? <div className="toast" role="status">✓ Votre demande a bien été envoyée — Marie vous contacte sous 24h !</div> : null;
}
