import React from "react";

const DetailSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-between px-4 mt-3 py-2 border-b">
        <div className="bg-slate-300 animate-pulse w-4/12 h-8 rounded-full"></div>
        <div className="bg-slate-300 animate-pulse w-8 h-8 rounded-full"></div>
      </div>
      <div className="bg-slate-300 animate-pulse w-6/12 mt-5 ml-4 h-8 rounded-full"></div>
      <div className="bg-slate-300 animate-pulse w-5/12 mt-3 ml-4 h-6 rounded-full"></div>
      <div className="flex justify-between items-center mt-5 mx-4">
        <div className="bg-slate-300 animate-pulse w-4/12 h-8 rounded-full"></div>
        <div className="bg-slate-300 animate-pulse w-3/12 h-8 rounded-lg"></div>
      </div>
      <div className="w-11/12 mx-auto bg-slate-300 animate-pulse rounded-xl h-[470px] mt-5"></div>
    </>
  );
};

export default DetailSkeleton;
