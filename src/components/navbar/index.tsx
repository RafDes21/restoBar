import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMinus } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const togleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <nav className="bg-black">
        <h1 className="ms-3 py-2">
          <Link to={"/"}>
            El TALLER <span>CERVECERIA</span>
          </Link>
        </h1>
        {menuOpen ? (
          <GiHamburgerMenu
            onClick={togleMenu}
            className="text-2xl cursor-pointer absolute right-2 top-2.5 "
          />
        ) : (
          <AiOutlineMinus
            onClick={togleMenu}
            className="text-2xl  cursor-pointer absolute right-2 top-2.5 "
          />
        )}
        <ul className={`${menuOpen ? "hidden":"flex flex-col justify-center items-center gap-4 h-screen"}`}>
          <li>
            <Link to={"place"}  onClick={togleMenu}>EL LUGAR</Link>
          </li>
          <li>
            <Link to={"menu"}  onClick={togleMenu}>EL MENÚ</Link>
          </li>
          <li>
            <Link to={"events"}  onClick={togleMenu}>EVENTOS</Link>
          </li>
          <li>
            <Link to={"bookings"}  onClick={togleMenu}>RESERVAS</Link>
          </li>
          <li>
            <Link to={"about"}  onClick={togleMenu}> NOSOTROS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
