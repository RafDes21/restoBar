import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMinus } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full z-10 h-14 flex text-white bg-black md:flex items-center md:h-20">
      <nav className="md:flex relative px-5 max-w-screen-2xl mx-auto justify-between items-center h-auto w-full">
        <div className="font-bold hover:text-[#fad02c] md:text-3xl">
          <Link to={"/"}>
            El TALLER <span className="font-light text-xs md:text-xl">CERVECERIA</span>
          </Link>
        </div>
        <div className="md:hidden absolute right-5 top-1/2 -translate-y-1/2">
          {menuOpen ? (
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <AiOutlineMinus
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
        <ul
          className={`${
            menuOpen
              ? "hidden md:flex justify-center items-center gap-4"
              : "flex flex-col md:flex-row justify-center items-center gap-4"
          } absolute md:static bg-black bg-opacity-20 md:bg-transparent p-4 md:p-0 w-full md:w-auto mt-4 left-0 md:mt-0`}
        >
          <li>
            <Link
              className="hover:text-[#fad02c] font-bold text-lg"
              to={"place"}
              onClick={toggleMenu}
            >
              EL LUGAR
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#fad02c] font-bold text-lg"
              to={"menu"}
              onClick={toggleMenu}
            >
              EL MENÚ
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#fad02c] font-bold text-lg"
              to={"events"}
              onClick={toggleMenu}
            >
              EVENTOS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#fad02c] font-bold text-lg"
              to={"bookings"}
              onClick={toggleMenu}
            >
              RESERVAS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#fad02c] font-bold text-lg"
              to={"about"}
              onClick={toggleMenu}
            >
              NOSOTROS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
