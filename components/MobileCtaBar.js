"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, ClipboardList } from "lucide-react";
import { trackClick } from "./Tracker";
import { PHONE } from "../lib/site";

// Barre d'action fixe en bas d'écran sur mobile (masquée sur les pages de formulaire)
const HIDDEN_ON = ["/estimation", "/contact"];

export default function MobileCtaBar() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Contacter Marie">
      <a href={`tel:${PHONE}`} className="mobile-cta-call" onClick={() => trackClick("mobilebar_tel")}>
        <PhoneCall size={17} /> Appeler
      </a>
      <Link href="/estimation" className="mobile-cta-main" onClick={() => trackClick("mobilebar_estimation")}>
        <ClipboardList size={17} /> Estimation gratuite
      </Link>
    </div>
  );
}
