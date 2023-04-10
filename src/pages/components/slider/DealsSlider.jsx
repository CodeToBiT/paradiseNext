import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import DealCard from "../card/DealCard";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation]);

const DealsSlider = () => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <div className="deals-slider mt-24 mt-sm-32">
        <Swiper
          grabCursor={true}
          spaceBetween={60}
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
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="dealsSwiper"
          ref={swiperRef}
        >
          <SwiperSlide>
            <DealCard />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard />
          </SwiperSlide>
        </Swiper>

        <button className="prev flex-center-center" onClick={goPrev}>
          <FaLongArrowAltLeft />
        </button>
        <button className="next flex-center-center" onClick={goNext}>
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};

export default DealsSlider;
