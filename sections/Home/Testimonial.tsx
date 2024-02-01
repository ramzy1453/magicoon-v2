import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import TestimonialItem from "@/components/Home/TestimonialItem";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  return (
    <>
      <div className="divider text-primary text-xl">TESTIMONIALS</div>
      <p className="text-primary text-3xl md:text-5xl font-bold text-center">
        What do Say About us?
      </p>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
      >
        {Array(6)
          .fill(0)
          .map(() => (
            <SwiperSlide>
              <TestimonialItem />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
