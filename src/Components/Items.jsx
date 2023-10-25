import React from "react";
import "../App.css";

const Items = ({ item, nivel }) => {
  return (
    <>
      <li
        className={`text-sm md:text-md text-gray-800 relative font-mono ${nivel} inline-block`}
      >
        {">"}
        &nbsp;
        {item}
      </li>
    </>
  );
};

export default Items;
