import React from "react";

const Plantilla = ({ image, url }) => {
  return (
    <div className="w-full bg-cover relative h-auto">
      <a
        href={url}
        className="absolute top-0 left-0 right-0 bottom-0 margin-auto bg-transparent block w-full h-full hover:bg-[#00000096]"
      ></a>
      <img src={image} alt="" className="-z-10" />
    </div>
  );
};

export default Plantilla;
