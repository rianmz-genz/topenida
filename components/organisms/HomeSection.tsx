import React, { FC } from "react";
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
import HomeCard from "../molecules/HomeCard";
const HomeSection: FC<SectionHomeProps> = ({ title, href, card }) => {
  const getCardList = () => {
    switch (card) {
      case "tour":
        return contentData.tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <HomeCard
              card={card}
              image={tour.image}
              title={tour.title}
              description={tour.description}
              pay={tour.pay}
              id={tour.id}
            />
          </SwiperSlide>
        ));
      case "explore":
        return contentData.explore.map((explore) => (
          <SwiperSlide key={explore.id}>
            <HomeCard
              card={card}
              image={explore.image}
              title={explore.title}
              description={explore.description}
              pay={explore.pay}
              id={explore.id}
            />
          </SwiperSlide>
        ));
        case "blog":
          return contentData.blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <HomeCard
                card={card}
                isBlog={true}
                image={blog.image}
                title={blog.title}
                description={blog.postAt}
                id={blog.id}
              />
            </SwiperSlide>
          ));
    }
  };
  return (
    <>
      <Container>
        <div className="w-full h-fit pb-3 mt-6">
          <div className="w-full flex justify-between">
            <Text textStyle="Bold" value={title} />
            <TextLink
              textStyle="SmallBold"
              value="View All"
              href={href}
              color="Blue"
            />
          </div>
        </div>
      </Container>
      <Swiper spaceBetween={10} slidesPerView={2} speed={700}>
        {getCardList()}
      </Swiper>
    </>
  );
};

export default HomeSection;
