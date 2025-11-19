// src/pages/pageactivite.tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import TextBloc from '../composants/textbloc'
import ImageBloc from '../composants/imagebloc'

interface ActivityContent {
  sections: {
    title?: string
    text?: string
    images?: string[]
    gallery?: string[]  // ⬅️ Pour la galerie photo
  }[]
}

// ✅ Dictionnaire d'activités : 1 fichier, toutes les pages
const activitiesData: Record<string, ActivityContent> = {
  photo: {
    sections: [
      {
        title: 'Ma passion pour la photographie',
        text: "Depuis plusieurs années, je pratique la photographie amateur. J'aime capturer des paysages, des jeux de lumière et des moments spontanés. Cela m'aide à développer ma créativité et mon sens du détail.",
        images: ['/images/photo1.jpg', '/images/photo2.jpg']
      },
      {
        title: 'Matériel et techniques',
        text: "J'utilise un reflex Canon EOS 4000D avec un objectif 18-55 mm. Je m'intéresse à la composition et à la lumière naturelle, et je retouche légèrement mes clichés de façon à avoir une meilleure luminosité.",
        images: ['/images/photo3.jpg']
      },
      {
        text: "La photographie m'aide à observer le monde différemment, à patienter, et à capturer des instants uniques."
      },
      {
        text: "Voici quelques uns de mes clichés :"
      },
      {
        // ✅ Galerie de photos
        gallery: [
          '/images/gallery/thailande.jpg',
          '/images/gallery/thailande2.JPG',
          '/images/gallery/bateau1.png',
          '/images/gallery/cathedrale.jpg',
          '/images/gallery/chat.JPG',
          '/images/gallery/corse.jpg',
          '/images/gallery/elephants.JPG',
          '/images/gallery/itali.JPG',
          '/images/gallery/mer.JPG',
          '/images/gallery/montagn.JPG',
          '/images/gallery/soleil.JPG',
          '/images/gallery/suricate.JPG'
        ]
      }
    ]
  },

  mecanique: {
    sections: [
      {
        title: 'Passion pour la mécanique automobile',
        text: "Depuis l'adolescence, j'ai développé une passion pour la mécanique automobile en apprenant par moi-même. J'ai commencé par des interventions simples comme le changement des plaquettes de frein et des phares de ma voiture, puis j'ai progressivement acquis de l'expérience en réalisant des réparations plus complexes. J'ai notamment changé un kit de distribution complet sur mon ancienne Fiat, ce qui m'a permis de mieux comprendre le fonctionnement des moteurs et d'affiner mes compétences techniques.",
        images: ['/images/mecavoiture/moteur.jpg', '/images/mecavoiture/poulie.jpg','/images/mecavoiture/supmoteur.jpg']
      },
      {
        title: 'Conduite sur circuit',
        text: "Je suis également passionnée de pilotage, ce qui complète parfaitement mon intérêt pour la mécanique. Dès que possible, je me rends sur des circuits comme celui de Fontenay-Le-Comte (85) pour travailler la vitesse et la maîtrise du véhicule, ou à La Ferté-Gaucher (77) pour pratiquer le drift, qui demande un contrôle précis des glisses. Ces expériences sur piste m’apportent un retour direct sur le comportement des voitures, enrichissant ainsi ma compréhension technique et affinant mes compétences en mécanique.",
        images: ['/images/mecavoiture/ferrari.jpg', '/images/mecavoiture/ferrari2.jpg',]
      }
    ]
  },

  voitureRC: {
    sections: [
      {
        title: 'Projet voiture télécommandée thermique',
        text: "Ce projet personnel a pour objectif de concevoir et de fabriquer une voiture radiocommandée thermique entièrement sur mesure, équipée d’un petit moteur thermique, typiquement de 30cc. La démarche que j’adopte est complète : je réalise d’abord la modélisation 3D de tous les composants nécessaires sur logiciel de CAO, ce qui me permet de valider virtuellement l’assemblage, la géométrie et le fonctionnement de la voiture avant toute fabrication.",
        images: ['/images/voiturerc/coque.png']
      },
      {
        text: "Pour garantir à la fois performance et légèreté, je prévois de souder moi-même le châssis, en choisissant des matériaux adaptés comme l’aluminium ou des alliages légers. Ce travail de soudure est essentiel pour obtenir une structure résistante et très légère, capable de supporter le moteur et tous les organes mécaniques, tout en maximisant l’agilité du modèle." 
      },
      {
        text: "Tous les éléments de la voiture – du système de suspension à la transmission, jusqu’aux supports moteur et carrosserie – seront d’abord conçus en CAO puis fabriqués à l’atelier, selon les spécifications du projet. Pour l’aspect esthétique et le design général, je me base sur la Nissan GTR R34, célèbre pour ses performances et son style emblématique dans l’univers automobile. Ce choix de base inspire les lignes et la conception de la voiture tout en offrant un vrai défi technique quant à la reproduction fidèle à l’échelle réduite.",
        images: ['/images/voiturerc/aileron.png','/images/voiturerc/roue.png']
      },
       {
        text: "Ce projet est pour moi une opportunité de renforcer mes compétences en conception mécanique, soudure, CAO et fabrication manuelle, tout en explorant concrètement le lien entre modélisation virtuelle et réalisation physique d’un modèle réduit performant." 
      }
    ]
  },

  // ✅ NOUVELLE CATÉGORIE : Sport
  sport: {
    sections: [
      {
        title: 'Ma pratique sportive',
        text: "Le sport occupe une place centrale dans ma vie et constitue un véritable moteur au quotidien. Il me permet de dépasser mes limites, de préserver une excellente condition physique, mais aussi de cultiver des qualités humaines essentielles comme l’esprit d’équipe, la détermination et le respect de la discipline. Je pratique activement différentes disciplines sportives qui, chacune à leur façon, ont forgé mon caractère et ma vision de l’effort.",
      },
      {
        title: 'Football',
        text: "Le football, que j’ai pratiqué pendant treize années, reste mon sport de cœur. C’est une passion transmise par mon père et partagée chaque saison sur les terrains. Cette longue expérience m’a apporté un fort esprit d’équipe, une endurance solide et le sens du collectif, autant d’aptitudes que je souhaite remettre à l’épreuve en me réinscrivant prochainement. Le football représente pour moi bien plus qu’un sport : il est synonyme de partage, de dépassement et de souvenirs inoubliables, au fil des matchs et des entraînements.",
        images: ['/images/sport/foot1.jpg']
      },
      {
        title: 'Musculation et fitness',
        text: "Parallèlement, la musculation et le fitness figurent dans ma routine. Je fréquente régulièrement la salle de sport, où j’ai mis en place un programme combinant exercices de force, cardio et souplesse. Ce travail m’a permis de renforcer mon corps, d’améliorer mon bien-être général et de préparer le terrain pour débuter la boxe française très prochainement. La musculation m’apporte à la fois constance et adaptation dans l’effort, qualités transférables à mon parcours professionnel et personnel.",
      },
      {
        title: 'Ski',
        text: "Le ski est également une activité que j’ai beaucoup pratiquée depuis mon enfance. Les saisons à la montagne et les descentes sur les pistes ont développé ma technique, mon équilibre et mon goût du dépassement de soi. Ce sport me rappelle de magnifiques moments familiaux et enrichit ma polyvalence sportive, en m’offrant des sensations uniques et un contact privilégié avec la nature.",
        images: ['/images/sport/ski.jpg']
      },
      {
        text: "Ces différentes activités sportives ont toujours constitué un pilier dans mon équilibre, entre les exigences des études, de l’alternance, et ma vie personnelle. Le sport m’a appris à gérer le stress, à rester persévérante et rigoureuse dans chaque projet, ce qui se reflète aujourd’hui dans mon engagement et mes ambitions professionnelles."
      }
    ]
  }
}

