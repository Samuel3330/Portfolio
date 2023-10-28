import { useState } from "react";
import MediaButtons from "./MediaButtons";
import "../App.css";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiFacebook,
  SiIterm2,
} from "react-icons/si";
const Cart = () => {
  /* const [scrollMove, setScrollMove] = useState(false); */

  /*  window.addEventListener("scroll", (e) => {
    if (window.scrollY == 0) {
      setScrollMove(false);
    } else if (scrollMove == false && window.scrollY != 0) {
      setScrollMove(true);
    }
  }); */

  /* const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const observador = new IntersectionObserver(
    setScrollMove(!scrollMove),
    options
  ); */

  /* const test = document.getElementById("cart");
  console.log(test); */
  /* observador.observe(test); */

  return (
    <div
      className="flex w-full h-full justify-center items-center m-auto cart"
      id="cart"
    >
      <div className="flex h-full flex-col justify-center items-center gap-4 p-10 lg:gap-8 font-sans">
        <div
          className={`flex-none max-[300px]:w-44 w-64 sm:w-64 ring-1 p-2 rounded-full 
          grayscale z-10 shadow-2xl`}
        >
          <img
            src="Face1.jpg"
            className="rounded-full inset-0 w-full h-full object-cover"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="flex z-10">
          <h1 className=" max-[300px]:text-xl text-2xl sm:text-4xl z-10 name font-bold text-title text-white">
            Samuel Santana
          </h1>
        </div>
        <div className="bg-white justify-between flex text-center max-[300px]:w-[95%] shadow-sm px-4 py-2 rounded-full animated-typing z-10 text-gray-800 typewriter text-xl font-title sm:text-2xl">
          {"< "}
          <p>&nbsp;</p>
          <span className="text-xl sm:text-2xl transition-all duration-75 contenedor typing cursor-pointer"></span>
          <p>&nbsp;</p>
          {" />"}
        </div>
        <div className="flex w-full flex-row items-center justify-center gap-5">
          <MediaButtons
            url={"https://github.com/Samuel3330"}
            color={"text-gray-200"}
            hover={"hover:text-white text-2xl xl:text-3xl"}
          >
            <SiGithub />
          </MediaButtons>
          <MediaButtons
            url={"www.linkedin.com/in/investing-dep-aa4209266"}
            color={"text-gray-200"}
            hover={"hover:text-white text-2xl xl:text-3xl"}
          >
            <SiLinkedin />
          </MediaButtons>
          <MediaButtons
            url={"https://instagram.com/samy.front?igshid=NzZlODBkYWE4Ng=="}
            color={"text-gray-200"}
            hover={"hover:text-white text-2xl xl:text-3xl"}
          >
            <SiInstagram />
          </MediaButtons>
          <MediaButtons
            url={
              "https://www.facebook.com/profile.php?id=100008254805130&mibextid=ZbWKwL"
            }
            color={"text-gray-200"}
            hover={"hover:text-white text-2xl xl:text-3xl"}
          >
            <SiFacebook />
          </MediaButtons>
        </div>
      </div>
    </div>
  );
};

export default Cart;
