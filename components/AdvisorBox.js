"use client";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";
import { trackClick } from "./Tracker";
import { AGENT_NAME, PHONE, PHONE_DISPLAY, EMAIL, YEARS_EXPERIENCE } from "../lib/site";

// Encart "contact humain" affiché en fin de guide : une vraie personne, joignable directement.
export default function AdvisorBox({
  title = "Parlons de votre projet, simplement",
  text,
  source = "advisor",
}) {
  return (
    <aside className="advisor-box" aria-label={`Contacter ${AGENT_NAME}`}>
      <div className="advisor-photo">
        <Image
          src="/marie_houlier.jpg"
          alt={`${AGENT_NAME}, conseillère immobilière Leggett à Paris et en Île-de-France`}
          width={112}
          height={112}
          quality={80}
        />
      </div>
      <div className="advisor-body">
        <p className="advisor-eyebrow">Votre interlocutrice unique</p>
        <p className="advisor-title">{title}</p>
        <p className="advisor-text">
          {text ||
            `Je m'appelle ${AGENT_NAME}, agente Leggett depuis ${YEARS_EXPERIENCE} ans à Paris et en Île-de-France. Pas de plateforme ni de centre d'appel : c'est moi qui vous réponds, qui étudie votre bien et qui vous accompagne jusqu'à la signature.`}
        </p>
        <ul className="advisor-points">
          <li><CheckCircle2 size={14} /> Rappel personnel sous 24h</li>
          <li><CheckCircle2 size={14} /> Gratuit &amp; sans engagement</li>
          <li><CheckCircle2 size={14} /> Données confidentielles</li>
        </ul>
        <div className="advisor-actions">
          <Link href="/estimation" className="advisor-btn-main" onClick={() => trackClick(`${source}_estimation`)}>
            Demander mon estimation
          </Link>
          <a href={`tel:${PHONE}`} className="advisor-btn" onClick={() => trackClick(`${source}_tel`)}>
            <PhoneCall size={15} /> {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="advisor-btn advisor-btn-light" onClick={() => trackClick(`${source}_mail`)}>
            <Mail size={15} /> Écrire à Marie
          </a>
        </div>
      </div>
    </aside>
  );
}
