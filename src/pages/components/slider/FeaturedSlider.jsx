import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"

import { Autoplay, FreeMode, Pagination } from "swiper";

import FeaturedCard from "../card/FeaturedCard";

const FeaturedSlider = () => {
  return (
    <>
      <div className="combo-slider mt-24 mt-sm-32">
        <Swiper
          grabCursor={true}
          
          spaceBetween={30}
         
          pagination={{
            clickable: true,
          }}

          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            
            <FeaturedCard image="/assets/image/japan.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard image="/assets/image/singapore.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard image="/assets/image/dubai.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard image="/assets/image/china.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard image="/assets/image/japan.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard image="/assets/image/japan.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedCard image="/assets/image/japan.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedSlider;