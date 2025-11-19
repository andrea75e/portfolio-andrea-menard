// src/pages/pageprojetscat.tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projectData'

const PageProjetsCategorie: React.FC = () => {
  const { categorie } = useParams<{ categorie: string }>()
  
  // Filtrer les projets par catégorie
  const filteredProjects = projectsData.filter(
    project => project.category === categorie
  )

  if (filteredProjects.length === 0) {
    return (
      <div className="text-black min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Aucun projet trouvé</h1>
          <Link 
            to="/Projets" 
            className="inline-block hover:bg-black-700 text-black px-6 py-3 rounded-lg transition"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="text-black min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/Projets" 
          className="inline-block mb-6 text-black hover:text-black-300 transition"
        >
          ← Retour
        </Link>

        <h1 className="text-4xl font-bold mb-10">
          {categorie === 'pro' ? 'Projets en entreprise' : 'Projets académiques'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id}
              to={`/Projets/details/${project.id}`}  // ⬅️ IMPORTANT : le bon chemin
              className="bg-gray-400 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-black">{project.description}</p>
              <span className="inline-block mt-4 text-black hover:text-black-300">
                Voir le projet →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageProjetsCategorie