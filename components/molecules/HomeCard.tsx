import Image from "next/image";
import React from "react";
import Text from "../atoms/Text";
import { IoPricetagOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const HomeCard = ({
  image,
  title,
  description,
  pay,
  id,
  card,
  isBlog = false,
}: HomeCardType) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/${card}/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      className="w-full cursor-pointer rounded-bl-lg rounded-br-lg h-fit bg-white shadow-[5px_5px_25px_rgba(0,0,0,.07)]"
    >
      <Image
        className="w-full rounded-tl-lg rounded-tr-lg"
        src={image}
        width={300}
        height={300}
        alt="banner"
      />
      <div className="px-4 py-5 space-y-2">
        <Text textStyle="Bold" value={title} />
        <Text textStyle="Description" value={description} />
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