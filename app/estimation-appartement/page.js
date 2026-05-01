import Link from "next/link";

export const metadata = {
  title: "Estimation immobilière gratuite | SellMyHome",
  alternates: {
    canonical: "/estimation-appartement",
  },
};
export default function Page() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>Estimation appartement gratuite</h1>

      <p>
        Vous souhaitez vendre votre appartement ? Une estimation précise est 
        essentielle pour vendre rapidement et au meilleur prix.
      </p>

      <h2>Comment estimer un appartement ?</h2>
      <p>
        L’estimation repose sur plusieurs critères :
      </p>

      <ul>
        <li>Localisation</li>
        <li>Surface</li>
        <li>État du bien</li>
        <li>Marché immobilier local</li>
      </ul>

      <h2>Pourquoi utiliser une estimation en ligne ?</h2>
      <p>
        Une estimation en ligne permet d’obtenir une première valeur 
        rapidement avant un accompagnement par un expert.
      </p>

      <h2>Service gratuit et sans engagement</h2>
      <p>
        SellMyHome vous propose une estimation gratuite avec un suivi 
        personnalisé pour maximiser la valeur de votre bien.
      </p>

      <p>
  Si votre bien est situé dans la capitale, consultez notre{" "}
  <Link href="/estimation-paris">
    estimation immobilière à Paris
  </Link>{" "}
  ou notre analyse du{" "}
  <Link href="/prix-m2-paris">
    prix au m²
  </Link>.
</p>
    </main>
  );
}
