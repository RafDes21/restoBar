import { useState } from "react";
import { SliderItemOne, SliderItemTree, SliderItemTwo } from "./components";

const Slider = () => {
  const [count, setCount] = useState(1);
  const [slider, setSlider] = useState(<SliderItemOne />);

  //   const automatic = () => {
  //     switch (count) {
  //       case 1:
  //         setSlider(<SliderItemTwo />);

  //         setCount(count + 1);
  //         break;
  //       case 2:
  //         setSlider(<SliderItemTree />);

  //         setCount(count + 1);
  //         break;
  //       case 3:
  //         setSlider(<SliderItemOne />);

  //         setCount(1);
  //         break;

  //       default:
  //         break;
  //     }
  //   };
  //   useEffect(() => {
  //     const destroy = setInterval(automatic, 5000);

  //     return () => {
  //       clearInterval(destroy);
  //     };
  //     //eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [count]);

  const change = (item: number) => {
    switch (item) {
      case 1:
        setSlider(<SliderItemOne />);
        setCount(1);
        break;
      case 2:
        setSlider(<SliderItemTwo />);
        setCount(2);
        break;
      case 3:
        setSlider(<SliderItemTree />);
        setCount(3);
        break;

      default:
        break;
    }
  };
  return (
    <div className="h-96 relative w-full
                    md:h-[400px]
                    lg:h-[750px]
                    ">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <div className="flex gap-4 p-3">
          <div
            className="h-3 w-3 border border-solid border-[#fad02c] rounded-xl
                       md:h-4 md:w-4"
            onClick={() => change(1)}
            style={{ background: count === 1 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
          <div
            className="h-3 w-3 border border-solid border-[#fad02c] rounded-xl
                       md:h-4 md:w-4"
            onClick={() => change(2)}
            style={{ background: count === 2 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
          <div
           className="h-3 w-3 border border-solid border-[#fad02c] rounded-xl
                     md:h-4 md:w-4"
            onClick={() => change(3)}
            style={{ background: count === 3 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
        </div>
      </div>
        {slider}
      {/* <button onClick={cambio}> click</button> */}
    </div>
  );
};

export default Slider;
