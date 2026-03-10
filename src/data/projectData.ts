// src/data/projectsData.ts
export interface ProjectData {
  id: number
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

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Convoyeur de transport de plaquettes et cartes électroniques",
    description: "Projet réalisé en entreprise chez STMicroelectronics",
    category: 'pro',
    sections: [
      {
        title: "Contexte du projet",
        text: "Dans le cadre de mon alternance...",
        images: ['/images/projet1.jpg']
      },
      {
        title: "Technologies et compétences",
        list: [
          "Conception 3D avec SolidWorks",
          "Impression 3D",
          "Assemblage mécanique"
        ]
      }
    ]
  },
   {
    id: 2,
    title: "Outillage de mise en position pour wire bonding",
    description: "Projet réalisé en entreprise chez STMicroelectronics",
    category: 'pro',
  
  },
  {
    id: 3,
    title: "Industrialisation chaîne numérique S4 : Fabrication d'une genouillère en fonderie",
    description: "Projet académique réalisé lors du 4e semestre de mon BUT GMP",
    category: 'scolaire',
   
  },
   {
    id: 4,
    title: "Bureau d'études n° 6 : réalisation de l'assemblage de la transmission d\'un Segway",
    description: "Projet académique réalisé lors du 4e semestre de mon BUT GMP",
    category: 'scolaire',
   
  },
  {
    id: 5,
    title: "Projet de fin d\'études : conception d\'un triporteur de transport d\'enfants",
    description: "Projet académique réalisé lors des 5e et 6e semestres de mon BUT GMP",
    category: 'scolaire',
    
  },
  {
    id: 6,
    title: "Travaux Pratiques : Utilisation de l'électroérosion",
    description: "Projet académique réalisé lors du 5e semestre de mon BUT GMP",
    category: 'scolaire',
   
  },
   {
    id: 7,
    title: "Travaux Pratiques : Taraudage par déformation de matière et fluoperçage",
    description: "Projet académique réalisé lors du 5e semestre de mon BUT GMP",
    category: 'scolaire',
    
  },
  {
    id: 8,
    title: "Saé Résolution de problème : production d'un support de téléphone",
    description: "Projet académique réalisé lors du 5e semestre de mon BUT GMP",
    category: 'scolaire',
 
  },
  {
    id: 9,
    title: "Plasturgie : usinage, pliage et soudure",
    description: "Projet réalisé en entreprise chez STMicroelectronics",
    category: 'pro',
   
  },
  {
    id: 10,
    title: "Chaudronnerie : usinage, pliage et soudure",
    description: "Projet réalisé en entreprise chez STMicroelectronics",
    category: 'pro',
    
  },
  {
    id: 11,
    title: "Fabrication composites : réalisatio d\'un rétroviseur",
    description: "Projet réalisé elors du 6e semestre de mon BUT GMP",
    category: 'scolaire',
    
  },
]