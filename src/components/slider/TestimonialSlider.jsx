import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/navigation";

import TestimonialCard from "../card/TestimonialCard";

import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Navigation]);

import { useGetTestimonialsQuery } from "../../../frontend/services/api";

const TestimonialSlider = () => {
  const { data: testimonial } = useGetTestimonialsQuery();
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
      <div className="testimonials-slider ">
        <Swiper
          grabCursor={true}
          spaceBetween={60}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="dealsSwiper"
          ref={swiperRef}
        >
          {testimonial?.data.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <TestimonialCard
                  name={data.name}
                  image={data.image}
                  position={data.position}
                  description={data.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="d-flex gap-4 arrows">
          <button className="prev flex-center-center" onClick={goPrev}>
            <HiArrowSmLeft />
          </button>
          <button className="next flex-center-center" onClick={goNext}>
            <HiArrowSmRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
