import React, { FC } from "react";
import { contentData } from "../../store/contentData";
import TourCard from "../molecules/TourCard";
import Text from "../atoms/Text";
import LineDivider from "../atoms/LineDivider";

const TourSection: FC<TourSectionProps> = ({ title, section }) => {
  const getCard = () => {
    switch (section) {
      case "Tour":
        return contentData.tours.map((tour) => (
          <TourCard
            pay={tour.pay}
            image={tour.image}
            id={tour.id}
            key={tour.id}
            title={tour.title}
            description={tour.description}
          />
        ))
      case "Explore":
        return contentData.explore.map((exploree) => (
            <TourCard
              pay={exploree.pay}
              image={exploree.image}
              id={exploree.id}
              key={exploree.id}
              title={exploree.title}
              description={exploree.description}
            />
          ))
    }
  };
  return (
    <>
      <LineDivider />
      <div className="w-full mt-6 mb-4 flex flex-col items-center justify-center">
        <Text textStyle="HeadingOne" color="Gray" value={title} />
        <div className="w-2/12 mt-2 bg-blue h-1 rounded-full"></div>
      </div>
      <div className="space-y-5">{getCard()}</div>
    </>
  );
};

export default TourSection;
