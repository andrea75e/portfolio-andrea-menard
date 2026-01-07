import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import LinkedInLogo from '@assets/logo/linkedin.svg'
import MailLogo from '@assets/logo/mail.svg'
import LogoSite from '@assets/logo/logosite.png'

export default function Navbar() {
  const [showFormations, setShowFormations] = useState(false)
  const [showProjets, setShowProjets] = useState(false)
  const [showActivites, setShowActivites] = useState(false)

  return (
    <nav className="flex justify-between gap-6 p-4 bg-white shadow-md">
      <div>
        <div className="flex flex-col items-start">
          <NavLink to="/Home">
            <img 
              src={LogoSite} 
              alt="logo site"
              className="h-15 w-auto object-contain"
            />
          </NavLink>
        </div>
      </div>
      
      <div className="mt-2.5 space-x-6 flex items-center">
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-white-600 underline' : 'text-gray-700 hover:text-black-500'}`
          }
        >
          Accueil
        </NavLink>

        {/* ✅ Menu Formations - CORRIGÉ */}
        <div 
          className="relative inline-block"
          onMouseEnter={() => setShowFormations(true)}
          onMouseLeave={() => setShowFormations(false)}
        >
          <button className="!bg-black font-black text-white hover:text-gray-500 transition-colors pb-2">
            Formations ▾
          </button>
          {showFormations && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md pt-0 py-2 min-w-[220px] z-10">
              <NavLink 
                to="/Formations/but" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                BUT Génie Mécanique & Productique
              </NavLink>
              <NavLink 
                to="/Formations/stmicro" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Alternance chez STMicroelectronics
              </NavLink>
               <NavLink 
                to="/Formations/prepa" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Classe Préparatoire aux Grandes Ecoles : filière PTSI
              </NavLink>
               <NavLink 
                to="/Formations/bac" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Baccalauréat Général Scientifique
              </NavLink>
            </div>
          )}
        </div>

        {/* ✅ Menu Projets - CORRIGÉ */}
        <div 
          className="relative inline-block"
          onMouseEnter={() => setShowProjets(true)}
          onMouseLeave={() => setShowProjets(false)}
        >
          <button className="!bg-black font-black text-white hover:text-gray-500 transition-colors pb-2">
            Projets ▾
          </button>
          {showProjets && (
            <div className="text-black absolute top-full left-0 bg-white shadow-lg rounded-md pt-0 py-2 min-w-[220px] z-10">
              <NavLink 
                to="/Projets" 
                className="text-black block px-4 py-2 text-gray-700 hover:bg-gray-100 font-semibold"
              >
                Tous les projets
              </NavLink>
              <div className="text-black border-t border-gray-200 my-1"></div>
              <NavLink 
                to="/Projets/pro" 
                className="text-black block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Projets en entreprise
              </NavLink>
              <NavLink 
                to="/Projets/scolaire" 
                className="text-black block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Projets académiques
              </NavLink>
            </div>
          )}
        </div>

        {/* ✅ Menu Activités - CORRIGÉ */}
        <div 
          className="relative inline-block"
          onMouseEnter={() => setShowActivites(true)}
          onMouseLeave={() => setShowActivites(false)}
        >
          <button className="!bg-black font-black text-white hover:text-gray-500 transition-colors bg-black pb-2">
            Activités ▾
          </button>
          {showActivites && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md pt-0 py-2 min-w-[220px] z-10">
              
              <NavLink 
                to="/Activites/mecanique" 
                className="block px-4 py-2 text-black-200 hover:bg-gray-100"
              >
                Mécanique automobile
              </NavLink>
              <NavLink 
                to="/Activites/voitureRC" 
                className="block px-4 py-2 text-black-200 hover:bg-gray-100"
              >
                Voiture RC
              </NavLink>
              <NavLink 
                to="/Activites/photo" 
                className="block px-4 py-2 text-black-200 hover:bg-gray-100"
              >
                Photographie
              </NavLink>
              <NavLink 
                to="/Activites/sport" 
                className="block px-4 py-2 text-black-200 hover:bg-gray-100"
              >
                Sport
              </NavLink>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-row w-15 items-center gap-3">
        <a 
          href="https://www.linkedin.com/in/andrea-menard-972320310" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-transform hover:scale-110"
        >
          <img src={LinkedInLogo} alt="linkedin logo" className="w-6 h-6" />
        </a>
        <a 
          href="mailto:andreamenard23@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img src={MailLogo} alt="gmail logo" className="w-6 h-6" />
        </a>
      </div>
    </nav>
  )
}