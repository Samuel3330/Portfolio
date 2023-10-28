import React from "react";
import "../App.css";

const Items = ({ item, nivel }) => {
  return (
    <>
      <li
        className={`text-sm md:text-md font-title font-normal text-gray-800 relative ${nivel} inline-block`}
      >
        {">"}
        &nbsp;
        {item}
      </li>
    </>
  );
};

export default Items;
