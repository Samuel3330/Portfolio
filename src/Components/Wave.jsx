import React from "react";
import "../App.css";

const Wave = ({ mode, x, y, colorOne, colorTwo, gradient, rotate, width }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${x} ${y} ${width} 500`}
        className={`w-[150vw] h-full absolute z-10 ${
          mode ? `top-[0px] right-[0px]` : `bottom-0 left-[0px]`
        }`}
      >
        <defs>
          <linearGradient
            id={`gradient${gradient}`}
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="5%" stopColor={colorOne}></stop>
            <stop offset="95%" stopColor={colorTwo}></stop>
          </linearGradient>
        </defs>
        <path
          stroke="none"
          fill={`url(#gradient${gradient})`}
          transform={`rotate(${rotate} 900 50)`}
          className={`transition-all duration-300 ease-in-out delay-150 path-${gradient}`}
          d={`M0,64L24,80C48,96,96,128,144,160C192,192,240,224,288,229.3C336,235,384,213,432,186.7C480,160,528,128,576,138.7C624,149,672,203,720,229.3C768,256,816,256,864,256C912,256,960,256,1008,218.7C1056,181,1104,107,1152,106.7C1200,107,1248,181,1296,218.7C1344,256,1392,256,1416,256L1440,256L1440,800L1416,800C1392,800,1344,800,1296,800C1248,800,1200,800,1152,800C1104,800,1056,800,1008,800C960,800,912,800,864,800C816,800,768,800,720,800C672,800,624,800
          ,576,800C528,800,480,800,432,800C384,800,336,800,288,800C240,800,192,800,144,800C96,800,48,800,24,800L0,800Z`}
        ></path>
      </svg>
    </>
  );
};

export default Wave;
