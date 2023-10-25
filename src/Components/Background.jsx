import { useState } from "react";
import "../App.css";
import Wave from "./Wave";
import Cart from "./Cart";

/*  */

const Background = () => {
  const width = window.innerWidth;
  function positionBottom(y) {
    if (width < 450) {
      return y - 1100 + width;
    } else if (width < 900) {
      return y - 900 + width;
    } else if (width < 1200) {
      return y - 1200 + width;
    } else if (width < 1400) {
      return y - 1400 + width;
    } else if (width < 1600) {
      return y - 1600 + width;
    } else if (width < 1800) {
      return y - 1800 + width;
    }
  }
  function positionTop(y) {
    if (width < 450) {
      return y + 900 - width;
    } else if (width < 900) {
      return y + 900 - width;
    } else if (width < 1200) {
      return y + 1200 - width;
    } else if (width < 1400) {
      return y + 1400 - width;
    } else if (width < 1600) {
      return y + 1600 - width;
    } else if (width < 1800) {
      return y + 1800 - width;
    }
  }

  return (
    <>
      <section
        className="w-full h-auto min-h-[100vh] overflow-hidden relative bg-fixed hero"
        id="hero"
      >
        <Wave
          x={width < 450 ? 340 : 0}
          width={width < 450 ? 740 : 1440}
          y={positionBottom(width < 450 ? 200 : 0)}
          mode={true}
          colorOne="#6643FF"
          colorTwo="#1a1241"
          gradient="3"
          rotate="90"
        ></Wave>
        <Wave
          x={0}
          width={1440}
          y={positionTop(-100)}
          mode={true}
          colorOne="#437EFF"
          colorTwo="#101d3b"
          gradient="5"
          rotate="145"
        ></Wave>
        <Wave
          x={0}
          width={1440}
          y={positionBottom(-300)}
          mode={true}
          colorOne="#FF437E"
          colorTwo="#3f101f"
          gradient="4"
          rotate="45"
        ></Wave>
        <Wave
          x={450}
          width={1440}
          y={positionTop(190)}
          mode={false}
          colorOne="#6643FF"
          colorTwo="#1a1241"
          gradient="2"
          rotate="-115"
        ></Wave>
        <Wave
          x={200}
          width={1440}
          y={positionBottom(20)}
          mode={false}
          colorOne="#437EFF"
          colorTwo="#101d3b"
          gradient="0"
          rotate="-55"
        ></Wave>
        <Wave
          x={300}
          width={1440}
          y={positionBottom(-220)}
          mode={false}
          colorOne="#43DCFF"
          colorTwo="#234258"
          gradient="1"
          rotate="-22"
        ></Wave>
        <Cart />
      </section>
    </>
  );
};

export default Background;
