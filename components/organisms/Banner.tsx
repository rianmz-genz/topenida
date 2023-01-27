import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { contentData } from "../../store/contentData";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={10}
      loop
      pagination={{
        clickable: true,
        type: "bullets",
        clickableClass: "swiper-pagination",
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      modules={[Pagination]}
      slideClass="swiper-slide"
      slideActiveClass="swiper-slide-active"
    >
      {contentData.BannerImage.map((banner) => (
        <SwiperSlide key={banner}>
          <Image
            className="w-full rounded-lg"
            src={banner}
            width={300}
            height={300}
            alt="banner"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
