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

// 🔹 TRACKER COMPONENT
export default function Tracker() {
  const pathname = usePathname();
  const sessionRef = useRef(null);
  const lastPathRef = useRef(null);

  useEffect(() => {
    getUserId();

    // 🔹 Créer la session si elle n'existe pas
    if (!sessionRef.current) {
      sessionRef.current = createSession();
      window.currentTrackingSession = sessionRef.current;
    }
    const session = sessionRef.current;

    // 🔹 Ajouter la page vue uniquement si différente de la dernière
    if (pathname && pathname !== lastPathRef.current) {
      session.pages.push(pathname);
      lastPathRef.current = pathname;
      session.lastActivity = now();
      console.log("Page viewed:", pathname);
    }

    // 🔹 Envoi de la session à la fermeture de l'onglet ou invisibilité
    const handleUnload = () => sendSession(session);
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") handleUnload();
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibility);

    // 🔹 Envoi automatique après 20 minutes max
    const timeout = setTimeout(() => sendSession(session), 20 * 60 * 1000);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
