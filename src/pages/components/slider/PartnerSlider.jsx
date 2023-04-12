import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

const PartnerSlider = () => {
  return (
    <>
      <div className="partner-slider ">
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
              slidesPerView: 2,
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
            <div className="flex-center">
              <Image
                src="/assets/image/partner1.png"
                width={200}
                height={90}
                alt="partner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-center">
              <Image
                src="/assets/image/partner2.png"
                width={200}
                height={90}
                alt="partner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-center">
              <Image
                src="/assets/image/partner3.png"
                width={200}
                height={90}
                alt="partner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-center">
              <Image
                src="/assets/image/partner4.png"
                width={200}
                height={90}
                alt="partner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PartnerSlider;
