// src/pages/pagehome.tsx
import { Link } from 'react-router-dom';
import Banniere from '../composants/bannière';


function Home() {
  return (
    <div className="bg-gray-100 text-black">
      {/* 1) Bannière */}
      <Banniere />

      {/* 2) Présentation (texte + photo) */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-black text-3xl font-bold mb-6">À propos de moi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Texte */}
          <article className="md:col-span-2 rounded-lg shadow p-6">
            <p className="text-black leading-relaxed">
              Étudiante en BUT Génie Mécanique et Productique à l’IUT d’Orléans, formée aux étapes clés du
              cycle de vie d’un produit — de la conception à l’industrialisation et à l’organisation de la
              production — avec une solide culture de projets et de mise en situation professionnelle. En
              alternance chez STMicroelectronics à Tours, au sein d’un site de référence en conception et
              fabrication de composants électroniques pour la conversion d’énergie et des environnements
              industriels exigeants, cette expérience renforce mes réflexes de rigueur, de qualité et
              d’amélioration continue.
            </p>
            <p className="text-black leading-relaxed mt-4">
              Passionnée d’automobile, de moto, de mécanique et de photo, mon projet est d’évoluer vers des fonctions
              d’ingénieure motoriste ou en architecture véhicule, à l’interface entre conception, simulation,
              essais et optimisation des groupes motopropulseurs, avec une attention portée à la performance
              et à l’impact environnemental. Ces métiers couvrent un périmètre allant de la définition à la mise
              au point et à la fiabilité des moteurs et des systèmes associés, selon les secteurs et
              organisations.
            </p>
          </article>

          {/* Photo */}
          <div className="flex justify-center">
            <img
              src="/images/portrait.jpg"
              alt="Portrait"
              className="w-64 h-64 object-cover rounded-xl shadow"
            />
          </div>
        </div>
      </section>

      {/* 3) Vidéo de présentation */}
      <section className="text-black px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-black text-3xl font-bold mb-6">Vidéo de présentation</h2>
        {/* <VideoBloc
          src="https://youtu.be/8nkKBE67BZs"
          poster="/images/covercideo/jsp.png" //photo couverture video
          controls
          muted
        
          title="Présentation"
        /> */}
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8nkKBE67BZs"
        title="Vidéo de présentation"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </section>

      {/* 4) Liens vers pages projets */}
      <section className="text-black px-6 pb-16 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-bold">Découvrir mes projets</h2>
          <Link
            to="/Projets"
            className="px-4 py-2 bg-black-700 rounded hover:bg-black-800"
          >
            Tous mes projets
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cartes rapides vers catégories */}
          <Link
            to="/Projets/pro"
            className="rounded-lg shadow p-6 hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">Projets professionnels</h3>
            <p className="text-black">
              Activités réalisées en entreprise : Convoyeur de transport, outillage...
            </p>
          </Link>

          <Link
            to="/Projets/scolaire"
            className="rounded-lg shadow p-6 hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">Projets scolaires</h3>
            <p className="text-black">
              Travaux réalisés durant mon BUT : TP, SAés...
            </p>
          </Link>

          <Link
            to="/Projets"
            className="rounded-lg shadow p-6 hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">Voir tout</h3>
            <p className="text-black">
              Parcourir l’ensemble de mes projets.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;