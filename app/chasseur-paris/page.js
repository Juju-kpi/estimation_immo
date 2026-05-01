import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>Chasseur immobilier à Paris : trouvez votre bien idéal</h1>

      <p>
        Vous recherchez un appartement ou une maison à Paris ? 
        Faire appel à un chasseur immobilier vous permet de gagner du temps 
        et d’accéder à des biens exclusifs souvent indisponibles sur le marché public.
      </p>

      <h2>Pourquoi faire appel à un chasseur immobilier à Paris ?</h2>
      <ul>
        <li>Gain de temps dans un marché très concurrentiel</li>
        <li>Accès à des biens off-market</li>
        <li>Analyse précise du marché parisien</li>
        <li>Accompagnement personnalisé et négociation du prix</li>
      </ul>

      <p>
        Avant de vous lancer, vous pouvez également consulter notre{" "}
        <Link href="/prix-m2-paris">
          analyse du prix au m² à Paris
        </Link>{" "}
        ou réaliser une{" "}
        <Link href="/estimation-paris">
          estimation immobilière à Paris
        </Link>{" "}
        pour mieux définir votre budget.
      </p>

      <h2>Contactez votre chasseur immobilier</h2>
      <p>
        Décrivez votre projet dès maintenant et laissez-nous trouver 
        le bien idéal pour vous à Paris.
      </p>

      <p>
        👉 Lancez votre recherche ou faites une{" "}
        <Link href="/estimation">
          estimation gratuite ici
        </Link>
      </p>
    </main>
  );
}
