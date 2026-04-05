"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 🔹 ID utilisateur persistant
function getUserId() {
  let uid = localStorage.getItem("anonUserId");
  if (!uid) {
    uid = crypto.randomUUID();
    localStorage.setItem("anonUserId", uid);
  }
  return uid;
}

// 🔹 Détection nouvelle session (30 min)
function isNewSession() {
  const now = Date.now();
  const last = localStorage.getItem("lastVisit");

  localStorage.setItem("lastVisit", now);

  if (!last) return true;
  return now - last > 30 * 60 * 1000;
}

// 🔹 Fonction globale pour tracker les clics
export function trackClick(name, extra = {}) {
  const userId = localStorage.getItem("anonUserId");
  if (!userId) return;

  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      eventType: "click",
      metadata: { name, ...extra },
      timestamp: Date.now(),
    }),
  });
}

// 🔹 Composant principal
export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    const userId = getUserId();

    // 🔹 SESSION
    const newSession = isNewSession();

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        eventType: "session_start",
        newSession,
        page: pathname,
        timestamp: Date.now(),
      }),
    });

    // 🔹 PAGE VIEW
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        eventType: "page_view",
        page: pathname,
        timestamp: Date.now(),
      }),
    });

    // 🔹 TIME TRACKING (heartbeat)
    let start = Date.now();

    const interval = setInterval(() => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          eventType: "heartbeat",
          page: pathname,
          duration: Date.now() - start,
          timestamp: Date.now(),
        }),
      });

      start = Date.now();
    }, 10000); // toutes les 10s

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}
