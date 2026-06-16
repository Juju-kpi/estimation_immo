"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const now = () => Math.floor(Date.now() / 1000);

function getUserId() {
  let uid = localStorage.getItem("anonUserId");
  if (!uid) {
    uid = `${crypto.randomUUID()}-${now()}`;
    localStorage.setItem("anonUserId", uid);
  }
  return uid;
}

function createSession() {
  const ts = now();
  return {
    startedAt: ts,
    lastActivity: ts,
    pages: [],
    events: [],
    sent: false, // garde-fou anti-double envoi
  };
}

function sendSession(session) {
  // Empêche tout double envoi (beforeunload + visibilitychange peuvent se déclencher ensemble)
  if (!session || session.sent) return;
  session.sent = true;

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

  // sendBeacon est fire-and-forget, parfait pour beforeunload
  navigator.sendBeacon("/api/track", JSON.stringify(payload));
}

export function trackClick(name, extra = {}) {
  const session = window.__trackingSession;
  if (!session || session.sent) return;
  session.events.push({ type: "click", name, ...extra, ts: now() });
  session.lastActivity = now();
}

export default function Tracker() {
  const pathname = usePathname();
  // sessionRef persiste pour toute la durée de vie du composant (SPA complète)
  const sessionRef = useRef(null);
  const listenersAttached = useRef(false);

  // Init une seule fois au montage
  useEffect(() => {
    getUserId();

    if (!sessionRef.current) {
      sessionRef.current = createSession();
      window.__trackingSession = sessionRef.current;
    }

    // Attacher les listeners une seule fois
    if (!listenersAttached.current) {
      listenersAttached.current = true;

      const handleUnload = () => sendSession(sessionRef.current);

      const handleVisibility = () => {
        if (document.visibilityState === "hidden") {
          sendSession(sessionRef.current);
        }
      };

      window.addEventListener("beforeunload", handleUnload);
      document.addEventListener("visibilitychange", handleVisibility);

      // Envoi de secours après 25 min si l'onglet reste ouvert sans action
      const timeout = setTimeout(() => {
        sendSession(sessionRef.current);
        // Recrée une nouvelle session pour la suite
        sessionRef.current = createSession();
        window.__trackingSession = sessionRef.current;
      }, 25 * 60 * 1000);

      // Cleanup au démontage complet (navigation hors SPA, etc.)
      return () => {
        window.removeEventListener("beforeunload", handleUnload);
        document.removeEventListener("visibilitychange", handleVisibility);
        clearTimeout(timeout);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // [] = une seule fois au montage

  // Suivi des pages vues — déclenché à chaque changement de route
  useEffect(() => {
    const session = sessionRef.current;
    if (!session || session.sent) return;
    if (!pathname) return;

    const lastPage = session.pages[session.pages.length - 1];
    if (pathname !== lastPage) {
      session.pages.push(pathname);
      session.lastActivity = now();
    }
  }, [pathname]);

  return null;
}