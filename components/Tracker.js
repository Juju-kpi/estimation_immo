"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// 🔹 helper timestamp en secondes
const now = () => Math.floor(Date.now() / 1000);

// 🔹 USER ID
function getUserId() {
  let uid = localStorage.getItem("anonUserId");
  if (!uid) {
    uid = `${crypto.randomUUID()}-${now()}`;
    localStorage.setItem("anonUserId", uid);
    localStorage.setItem("userCreatedAt", now());
  }
  return uid;
}

// 🔹 SESSION
function createNewSession() {
  const ts = now();
  return {
    id: crypto.randomUUID(),
    startedAt: ts,
    lastActivity: ts,
    pages: [],
    events: [],
  };
}

// 🔹 SAVE session
function saveSession(session) {
  localStorage.setItem("trackingSession", JSON.stringify(session));
}

// 🔹 CLICK tracking
export function trackClick(name, extra = {}) {
  const session = window.currentTrackingSession;
  if (!session) return;

  session.events.push({
    type: "click",
    name,
    ...extra,
    ts: now(),
  });

  session.lastActivity = now();
  saveSession(session);

  console.log("Click tracked:", name, extra);
}

// 🔹 SEND session
function sendSession(session) {
  const userId = localStorage.getItem("anonUserId");
  if (!userId) return;

  const payload = {
    userId,
    duration: now() - session.startedAt,
    pages: session.pages,
    events: session.events,
    startedAt: session.startedAt,
    endedAt: now(),
  };

  console.log("Sending session:", payload);

  // envoi fiable
  navigator.sendBeacon("/api/track", JSON.stringify(payload));

  // cleanup
  localStorage.removeItem("trackingSession");
  window.currentTrackingSession = null;
}

// 🔹 Tracker Component
export default function Tracker() {
  const pathname = usePathname();
  const sessionRef = useRef(null);

  useEffect(() => {
    getUserId();

    // 🔹 récupérer ou créer session
    let session = JSON.parse(localStorage.getItem("trackingSession"));
    const ts = now();
    if (!session || ts - session.lastActivity > 30 * 60) {
      session = createNewSession();
    }
    session.lastActivity = ts;

    // 🔹 ajouter page courante si non déjà présente
    if (!session.pages.includes(pathname)) {
      session.pages.push(pathname);
    }

    // 🔹 stocker dans ref et global window pour trackClick
    sessionRef.current = session;
    window.currentTrackingSession = session;
    saveSession(session);

    // 🔹 handler envoi session à la fermeture
    const handleUnload = () => {
      if (sessionRef.current) sendSession(sessionRef.current);
    };
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") handleUnload();
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibility);

    // 🔹 optionnel : envoi toutes les 30s pour éviter perte de données
    const interval = setInterval(() => {
      if (sessionRef.current) sendSession(sessionRef.current);
      sessionRef.current = createNewSession(); // recommencer une nouvelle session partielle
      window.currentTrackingSession = sessionRef.current;
      saveSession(sessionRef.current);
    }, 30000); // toutes les 30 secondes

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearInterval(interval);
    };
  }, [pathname]);

  return null;
}
