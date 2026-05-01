import Link from "next/link";
export default function Page() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>Prix m² à Paris en 2026</h1>

      <p>
        Le prix au m² à Paris évolue constamment selon l’offre et la demande. 
        En moyenne, il se situe entre 9 000€ et 12 000€, avec des variations 
        importantes selon les quartiers.
      </p>

      <h2>Prix selon les arrondissements</h2>
      <p>
        Les quartiers centraux comme le 6e ou le 7e arrondissement affichent 
        les prix les plus élevés, tandis que les zones périphériques restent 
        plus accessibles.
      </p>

      <h2>Comment estimer précisément son bien ?</h2>
      <p>
        Le prix au m² est un indicateur, mais une estimation précise doit 
        prendre en compte :
      </p>

      <ul>
        <li>Surface et agencement</li>
        <li>État général</li>
        <li>Étage et ascenseur</li>
        <li>Exposition et luminosité</li>
      </ul>

      <h2>Obtenez une estimation personnalisée</h2>
      <p>
        Utilisez notre outil d’estimation pour obtenir une valeur adaptée 
        à votre bien en quelques minutes.
      </p>

      <p>
  Pour une estimation plus précise, utilisez notre{" "}
  <Link href="/estimation-paris">
    estimation immobilière à Paris
  </Link>{" "}
  ou faites-vous accompagner par un{" "}
  <Link href="/chasseur-paris">
    chasseur immobilier
  </Link>.
</p>
    </main>
  );
}