const ActivityPage: React.FC = () => {
  const { activiteId } = useParams<{ activiteId: string }>()

  const activity = activiteId ? activitiesData[activiteId] : null

  if (!activity) {
    return (
      <div className="text-black min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Activité non trouvée</h1>
          <p className="text-gray-300 mb-4">
            L'activité "<span className="text-black-400">{activiteId}</span>" n'existe pas.
          </p>
          <p className="text-gray-400 mb-8">
            Activités disponibles : photo, mecanique, voitureRC, sport
          </p>
          <Link 
            to="/Home" 
            className="inline-block bg-black-600 hover:bg-black-700 text-black px-6 py-3 rounded-lg transition"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="text-black min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Bouton retour */}
        <Link 
          to="/Home" 
          className="inline-block mb-6 text-black-400 hover:text-black-300 transition"
        >
          ← Retour
        </Link>

        <h1 className="text-4xl font-bold mb-10 capitalize">
          {activiteId === 'photo' && 'Photographie'}
          {activiteId === 'mecanique' && 'Mécanique automobile'}
          {activiteId === 'voitureRC' && 'Voiture télécommandée thermique'}
          {activiteId === 'sport' && 'Sport'}
        </h1>

        {/* 🔁 Boucle sur chaque section */}
        {activity.sections.map((section, index) => (
          <div key={index} className="mb-10">
            {section.text && (
              <TextBloc title={section.title} text={section.text} />
            )}
            
            {section.images && (
              <ImageBloc src={section.images} alt={section.title ?? 'Activité'}  />
            )}

            {/* ✅ Galerie de photos (grille 3 colonnes) */}
            {section.gallery && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {section.gallery.map((photo, photoIndex) => (
                  <div key={photoIndex} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={photo} 
                      alt={`Photo ${photoIndex + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.error('❌ Image non trouvée:', photo)
                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+non+disponible'
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityPage