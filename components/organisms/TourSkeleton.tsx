import React from "react";

const TourSkeleton = () => {
  return (
    <>
      <div className="w-full flex justify-between px-4 mt-3 py-2 border-b">
        <div className="bg-slate-300 animate-pulse w-4/12 h-8 rounded-full"></div>
        <div className="bg-slate-300 animate-pulse w-8 h-8 rounded-full"></div>
      </div>
      <div className="w-full h-fit flex justify-center items-center mt-8">
        <div className="bg-slate-300 w-3/12 h-8 animate-pulse rounded-full"></div>
      </div>
      <div className="w-full h-fit px-4 mt-6">
        <div className="w-full bg-slate-300 animate-pulse rounded-lg h-32"></div>
      </div>
      <div className="w-full h-fit px-4 mt-6">
        <div className="w-full bg-slate-300 animate-pulse rounded-lg h-32"></div>
      </div>
      <div className="w-full h-fit px-4 mt-6">
        <div className="w-full bg-slate-300 animate-pulse rounded-lg h-32"></div>
      </div>
      <div className="w-full h-fit px-4 mt-6">
        <div className="w-full bg-slate-300 animate-pulse rounded-lg h-32"></div>
      </div>
      <div className="w-full h-fit px-4 mt-6">
        <div className="w-full bg-slate-300 animate-pulse rounded-lg h-32"></div>
      </div>
    </>
  );
};

export default TourSkeleton;
