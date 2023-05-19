import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import DealCard from "../card/DealCard";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { useGetPackagesQuery } from "../../../frontend/services/api";

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
  const { data: deal } = useGetPackagesQuery();

  // const dayTourItems = deal?.data
  //   .filter(
  //     (item) =>

  //       item.category &&
  //       item.category.length > 0 &&
  //       item.category.some((cat) => cat.name == "Daytour")
  //   )

  //   .map((item, i) => (

  //     <SwiperSlide key={i}>
  //       <DealCard />
  //     </SwiperSlide>
  //   ));

  return (
    <>
      <div className="deals-slider mt-24 mt-sm-32">
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
            <DealCard
              name="Tokyo Japan"
              image="/assets/image/japan.jpeg"
              description=" Japan is truly timeless, a pplace where ancient traditions are
              fused with mordern life as if it were the most natural thing in
              the world."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard
              name="Tokyo Japan"
              image="/assets/image/japan.jpeg"
              description=" Japan is truly timeless, a pplace where ancient traditions are
              fused with mordern life as if it were the most natural thing in
              the world."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard
              name="Tokyo Japan"
              image="/assets/image/japan.jpeg"
              description=" Japan is truly timeless, a pplace where ancient traditions are
              fused with mordern life as if it were the most natural thing in
              the world."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard
              name="Tokyo Japan"
              image="/assets/image/japan.jpeg"
              description=" Japan is truly timeless, a pplace where ancient traditions are
              fused with mordern life as if it were the most natural thing in
              the world."
            />
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
