"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// 🔹 TIME helper (secondes)
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

// 🔹 SESSION management
function getSession() {
  let session = JSON.parse(localStorage.getItem("trackingSession"));
  const currentTime = now();

  if (!session || currentTime - session.lastActivity > 30 * 60) {
    session = {
      id: crypto.randomUUID(),
      startedAt: currentTime,
      lastActivity: currentTime,
      pages: [],
      events: [],
    };
  }

  session.lastActivity = currentTime;
  localStorage.setItem("trackingSession", JSON.stringify(session));
  return session;
}

// 🔹 SAVE session
function saveSession(session) {
  localStorage.setItem("trackingSession", JSON.stringify(session));
}

// 🔹 CLICK tracking
export function trackClick(name, extra = {}) {
  const session = getSession();

  session.events.push({
    type: "click",
    name,
    ...extra,
    ts: now(),
  });

  saveSession(session);
}

// 🔹 SEND session (via sendBeacon pour fiabilité)
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

  navigator.sendBeacon("/api/track", JSON.stringify(payload));

  localStorage.removeItem("trackingSession");
}

// 🔹 MAIN Tracker component
export default function Tracker() {
  const pathname = usePathname();
  const sessionRef = useRef(null);

  useEffect(() => {
    getUserId();

    let session = getSession();

    if (!session.pages.includes(pathname)) {
      session.pages.push(pathname);
    }

    saveSession(session);
    sessionRef.current = session;

    const handleUnload = () => {
      if (sessionRef.current) sendSession(sessionRef.current);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") handleUnload();
    };

    window.addEventListener("beforeunload", handleUnload);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [pathname]);

  return null;
}
