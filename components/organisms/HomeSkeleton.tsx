import React from "react";

const HomeSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-between px-4 mt-6 pt-2">
        <div className="bg-slate-300  animate-pulse w-4/12 h-8 rounded-full"></div>
        <div className="bg-slate-300  animate-pulse w-8 h-8 rounded-full"></div>
      </div>
      <div className="mt-8 pt-2 px-4">
        <div className="w-full bg-slate-300 h-56 animate-pulse rounded-lg"></div>
      </div>
      <div className="w-full flex justify-between px-4 mt-6">
        <div className="bg-slate-300  animate-pulse w-4/12 h-8 rounded-full"></div>
        <div className="bg-slate-300  animate-pulse w-2/12 h-8 rounded-full"></div>
      </div>
      <div className="w-full px-4 mt-3 grid grid-cols-2 gap-3">
        <div className="w-full h-72 bg-slate-300 animate-pulse rounded-lg"></div>
        <div className="w-full h-72 bg-slate-300 animate-pulse rounded-lg"></div>
      </div>
      <div className="mt-8 pt-2 px-4">
        <div className="w-full bg-slate-300 h-56 animate-pulse rounded-lg"></div>
      </div>
      <div className="w-full flex justify-between px-4 mt-6">
        <div className="bg-slate-300  animate-pulse w-4/12 h-8 rounded-full"></div>
        <div className="bg-slate-300  animate-pulse w-2/12 h-8 rounded-full"></div>
      </div>
    </>
  );
};

export default HomeSkeleton;
