// src/pages/pageformation.tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import TextBloc from '../composants/textbloc'
import ImageBloc from '../composants/imagebloc'

// ✅ Interface mise à jour avec le champ list
interface FormationContent {
  sections: {
    title?: string
    text?: string
    text1?: string
    text2?: string
    text3?: string
    list?: string[]
    images?: string[]
  }[]
}

const formationsData: Record<string, FormationContent> = {
  but: {
    sections: [
      {
        title: 'BUT Génie Mécanique et Productique',
        text: "De 2023 à 2026, j'ai préparé un BUT GMP (Génie Mécanique et Productique) à l'IUT d'Orléans, parcours Innovation pour l'Industrie. Cette formation m'a apporté une base solide en conception mécanique, fabrication, et gestion de projets industriels. Le BUT Génie Mécanique et Productique (GMP) de l'IUT d'Orléans est un diplôme national de niveau Bac+3, reconnu et apprécié par l'industrie, qui forme des techniciens supérieurs polyvalents, capables d'intervenir tout au long du cycle de vie d'un produit industriel : de la conception à l'organisation industrielle, en passant par la fabrication et l'industrialisation.",
        images: ['/images/but/iut.jpg']
      },
      {
        title: 'Compétences acquises',
        list: [
          "Conception & Fabrication Assistée par Ordinateur (CFAO) : Creo Parametric, TopSolid",
          "Méthodes et amélioration continue des procédés industriels",
          "Gestion de projets professionnels dans un contexte de responsabilité",
          "Usinage et procédés de fabrication (tournage, fraisage, soudure, impression 3D...)",
          "Industrialisation : choix et mise en œuvre des procédés de fabrication et d'assemblage",
          "Analyse et dimensionnement mécanique pour pièces et systèmes",
          "Gestion du cycle de vie du produit"
        ]
      },
      {
        text: "J'y ai également développé mon autonomie, ma rigueur, et ma capacité à mener un projet complet de la conception à la fabrication. Durant cette formation, j'ai pu réaliser de nombreux travaux, dont je vous parle un peu plus en détails dans ma rubrique projets.",
        images: ['/images/but/atelier.png']
      }
    ]
  },

  stmicro: {
    sections: [
      {
        title: 'Alternance chez STMicroelectronics Tours',
        text: "Depuis 2023, je travaille en alternance chez STMicroelectronics à Tours, en tant que technicienne en conception et prototypage industriel à l'atelier mécanique. Cette expérience me permet d'appliquer mes connaissances techniques dans un environnement de production réel.",
        images: ['/images/stm/tours.jpg']
      },
      {
        text:"STMicroelectronics (ST) est une multinationale franco-italienne de droit néerlandais, fondée en 1987, qui figure parmi les leaders mondiaux de l'industrie des semi-conducteurs. Elle conçoit, fabrique et commercialise des puces électroniques, des microcontrôleurs et des solutions intelligentes pour l'automobile, l'industrie, l'électronique grand public et les objets connectés. Le site de Tours sur lequel je travaille existe depuis 1973 et emploie environ 1 400 collaborateurs, dont plus de 350 en recherche et développement. Il est reconnu mondialement sur les segments de la conversion d'énergie, la protection contre les surtensions ou les décharges électrostatiques, ainsi que le filtrage des communications radiofréquence. Les produits fabriqués à Tours sont présents dans de nombreux secteurs : automobile, électronique grand public, équipements industriels, télécommunications et électroménager."
      },
      {
        text: 'Chez ST, j’évolue au sein de l’atelier mécanique, où je participe à la réalisation de pièces, de maquettes et de prototypes nécessaires aux différents projets de développement. Mon activité s’inscrit sous la direction d’un ingénieur mécanique, avec qui je collabore pour concevoir, fabriquer et valider des solutions techniques adaptées aux besoins de production et de recherche.'
      },
      {
        title: 'Missions principales',
        list: [
          "Conception Assistée par Ordinateur (CAO) sur SolidWorks : réalisation de pièces et systèmes mécaniques en 3D, plans, études de systèmes",
          "Création, amélioration, réparation de systèmes et pièces mécaniques",
          "Usinage : Fraiseuse CNC, fraiseuse traditionnelle, tour traditionnel & montage, assemblage",
          "Soudure inox et plastique",
          "Métrologie",
          "Maintenance et réparation de machines",
        ]
      },
      {
        text: "Cette alternance m'offre une vision concrète du travail en équipe, de la gestion des délais et des contraintes industrielles.",
        images: ['/images/stm/salle.jpg']
      }
    ]
  },

  bac: {
    sections: [
      {
        title: 'Baccalauréat Général',
        text: "En 2022, j'ai obtenu mon Baccalauréat Général avec mention, spécialités Mathématiques et Sciences de l'Ingénieur (SI), option Mathématiques Expertes. Ce parcours m'a permis d'acquérir des bases solides en raisonnement scientifique et en méthodologie de projet.",
        images: ['/images/prepa/lycee.jpg']
      },
      {
        title: 'Spécialités suivies',
        list: [
          "Mathématiques : algèbre, analyse, géométrie, probabilités et statistiques",
          "Sciences de l'Ingénieur : mécanique, électronique, automatisme, conception de systèmes",
          "Physique-Chimie (en première) : mécanique, électricité, optique, chimie"
        ]
      },
      {
        title: 'Compétences développées',
        text: "Au cours de cette formation, j'ai développé des capacités de raisonnement logique, de résolution de problèmes complexes et de travail en équipe sur des projets techniques. J'ai également appris à utiliser des outils de modélisation et de simulation, ce qui m'a préparée aux études supérieures en ingénierie."
      },
      {
        text: "Ce parcours a été une étape fondamentale qui m'a permis de confirmer mon intérêt pour les sciences de l'ingénieur et de me diriger vers tout d'abord la classe préparatoire."
      }
    ]
  },

  prepa: {
    sections: [
      {
        title: 'Classe Préparatoire PTSI',
        text: "Après mon bac en 2022, j'ai intégré une classe préparatoire aux grandes écoles (CPGE) en filière PTSI (Physique, Technologie et Sciences de l'Ingénieur) au lycée Jacques de Vaucanson à Tours. Cette formation intensive et exigeante m'a permis d'approfondir mes connaissances scientifiques et de développer ma capacité de travail.",
        text1: "La prépa PTSI est une formation pluridisciplinaire qui combine mathématiques, physique-chimie, sciences de l'ingénieur et informatique. Elle prépare aux concours d'entrée des grandes écoles d'ingénieurs et développe des méthodes de travail rigoureuses.",
        images: ['/images/prepa/prepa.jpg']
      },
      {
        title: 'Programme et disciplines',
        list: [
          "Mathématiques : algèbre linéaire, analyse, équations différentielles",
          "Physique : mécanique, thermodynamique, électromagnétisme, optique",
          "Sciences de l'Ingénieur : étude de systèmes complexes, modélisation, automatisme",
          "Chimie : thermochimie, cinétique chimique, solutions aqueuses",
          "Informatique : algorithmique, programmation en Python",
          "Travaux Pratiques : manipulation en laboratoire, projets techniques"
        ]
      },
      {
        title: 'Compétences acquises',
        text: "Cette année de prépa m'a apporté une rigueur scientifique, une capacité d'abstraction et une méthode de travail efficace. J'ai appris à analyser des problèmes complexes, à synthétiser des informations et à travailler sous pression avec des échéances serrées."
      },
      {
        text: "Bien que j'aie choisi de me réorienter vers le BUT GMP pour privilégier une approche plus concrète et professionnalisante, cette expérience reste très formatrice et m'a donné des bases scientifiques solides qui me servent quotidiennement."
      }
    ]
  }
}

