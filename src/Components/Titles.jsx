import React from "react";

const Titles = ({ title }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-[20%] w-[50%] flex gap-4 flex-col items-center pt-20 py-10 justify-center">
        <div className="w-[80%] border-[1px] p-0 border-slate-500 g-slate-900 relative">
          <div className="absolute border-4 p-0 border-slate-900 bg-slate-900 w-14 sm:w-20 rounded-full bottom-0 top-0 left-0 right-0 m-auto"></div>
        </div>
        <div className="flex">
          <span className="text-xl sm:text-3xl text-slate-900 font-title">
            {" "}
            {"<"}&nbsp;
          </span>
          <h1 className="text-xl sm:text-3xl text-slate-900 font-title tracking-wide">
            {title}
          </h1>
          <span className="text-xl sm:text-3xl text-slate-900 font-title">
            {" "}
            &nbsp;{"/>"}
          </span>
        </div>
        <div className="w-full border-[1px] p-0 border-slate-500 bg-slate-900 relative">
          <div className="absolute border-4 p-0 border-slate-900 bg-slate-900 w-20 md:w-28 rounded-full bottom-0 top-0 left-0 right-0 m-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Titles;
