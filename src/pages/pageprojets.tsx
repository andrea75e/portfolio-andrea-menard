// src/pages/pageprojets.tsx
import { Link } from 'react-router-dom'

const PageProjetsAccueil = () => {
  return (
    <div className="min-h-screen text-black px-6 py-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center">Mes Projets</h1>
      <p className="max-w-2xl text-black text-center mb-12">
        Découvrez ici mes différents travaux — qu’ils soient réalisés en milieu professionnel
        ou durant ma formation. Choisissez une catégorie pour explorer mes réalisations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        <Link
          to="/Projets/pro"
          className="rounded-xl p-8 text-center transition shadow-lg"
          style={
      {
        backgroundImage: `url("/images/stm/tours.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
        >
          <h2 className="text-2xl font-bold mb-3">Projets en entreprise</h2>
          <p className="text-black">
            <mark className="bg-white text-black"> 
            Projets réalisés lors de mon alternance chez STMicroelectronics Tours
            </mark>
          </p>
        </Link>

        <Link
          to="/Projets/scolaire"
          className="rounded-xl p-8 text-center transition shadow-lg"
          style={
      {
        backgroundImage: `url("/images/but/iut.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
        >
          <h2 className="text-2xl font-bold mb-3">Projets académiques</h2>
          <p className="text-black">
            <mark className="bg-white text-black"> 
            Travaux réalisés pendant ma formation de BUT GMP à l'IUT d'Orléans
            </mark>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default PageProjetsAccueil
