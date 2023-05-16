import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import ComboCard from "../card/ComboCard";
import { useGetPackagesQuery } from "../../../frontend/services/api";

const ComboSlider = () => {
  const { data: packages } = useGetPackagesQuery();
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {packages?.data.map((data, i) => {
            if (data.destinations.length >= 2) {
              return (
                <SwiperSlide>
                  <ComboCard
                    image={data.image}
                    title={data.name}
                    description={data.short_description}
                    price={data.price}
                    slug={data.slug}
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ComboSlider;
