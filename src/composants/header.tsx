
import Logo from "./logosite.png";
// import BoutonGmail from "./boutongmail";
// import BoutonLinkedIn from "./boutonlinkedin";


// Header général avec Tailwind
interface HeaderProps {
  setPage: (page: string) => void;
}
function Header({ }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-black px-8 py-4">
      {/* Logo à gauche */}
      <Logo />

      {/* Navbar au centre */}
      {/* <Navbar setPage={setPage} /> */}

      {/* Boutons contact à droite */}
      <div className="flex items-center">
        {/* <BoutonGmail />
        <BoutonLinkedIn /> */}
      </div>
    </header>
  );
}

export default Header;