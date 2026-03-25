"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeContent() {
  const params = useSearchParams();
  const success = params.get("success");

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <main>
      {success && showMessage && (
        <div style={{
          background: "#d4edda",
          padding: 15,
          textAlign: "center"
        }}>
          Votre demande a bien été envoyée !
        </div>
      )}

      {/* TON CONTENU EXISTANT */}
    </main>
  );
}
