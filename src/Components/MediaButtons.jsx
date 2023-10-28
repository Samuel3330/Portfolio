import React from "react";

const MediaButtons = ({ children, url, color, hover }) => {
  return (
    <div className="w-auto text-center z-10">
      <a href={url} target="_blank" className={`${color} ${hover} `}>
        {children}
      </a>
    </div>
  );
};

export default MediaButtons;
