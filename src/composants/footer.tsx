
function Footer() {
  return (
    <footer className="bg-gray-500 text-black flex flex-col items-center mt-auto py-4">
      <p className="mb-2 text-base">Dernière mise à jour : 2025</p>
      <div className="flex space-x-4">
        <a href="mailto:andreamenard23@gmail.com">
          <button className="!bg-black text-white hover:text-gray-500 px-4 py-2 bg-black-600 rounded hover:bg-gray-700">
            Contactez-moi
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/andrea-menard-972320310"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="!bg-black text-white hover:text-gray-500 px-4 py-2 bg-black-600 rounded hover:bg-gray-700">
            LinkedIn
          </button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
