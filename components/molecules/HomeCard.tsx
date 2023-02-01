import Image from "next/image";
import React from "react";
import Text from "../atoms/Text";
import { IoPricetagOutline } from "react-icons/io5";
import TextLink from "../atoms/TextLink";

const HomeCard = ({
  image,
  title,
  description,
  pay,
  id,
  card,
  isBlog = false,
}: HomeCardType) => {
  return (
    <div className="w-full rounded-bl-lg rounded-br-lg h-fit bg-white shadow-[0px_0px_35px_rgba(0,0,0,.07)]">
      <Image
        className="w-full rounded-tl-lg rounded-tr-lg"
        src={image}
        width={300}
        height={300}
        alt="banner"
      />
      <div className="px-4 py-5 space-y-2">
        <TextLink
          textStyle="Bold"
          value={title}
          href={`/${card}/detail/${id}`}
        />
        <TextLink
          textStyle="Description"
          value={description}
          href={`/${card}/detail/${id}`}
        />
        <div
          className={`flex items-center space-x-2 ${isBlog ? "hidden" : ""}`}
        >
          <Text textStyle="Bold" value={<IoPricetagOutline />} />
          <Text
            textStyle="Bold"
            value={`Rp. ${pay?.toLocaleString("id-ID")}/Pax`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
