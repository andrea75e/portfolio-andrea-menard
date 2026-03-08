// src/App.tsx
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

//  Pages
import Home from './pages/pagehome'
import ActivityPage from './pages/pageactivité'
import ProjectPage from './pages/pageprojet'
import PageProjetsAccueil from './pages/pageprojets'
import PageProjetsCategorie from './pages/pageprojetscat'
import FormationPage from './pages/pageformation'

//  Composants communs
import Navbar from './composants/navbar'
import Footer from './composants/footer'
import ScrollToTop from './composants/scrolltotop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-black">
        {/* Header */}
        <Navbar />

        {/* Contenu principal */}
        <main className="flex-grow">
          <Routes>
            {/* ✅ Redirection par défaut vers Home   */}
            <Route path="/" element={<Navigate to="/Home" replace />} />

            {/* ✅ Page d'accueil */}
            <Route path="/Home" element={<Home />} />

            {/* ✅ Activités dynamiques (SANS accent dans l'URL) */}
            <Route path="/Activites/:activiteId" element={<ActivityPage />} />

            {/* ✅ Page d'accueil projets */}
            <Route path="/Projets" element={<PageProjetsAccueil />} />

            {/* ✅ Sous-catégorie projets (pro / scolaire) */}
            <Route path="/Projets/:categorie" element={<PageProjetsCategorie />} />

            {/* ✅ Page projet individuelle */}
           <Route path="/Projets/details/:projetId" element={<ProjectPage />} />

            {/* ✅ Formations avec paramètre dynamique */}
            <Route path="/Formations/:formationId" element={<FormationPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App