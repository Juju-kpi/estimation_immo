import { ImageResponse } from "next/og";

export const alt = "SellMyHome — Estimation immobilière gratuite à Paris et en Île-de-France avec Marie Houlier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image de partage générée au build (remplace /og-image.jpg, absent du dossier public)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#203A63",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, opacity: 0.85 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#C98A6B" }} />
          SellMyHome · Agente Leggett
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1 }}>
            Estimation immobilière gratuite
          </div>
          <div style={{ fontSize: 52, color: "#DCEAE2", lineHeight: 1.1 }}>Paris &amp; Île-de-France</div>
          <div style={{ width: 96, height: 5, background: "#C98A6B", borderRadius: 3, marginTop: 8 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, opacity: 0.9 }}>
          <span>Marie Houlier vous rappelle sous 24h</span>
          <span>sellmyhome.fr</span>
        </div>
      </div>
    ),
    size
  );
}
