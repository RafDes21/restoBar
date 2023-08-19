import { useState } from "react";

import { SliderItemOne, SliderItemTwo, SliderItemTree } from "./components";

const Slider = () => {
  const [count, setCount] = useState(1);
  const [slider, setSlider] = useState(<SliderItemOne/>);

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
    <div>
      <div id="carrusel">
        <div className="buttons">
          <div
            onClick={() => change(1)}
            style={{ background: count === 1 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
          <div
            onClick={() => change(2)}
            style={{ background: count === 2 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
          <div
            onClick={() => change(3)}
            style={{ background: count === 3 ? "rgba(250, 208, 44, 1)" : "" }}
          ></div>
        </div>
        {slider}
      </div>
      {/* <button onClick={cambio}> click</button> */}
    </div>
  );
};

export default Slider;
