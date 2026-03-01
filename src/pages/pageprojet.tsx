// src/pages/pageprojet.tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import TextBloc from '../composants/textbloc'
import ImageBloc from '../composants/imagebloc'

interface ProjectData {
  title: string
  description: string
  category: 'pro' | 'scolaire'
  sections?: {
    title?: string
    text?: string
    list?: string[]
    images?: string[]
  }[]
}

const ProjectPage: React.FC = () => {
  const { projetId } = useParams<{ projetId: string }>()
  const id = Number(projetId)

  // Vos données de projet
  const projectData: Record<number, ProjectData> = {
    1: { 
      title: "Convoyeur de transport de plaquettes et cartes électroniques", 
      description: "Projet réalisé en entreprise chez STMicroelectronics",
      category: 'pro',
      sections: [
        {
          title: "Contexte du projet",
          text: "Dans le cadre de mon alternance chez STMicroelectronics, j'ai conçu et réalisé un système de convoyage automatisé pour le transport de plaquettes et de cartes électroniques dans une machine qui venait déposer de la pâte à braser dessus, afin d'y placer des composants par la suite. Les plaquettes (wafers) et cartes (PCB) étaient placées sur un plateau (carrier) doté d'un système de vide, permettant de les maintenair en place lors du dépôt dans la machine. Ce plateau se déplaçait à l'aide de deux courroies, synchronisées grâce à un axe, relié à un moteur via une poulie. Ce t axe permettait que le plateau se déplace parfaitement droit, en ayant un mouvement synchronisé de chaque côté. Ce projet visait à améliorer la fluidité des process et à réduire les manipulations manuelles.",
          images: ['/images/convoyeur/convoyeur.jpg']
        },
        {
          text:"J'ai entrepris la conception d’un convoyeur destiné au transport de plaquettes et de cartes électroniques en m’appuyant sur la forme générale d’un convoyeur existant. Cette base m’a permis de récupérer certains éléments fonctionnels et structuraux, que j’ai ensuite redimensionnés afin de les adapter précisément aux nouveaux besoins du projet. Cette étape de redimensionnement était cruciale pour assurer une parfaite intégration du convoyeur dans le flux de production, tout en garantissant la sécurité et la délicatesse nécessaires au transport des composants électroniques sensibles.",
          images: ['/images/convoyeur/convoyeur4.png']
        },
        {
          text:"La première phase de travail a consisté à réaliser l’intégralité de la conception assistée par ordinateur (CAO) du convoyeur. J’ai modélisé tous les composants en assemblages fonctionnels, ce qui m’a permis de vérifier la cohérence mécanique, les interactions entre les pièces, ainsi que le bon fonctionnement des mécanismes de transport. Cette modélisation détaillée m’a également offert une visibilité complète sur les contraintes et les tolérances à respecter, facilitant ainsi la phase de fabrication et de montage.",
        },
        {
          text:"Une fois la conception validée en CAO, j’ai piloté la réalisation complète du convoyeur en interne. Cela a impliqué diverses opérations de fabrication, notamment l’usinage des pièces mécaniques, la découpe laser pour les éléments nécessitant une grande précision, ainsi que l’assemblage des différentes parties du convoyeur. Les opérations menées en interne ont permis un contrôle rigoureux de la qualité à chaque étape, tout en optimisant les délais et en facilitant les ajustements lors du montage final.",
        },
        {
          title: "Technologies et compétences mises en œuvre",
          list: [
            "Conception 3D avec SolidWorks : modélisation des pièces mécaniques & leurs assemblages",
            "Choix des matériaux et dimensionnement des composants",
            "Fabrication par usinage traditionnel et CN",
            "Montage des composants, assemblage et mise en service du système",
            "Tests de validation en salle blanche"
          ]
        },
        {
          title: "Résultats obtenus",
          text: "Le système développé a permis d'automatiser le transport des plaquettes, réduisant les temps de manipulation de 30% et améliorant la traçabilité des pièces. Ce projet m'a permis de mettre en pratique mes compétences en conception mécanique et en gestion de projet industriel.",
          images: ['/images/convoyeur/convoyeur2.jpg']
        }
      ]
    },
    2: { 
      title: 'Outillage de mise en position pour wire bonding', 
      description: 'Projet réalisé en entreprise chez STMicroelectronics',
      category: 'pro',
      sections: [
        {
          title: "Description du projet",
          text: "Dans le cadre de mon activité, j’ai eu à re-concevoir un outil destiné au maintien de boîtiers utilisés comme composants électroniques. Cet outil devait garantir une fixation précise et stable des boîtiers pendant une opération délicate : une pointe mécanisée effectue le dépôt et la découpe de fils métalliques permettant de relier les pattes du composant à la puce située au centre du boîtier. Cette modification a permis d’améliorer l’efficience et la fiabilité de l’assemblage, en optimisant le positionnement des boîtiers et en assurant une connexion électrique de qualité entre les différentes parties du composant.",
          images: ['/images/outillage/smitpak.png']
        },
         {
          title: "Objectifs du projet",
          list: [
            "Reconcevoir un outil capable de maintenir avec précision trois types différents de boîtiers destinés à être des composants électroniques.",
            "Assurer la stabilité et la fixation optimale des boîtiers pendant l’opération délicate de dépôt et de coupe de fils métalliques reliant les pattes des composants à la puce centrale.",
            "Réaliser la conception complète de l’outil en CAO pour adapter précisément chaque pièce aux variations dimensionnelles des différents boîtiers.",
            "Produire certaines pièces de l’outil en interne afin de maîtriser les délais et garantir une adaptation fine aux besoins de l’atelier.",
            "Confier à des sous-traitants spécialisés les pièces nécessitant des opérations précises (découpe au fil, rectification) pour assurer la qualité et la finition requises.",
            "Optimiser la qualité, la fiabilité et l’efficacité globale du processus d’assemblage des composants électroniques grâce à cet outil repensé."
          ]
        },
         {
          text: "J’ai commencé par refaire toute la conception assistée par ordinateur (CAO) de l’outil afin de l’adapter aux trois types de boîtiers différents que nous utilisons. Cette étape a été essentielle pour garantir que l’outil puisse maintenir chaque type de boîtier avec précision et stabilité lors des opérations de dépôt et de coupe des fils métalliques. Une fois les modèles CAO validés, nous avons procédé à l’usinage interne de certaines pièces de l’outil, réalisées directement dans notre atelier pour répondre aux besoins spécifiques de l’assemblage.",
          images: ['/images/outillage/TO220.png','/images/outillage/TO247.png']
        },
        {
          text: "Par ailleurs, avec certaines pièces très précises, j'ai réalisé des simulations d'efforts sur SolidWorks Simulation afin de vérifier la déformation des composants et le déplacements des surfaces subissant les efforts. Celles nécessitant une découpe au fil ou une rectification fine, ont été confiées à des sous-traitants spécialisés. Ce choix a permis de bénéficier de savoir-faire et d’équipements adaptés à ces opérations délicates, garantissant ainsi la qualité et la fiabilité de l’ensemble de l’outil conçu pour l’assemblage des composants électroniques. Cette combinaison de réalisation interne et de sous-traitance a optimisé les délais, les coûts et la qualité finale du prototypage industriel.",
          images: ['/images/outillage/simulation.png','/images/outillage/simulation2.png']
        },
      ]
    },
    3: { 
      title: 'ICN S4 : Fabrication d\'une genouillère en fonderie', 
      description: 'Projet académique réalisé durant le BUT GMP',
      category: 'scolaire',
      sections: [
        {
          title: "Description du projet",
          text: "Le projet portait sur la fabrication d'une genouillère dans le cadre de l'industrialisation d'une chaîne numérique au semestre 4. Le défi consistait à réaliser un mécanisme de multiplication d'action et de pression (MAP) répondant à des contraintes techniques précises : assurer une course utile de 17 mm, garantir une force d'appui de 600 N avec un effort humain limité à 200 N, tout en respectant un coût de revient inférieur à 30 € (incluant matières premières et main-d'œuvre). Ce projet s'inscrivait dans une démarche d'industrialisation complète, combinant conception, fabrication d'outillages et production de pièces par fonderie et impression 3D, tout en intégrant une gestion rigoureuse de la qualité et des coûts.",
          images: ['/images/icns4/maquette.png']
        },
        {
          title: "Objectifs",
          list: [
            "Créer des documents techniques pour l’établissement de devis et la pré-industrialisation.",
            "Fabriquer les outillages nécessaires, comme les plaques modèles et les boîtes à noyau.",
            "Produire les pièces finales du mécanisme, notamment en aluminium par fonderie.",
            "Valider les géométries et les jeux fonctionnels des pièces par impression 3D.",
            "Mettre en place un suivi des défauts et des actions correctives pour améliorer la qualité."
          ]
        },
        {
          title: "Résultats",
          text: "Dans ce projet, j’occupais le rôle d’imprimeur 3D et conceptrice. J’ai été chargée de la fabrication par impression 3D de la pièce 2, ainsi que de la pièce 3 sous ses deux formes : brute et usinée. J’ai également conçu et fabriqué l’outillage nécessaire pour la pièce 3, ce qui a permis la réalisation des moules et des opérations de fonderie. Mon travail a contribué directement à la validation des géométries et des jeux fonctionnels du mécanisme, ce qui a aidé l’équipe à préparer la fabrication finale en aluminium. Grâce à mes compétences en conception 3D et en prototypage rapide, j’ai joué un rôle clé dans la pré-industrialisation du produit et dans l’optimisation du processus de fabrication.",
          images: ['/images/icns4/fondues.png','/images/icns4/produitasm.png']
        },
      ]
    },
    4: { 
      title: 'Bureau d\'études n° 6', 
      description: 'Projet académique réalisé durant le BUT GMP',
      category: 'scolaire',
      sections: [
        {
          title: "Description du projet",
          text: "Dans le cadre de ma formation en BUT GMP, j'ai réalisé un projet de conception d'un système mécanique complexe. Ce projet m'a permis d'appliquer les connaissances théoriques acquises en cours.",
          images: ['/images/be6/segway1.png','/images/be6/segway.png']
        },
        {
          title: "Grandes étapes",
          list: [
            "Réaliser le dessin d'assemblage sur papier",
            "Dimensionner les composants et choisir les éléments standards",
            "Concevoir chaque composant un à un et récupérer les éléments standards",
            "Assembler tous les composants"
          ]
        },
         {
          title: "Résultats",
          text: "Après avoir modélisé et créé chacun des composants du train épicycloïdal séparément, il a fallu procéder à l’assemblage complet du mécanisme. Cette étape consistait à rassembler l’ensemble des pièces – le soleil, les planétaires, la couronne et le porte-satellite – afin de vérifier leur compatibilité et leur bon fonctionnement. L’objectif était d’obtenir un système cohérent et opérationnel, capable de reproduire fidèlement le mouvement prévu par le fonctionnement théorique du train d’engrenages.",
          images: ['/images/be6/coupe_XSEC0001.png','/images/be6/coupe_XSEC0003.png','/images/be6/arbre_secondaire_asm.png','/images/be6/arbre_de_sortie_reducteur_asm.png']
        },
      ]
    },
     5: { 
      title: 'Projet de fin d\'études : conception d\'un triporteur de transport d\'enfants', 
      description: 'Projet académique réalisé durant le BUT GMP',
      category: 'scolaire',
      sections: [
        {
          title: "Description du projet",
          text: "Notre projet de fin de BUT consiste en la conception et la fabrication d’un triporteur électrique destiné à une crèche de la métropole. Ce triporteur doit pouvoir transporter 6 enfants de moins de 3 ans ainsi que 2 adultes sur une distance d’environ 10 km. Plusieurs contraintes importantes viennent compléter ce besoin, notamment un toit amovible pour protéger du soleil et de la pluie, l’obligation pour un adulte d’être assis avec les enfants à l’avant du triporteur, une sécurité renforcée avec des attaches à trois points pour tous les passagers, des rangements dont certains doivent maintenir la température des aliments, et une stabilité maximale en toute situation. Le projet vise donc à répondre à ces exigences tout en concevant un véhicule fonctionnel et sécurisé.",
          images: ['/images/triporteur/triporteur2.jpg']
        },
        {
          title: "Objectifs du projet",
          list: [
            "Réaliser une étude de l’existant afin de proposer une solution adaptée aux contraintes de la crèche.",
            "Concevoir et dimensionner le triporteur ainsi que son système d'assistance électrique.",
            "Intégrer le système d'assistance électrique dans le triporteur.",
            "Assurer le respect des normes de sécurité et de confort pour les enfants et les adultes.",
            "Garantir la stabilité et la maniabilité du triporteur dans toutes les conditions.",
            "Collaborer régulièrement avec les représentants de la métropole via des réunions de suivi."
          ]
        },
        {
          title: "Mon rôle",
          text: "Je suis responsable, avec un de mes onze camarades, de la partie motorisation du triporteur. Cela inclut le choix du ou des moteurs adaptés aux performances attendues ainsi que leur implantation optimale dans la structure du véhicule. Je travaille aussi sur la transmission, c’est-à-dire sur le système qui transmet la puissance du moteur aux roues, en veillant à l’efficacité et la fiabilité. Enfin, je suis en charge de la commande du moteur, ce qui consiste à concevoir et implémenter le système de contrôle électronique permettant de gérer la vitesse, le couple et la sécurité du moteur afin d’assurer un fonctionnement fluide et sécurisé du triporteur.",
          images: ['/images/triporteur/triporteur.png']
        },
      ]
    },
    6: { 
      title: 'Travaux Pratiques : Utilisation de l\'électroérosion', 
      description: 'Projet académique réalisé lors du 6e semestre de mon BUT GMP',
      category: 'scolaire',
      sections: [
        {
          title: "Description du projet",
          text: "Lors de travaux pratiques, après un usinage sur le centre d'usinage à commande numérique Hardinge VMC 6OOII, nous avions à découper la pièce à l'aide de la découpe par électroérosion. Ce TP fut principalement une découverte du procédé. Voici comment il s'est déroulé :",
          images: ['/images/projet6/aaa.jpg']
        },
        {
          title: "Objectifs du TP",
          list: [
            "Prendre en main de logiciel utilisé pour l'électroérosion",
            "Réaliser une découpe par électroérosion après l'usinage d'une pièce en acier.",
          ],
          text: ""
        },
        {
          title: "Déroulé du TP",
          text: "Pour commencer, mes deux camarades ont commencé par mettre en place le centre d'usinage hardinge afin de réaliser la pièce demandée. Pendant ce temps, de l'autre côté de la pièce, je m'occupais de la lecture du document expliquant comment utiliser la machine de découpe. J'ai pu m'approprier le procédé afin de pouvoir fournir une découpe rapide et efficace de ma pièce.",
          images: ['/images/projet6/aaaa.png']
        },
        {
          text: "Avant de lancer toute découpe, il m'a fallu sabler la pièce afin que le fil puisse bien venir palper le bord de la pièce sans se tordre et risquer de se casser.",
          images: ['/images/projet6/aaaa.png']
        },
         {
          text: "Par la suite, j'ai pu me pencher sur la programmation de ma pièce. Pour commencer, j'ai exporté le dxf de la pièce usinée, avec des dentures autour de la partie supérieure que nous avons à découper au fil. Une fois ce dxf récupéré, j'ai rentré mes conditions de coupe ainsi que les dimensions de la pièce et son matériau dans le logiciel, puis j'ai défini ma trajectoire de découpe, en découpe extérieure. J'ai ensuite pu lancer ma simulation, et mettre ma pièce en position sur les cales, le plus près possible du bord car le fil découpe presque le bord de ma pièce. Une fois la pièce mise en position, il faut la palper avec le fil en le positionnant à l'endroit que j'ai défini lorsque j'ai préparé ma trajectoire de découpe. Une fois toutes ces étapes respectées, j'ai pu lancer ma découpe. Mi découpe, après la découpe des dents, il a fallu rajouter un aimant sur la pièce afin que celle-ci soit maintenue et que la partie découpée ne penche pas, ce qui pourrait plier et abîmer voire couper le fil.",
          images: ['/images/projet6/aaaa.png']
        },
      ]
    },
     7: { 
      title: 'Travaux Pratiques : Taraudage par déformation de matière et fluoperçage', 
      description: 'Projet académique réalisé lors du 6e semestre de mon BUT GMP',
      category: 'scolaire',
      sections: [
        {
          title: "Description du projet",
          text: "Lors de travaux pratiques, nous avons découvert le principe du fluoperçage et du taraudage par déformation de matière. Nous avions à les mettre en place sur le centre d'usinage à commande numérique SOMAB DIAM 600.",
          images: ['/images/triporteur/triporteur2.jpg']
        },
        {
          title: "Objectifs du projet",
          list: [
            "Réaliser une étude de l’existant afin de proposer une solution adaptée aux contraintes de la crèche.",
            "Concevoir et dimensionner le triporteur ainsi que son système d'assistance électrique.",
            "Intégrer le système d'assistance électrique dans le triporteur.",
            "Assurer le respect des normes de sécurité et de confort pour les enfants et les adultes.",
            "Garantir la stabilité et la maniabilité du triporteur dans toutes les conditions.",
            "Collaborer régulièrement avec les représentants de la métropole via des réunions de suivi."
          ]
        },
        {
          title: "Mon rôle",
          text: "Je suis responsable, avec un de mes onze camarades, de la partie motorisation du triporteur. Cela inclut le choix du ou des moteurs adaptés aux performances attendues ainsi que leur implantation optimale dans la structure du véhicule. Je travaille aussi sur la transmission, c’est-à-dire sur le système qui transmet la puissance du moteur aux roues, en veillant à l’efficacité et la fiabilité. Enfin, je suis en charge de la commande du moteur, ce qui consiste à concevoir et implémenter le système de contrôle électronique permettant de gérer la vitesse, le couple et la sécurité du moteur afin d’assurer un fonctionnement fluide et sécurisé du triporteur.",
          images: ['/images/triporteur/triporteur.png']
        },
      ]
    },
    8: { 
      title: 'Projet de fin d\'études : conception d\'un triporteur de transport d\'enfants', 
      description: 'Projet académique réalisé durant le BUT GMP',
      category: 'scolaire',
      sections: [
        {
          title: "Description du projet",
          text: "Notre projet de fin de BUT consiste en la conception et la fabrication d’un triporteur électrique destiné à une crèche de la métropole. Ce triporteur doit pouvoir transporter 6 enfants de moins de 3 ans ainsi que 2 adultes sur une distance d’environ 10 km. Plusieurs contraintes importantes viennent compléter ce besoin, notamment un toit amovible pour protéger du soleil et de la pluie, l’obligation pour un adulte d’être assis avec les enfants à l’avant du triporteur, une sécurité renforcée avec des attaches à trois points pour tous les passagers, des rangements dont certains doivent maintenir la température des aliments, et une stabilité maximale en toute situation. Le projet vise donc à répondre à ces exigences tout en concevant un véhicule fonctionnel et sécurisé.",
          images: ['/images/triporteur/triporteur2.jpg']
        },
        {
          title: "Objectifs du projet",
          list: [
            "Réaliser une étude de l’existant afin de proposer une solution adaptée aux contraintes de la crèche.",
            "Concevoir et dimensionner le triporteur ainsi que son système d'assistance électrique.",
            "Intégrer le système d'assistance électrique dans le triporteur.",
            "Assurer le respect des normes de sécurité et de confort pour les enfants et les adultes.",
            "Garantir la stabilité et la maniabilité du triporteur dans toutes les conditions.",
            "Collaborer régulièrement avec les représentants de la métropole via des réunions de suivi."
          ]
        },
        {
          title: "Mon rôle",
          text: "Je suis responsable, avec un de mes onze camarades, de la partie motorisation du triporteur. Cela inclut le choix du ou des moteurs adaptés aux performances attendues ainsi que leur implantation optimale dans la structure du véhicule. Je travaille aussi sur la transmission, c’est-à-dire sur le système qui transmet la puissance du moteur aux roues, en veillant à l’efficacité et la fiabilité. Enfin, je suis en charge de la commande du moteur, ce qui consiste à concevoir et implémenter le système de contrôle électronique permettant de gérer la vitesse, le couple et la sécurité du moteur afin d’assurer un fonctionnement fluide et sécurisé du triporteur.",
          images: ['/images/triporteur/triporteur.png']
        },
      ]
    },
    9: { 
      title: 'Plasturgie : usinage, pliage et soudure', 
      description: 'Projet réalisé en entreprise chez STMicroelectronics',
      category: 'pro',
      sections: [
        {
          title: "Description",
          text: "Pendant mon alternance chez STMicroelectronics Tours, j'ai été amenée plusieurs fois à travailler dans l'atelier voisin : l'atelier plasturgie & chaudronnerie. De ce fait, j'ai eu plusieurs petits projets à réaliser autour de la plasturgie, que ce soit de l'usinage, du pliage, de la découpe, ou encore de la soudure plastique. De fait j'ai réalisé plusieurs pièces et assemblages comme par exemple un support de racle.",
          images: ['/images/projet9/support1.jpg']
        },
        {
          text: "Pour réaliser ce support, j'ai d'abord commencé par usiner les cinq pièces sur la petite fraiseuse CN, en PPH épaisseur 20mm et 10mm. J'ai tout d'abord surfacé et contourné les 4 pièces qui servent à poser la racle, puis ensuite j'ai découpé la plaque support du dessous. Par la suite, j'ai ébavuré mes pièces pour pouvoir les souder entre elles. J'ai commencé par souder les pièces support deux à deux à l'aide d'un lester et de cordon de PPH, puis j'ai ensuite soudé les deux bloc sur la plaque support, tout en le maintenant de chaque côté pour ne pas qu'il soit trop sollicité en flexion et qu'il se déforme. ",
          images: ['/images/projet9/support2.jpg']
        },
      
      ]
    },
    10: { 
      title: 'Chaudronnerie : usinage, pliage et soudure',
      description: 'Projet réalisé en entreprise chez STMicroelectronics',
      category: 'pro',
      sections: [
        {
          title: "Description",
          text: "Durant mon alternance chez STMicroelectronics Tours, j'ai été amenée plusieurs fois à travailler dans l'atelier voisin: l'atelier plasturgie & chaudronnerie. De ce fait, j'ai eu plusieurs fois l'opportunité d'aller aider certains collègues du côté de la chaudronnerie, ou j'ai pu réaliser du pliage et de la soudure de pièces principalement en acier inoxydable.",
          images: ['/images/projet10/aaa.jpg']
        },
        {
          title: "Un exemple",
          text: "Pour tester les soudures d'angle, j'ai réalisé un petit cadre de 20x20cm, en tube de 20x20x1mm d'épaisseur. J'ai commencé par couper les quatres tubes à 45° à l'aide d'une scie mécanique. Après les avoir ébavurés un à un, j'ai pu tout d'abord les pointer, pour ensuite les souder avec apport de matière sur les côtés, et sans apport de matière dans les angles.",
          images: ['/images/projet10/soudure.jpg']
        },
      ]
    }
  }

  const project = projectData[id]

  if (!project) {
    return (
      <div className="text-black min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Projet non trouvé</h1>
          <p className="text-gray-300 mb-4">
            Le projet numéro <span className="text-black-400">{projetId}</span> n'existe pas.
          </p>
          <p className="text-black text-sm mb-8">
            Projets disponibles : 1, 2
          </p>
          <Link 
            to="/Projets" 
            className="inline-block bg-black-600 hover:bg-black-700 text-black px-6 py-3 rounded-lg transition"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="text-black min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/Projets" 
          className="inline-block mb-6 text-black-400 hover:text-black transition"
        >
          ← Retour aux projets
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-black">{project.title}</h1>
        <p className="text-gray-400 text-lg mb-10">{project.description}</p>

        {project.sections && project.sections.map((section, index) => (
          <div key={index} className="mb-10">
            <TextBloc 
              title={section.title} 
              text={section.text}
              list={section.list}
            />
            {section.images && (
              <ImageBloc 
                src={section.images} 
                alt={section.title ?? 'Projet'} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage