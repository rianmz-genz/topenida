import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import TourSection from "../../components/organisms/TourSection";
import TourSkeleton from "../../components/organisms/TourSkeleton";

const Index = () => {
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 500);
  }, []);
  return (
    <PageTemplate title="Tour">
      <section
        className={`${
          isSkeleton ? "fixed" : "hidden"
        } w-full max-w-[470px] bg-white z-50 h-screen top-0 left-1/2 -translate-x-1/2`}
      >
        <TourSkeleton />
      </section>
      <TourSection 
        title="Bali Tours" 
        section="Tour" 
      />
    </PageTemplate>
  );
};

export default Index;
