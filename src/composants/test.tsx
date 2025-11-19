import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg' // adjust the path if needed

export default function LogoLinks() {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
        <img
          src={viteLogo}
          className="w-16 h-16 transition-transform hover:scale-110"
          alt="Vite logo"
        />
      </a>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img
          src={reactLogo}
          className="w-16 h-16 transition-transform hover:scale-110"
          alt="React logo"
        />
      </a>
    </div>
  )
}