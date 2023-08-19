import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import logo from "../../assets/icon.png";
const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 w-[90%] relative max-w-screen-2xl  text-[#939294] text-xs md:text-sm border border-solid border-[#dd1919] rounded-md pt-10 pb-6  mb-5 shadow-3xl shadow-[#dd1919]
                md:grid-cols-3 bg-black md:mx-0 md:w-full"
    >
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 md:-top-12">
        <img className="w-28 md:w-36" src={logo} alt="El Taller" />
      </div>
      <div className="flex flex-col justify-center items-center pb-2">
        <p className="text-center">
          55 6887 5263 <br />
          Lunes a domingos de 9 a 23 hs
          <br />
          Antigua Calz. de Guadalupe 99, San Marcos, Azcapotzalco, CDMX
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pb-2">
        <h6 className="text-[#fad02c]">Unite al equipo!</h6>
        <p>
          Todos los derechos reservados
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="mb-2">Seguinos:</h4>
        <div className="flex gap-3">
          <a
            className="text-[25px] hover:text-[#fad02c]"
            href="https://www.instagram.com/eltallercerveceriamx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
             className="text-[25px] hover:text-[#fad02c]"
            href="https://www.facebook.com/eltallercerveceriamx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook />
          </a>
          <a
             className="text-[25px] hover:text-[#fad02c]"
            href="mailto:soyeltallercerveceria@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
