import React from "react";
import Container from "../layout/Container";
import Text from "../atoms/Text";
import TextLink from "../atoms/TextLink";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { IoPricetagOutline } from "react-icons/io5";
import { contentData } from "../../store/contentData";
import { title } from "process";
const BaliTourSection = () => {
  return (
    <>
      <Container>
        <div className="w-full h-fit pb-3 mt-6">
          <div className="w-full flex justify-between">
            <Text textStyle="Bold" value="Best Bali Tour" />
            <TextLink
              textStyle="SmallBold"
              value="View All"
              href="/balitour"
              color="Blue"
            />
          </div>
        </div>
      </Container>
      <Swiper spaceBetween={10} slidesPerView={2}>
        {contentData.tours.map((tour) => (
          <SwiperSlide key={tour.id} className="w-full rounded-bl-lg rounded-br-lg h-fit bg-white shadow-[5px_5px_35px_rgba(0,0,0,.1)]">
            <Image
              className="w-full rounded-tl-lg rounded-tr-lg"
              src={tour.image}
              width={300}
              height={300}
              alt="banner"
            />
            <div className="px-4 py-5 space-y-2">
              <Text textStyle="Bold" value={tour.title} />
              <Text
                textStyle="Description"
                value={tour.description}
              />
              <div className="flex items-center space-x-3">
                <Text textStyle="Bold" value={<IoPricetagOutline />} />
                <Text textStyle="Bold" value={`Rp. ${tour.pay.toLocaleString("id-ID")}/Pax`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BaliTourSection;
