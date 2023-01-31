import React, { FC } from "react";
import Container from "../layout/Container";
import TextLink from "../atoms/TextLink";
import Text from "../atoms/Text";
import { IoPricetagOutline } from "react-icons/io5";

const TourCard: FC<TourCardProps> = ({
  id,
  title,
  description,
  pay,
  image,
}) => {
  return (
    <Container>
      <div className="w-full h-fit rounded-lg shadow-[0px_0px_35px_rgba(0,0,0,.07)] flex">
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className={`w-3/12 bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-bl-lg`}
        ></div>
        <div className="pl-3 w-9/12 py-2 space-y-1">
          <TextLink
            textStyle="HeadingTwo"
            value={title}
            href={`/tour/detail/${id}`}
          />
          <Text textStyle="DescriptionTourCard" value={description} />
          <div className={`flex items-center space-x-2`}>
            <Text textStyle="Bold" value={<IoPricetagOutline />} />
            <Text
              textStyle="Bold"
              value={`Rp. ${pay?.toLocaleString("id-ID")}/Pax`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TourCard;
