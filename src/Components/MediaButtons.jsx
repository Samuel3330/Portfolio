import React from "react";

const MediaButtons = ({ children, url }) => {
  return (
    <div className="w-auto text-center z-10">
      <a
        href={url}
        className={`text-gray-200 hover:text-white text-2xl xl:text-3xl rounded-full`}
      >
        {children}
      </a>
    </div>
  );
};

export default MediaButtons;
