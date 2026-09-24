import GuideSidebar from "../../components/GuideSidebar";

// Mise en page commune des guides et pages locales : contenu + colonne de contact collante.
// Le dossier (guides) est un "route group" : il ne change pas les URLs.
export default function GuidesLayout({ children }) {
  return (
    <div className="guide-shell">
      <div className="guide-main">{children}</div>
      <GuideSidebar />
    </div>
  );
}
