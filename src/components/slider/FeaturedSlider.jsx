import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Pagination } from "swiper";

import FeaturedCard from "../card/FeaturedCard";

import { useGetCategoryPackageQuery } from "../../../frontend/services/api";

const FeaturedSlider = () => {
  const { data: packages } = useGetCategoryPackageQuery("featured");
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
          {packages?.data?.map((data, i) => {
            if (data.destinations.length >= 2) {
              return (
                <SwiperSlide key={i}>
                  <FeaturedCard
                    image={data.image}
                    name={data.name}
                    price={data.adult_price}
                    description={data.short_description}
                    slug={data.slug}
                    type="combo"
                  />
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={i}>
                  <FeaturedCard
                    image={data.image}
                    name={data.name}
                    price={data.adult_price}
                    description={data.short_description}
                    slug={data.slug}
                  />
                </SwiperSlide>
              );
            }
          })}
          {console.log(packages)}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedSlider;
