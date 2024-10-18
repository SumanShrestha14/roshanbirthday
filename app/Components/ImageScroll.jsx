"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

export default function ImageScroll() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1200}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img_7.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
