"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const params = useSearchParams();
  const [success, setSuccess] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const s = params.get("success");
    if (s) setSuccess(s);

    if (s) {
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [params]);

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
      {/* MESSAGE SUCCESS */}
      {success && showMessage && (
        <div
          style={{
            opacity: showMessage ? 1 : 0,
            transition: "opacity 0.5s ease",
            background: "#d4edda",
            color: "#155724",
            padding: 15,
            textAlign: "center",
            fontWeight: 500
          }}
        >
          Votre demande a bien été envoyée !
        </div>
      )}

      {/* --- Hero Section et le reste de ton contenu intact --- */}
    </main>
  );
}
