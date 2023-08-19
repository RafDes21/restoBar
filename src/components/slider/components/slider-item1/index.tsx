import logo from "../../../../assets/logo1.png";
import neon from "../../../../assets/neon1.png";
import menu from "../../../../assets/menu1.png";

const SliderItemOne = () => {
  return (
    <div className="relative bg-cover bg-no-repeat bg-[url('./assets/slider/img1.png')] h-full w-full bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90">
        <img className="absolute w-28 top-20 right-5
                         lg:w-[350px] lg:right-20  " 
        src={logo} alt="logo" />
        <img
          id="slider1"
          className="absolute bottom-0 left-0"
          src={neon}
          alt="imagenVector"
        />
        <img
          className="absolute w-28 bottom-10 left-10
                     lg:w-[350px] lg:h-[380px] lg:left-20"
          src={menu}
          alt="tacos"
        />

        <span className=" absolute text-[25px] text-white bottom-10 right-10 font-train
                         lg:text-[36px] lg:right-20">
          Comida urbana, autos y<br /> el mejor ambiente
        </span>
      </div>
    </div>
  );
};

export default SliderItemOne;
