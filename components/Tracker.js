"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// 🔹 Timestamp en secondes
const now = () => Math.floor(Date.now() / 1000);

// 🔹 USER ID
function getUserId() {
  let uid = localStorage.getItem("anonUserId");
  if (!uid) {
    uid = `${crypto.randomUUID()}-${now()}`;
    localStorage.setItem("anonUserId", uid);
  }
  return uid;
}

// 🔹 SESSION
function createSession() {
  const ts = now();
  return {
    id: crypto.randomUUID(),
    startedAt: ts,
    lastActivity: ts,
    pages: [],
    events: [],
  };
}

// 🔹 ENVOI SESSION
function sendSession(session) {
  const userId = localStorage.getItem("anonUserId");
  if (!userId || !session) return;

  const payload = {
    userId,
    duration: now() - session.startedAt,
    pages: session.pages,
    events: session.events,
    startedAt: session.startedAt,
    endedAt: now(),
  };

  navigator.sendBeacon("/api/track", JSON.stringify(payload));
  console.log("Session sent:", payload);
}

// 🔹 TRACK CLICK
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
  console.log("Click tracked:", name, extra);
}

export default function Tracker() {
  const pathname = usePathname();
  const sessionRef = useRef(createSession());

  useEffect(() => {
    getUserId();

    // 🔹 Stocker session globale
    window.currentTrackingSession = sessionRef.current;

    // 🔹 Ajouter la page courante
    if (!sessionRef.current.pages.includes(pathname)) {
      sessionRef.current.pages.push(pathname);
    }
    sessionRef.current.lastActivity = now();

    // 🔹 Envoi quand l’onglet est fermé ou masqué
    const handleUnload = () => sendSession(sessionRef.current);
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") handleUnload();
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibility);

    // 🔹 Envoi automatique après 20 min
    const timeout = setTimeout(() => {
      sendSession(sessionRef.current);
    }, 20 * 60 * 1000);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
