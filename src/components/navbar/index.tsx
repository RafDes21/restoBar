import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
    <div>
      <nav>
        <h1>
          <Link to={"/"}>
            El TALLER <span>CERVECERIA</span>
          </Link>
        </h1>
        <GiHamburgerMenu />
        <ul>
          <li>
            <Link to={"place"}>EL LUGAR</Link>
          </li>
          <li>
            <Link to={"menu"}>EL MENÚ</Link>
          </li>
          <li>
            <Link to={"events"}>EVENTOS</Link>
          </li>
          <li>
            <Link to={"bookings"}>RESERVAS</Link>
          </li>
          <li>
            <Link to={"about"}> NOSOTROS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