const FormationPage: React.FC = () => {
  const { formationId } = useParams<{ formationId: string }>()

  console.log('📍 formationId reçu:', formationId)

  const formation = formationId ? formationsData[formationId] : null

  if (!formation) {
    return (
      <div className="text-black min-h-screen px-6 py-12">
        <div className="text-black max-w-4xl mx-auto text-center">
          <h1 className="text-black text-4xl font-bold mb-6">Formation non trouvée</h1>
          <p className="text-black mb-4">
            La formation "<span className="text-black-400">{formationId}</span>" n'existe pas.
          </p>
          <p className="text-black mb-8">
            Formations disponibles : but, stmicro, bac, prepa
          </p>
          <Link 
            to="/Home" 
            className="text-black inline-block bg-black-600 hover:bg-black-700 px-6 py-3 rounded-lg transition"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="text-black min-h-screen px-6 py-12">
      <div className="text-black max-w-4xl mx-auto">
        <Link 
          to="/Home" 
          className="inline-block mb-6 text-black-400 hover:text-black-300 transition"
        >
          ← Retour
        </Link>

        <h1 className="text-black text-4xl font-bold mb-10">
          {formationId === 'but' && 'BUT Génie Mécanique et Productique'}
          {formationId === 'stmicro' && 'Alternance STMicroelectronics Tours'}
          {formationId === 'bac' && 'Baccalauréat Général'}
          {formationId === 'prepa' && 'Classe Préparatoire PTSI'}
        </h1>

        {/* ✅ Gestion de text ET list */}
        {formation.sections.map((section, index) => (
          <div key={index} className="mb-10">
            <TextBloc 
              title={section.title} 
              text={section.text}
              text1={section.text1}
              text2={section.text2}
              text3={section.text3}
              list={section.list}
            />
            {section.images && (
              <ImageBloc 
                src={section.images} 
                alt={section.title ?? 'Formation'} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormationPage