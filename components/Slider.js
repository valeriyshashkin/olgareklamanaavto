import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
  XIcon,
} from "@heroicons/react/outline";

export default function Slider({ images, onClick, currentSlide }) {
  const [swiper, setSwiper] = useState(null);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);

  const handleSwiper = (s) => {
    setSwiper(s);
    updateArrows(s);
  };

  const prev = () => {
    swiper.slidePrev();
  };

  const next = () => {
    swiper.slideNext();
  };

  const updateArrows = (s) => {
    if (s.activeIndex === 0) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }

    if (s.activeIndex === images.length - 1) {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  };

  return (
    <section className="fixed top-0 bottom-0 right-0 left-0 bg-black flex w-full h-full z-10">
      <XIcon
        onClick={onClick}
        className="w-9 h-9 cursor-pointer absolute right-0 top-0 m-8 bg-white rounded-full z-20"
      />
      {!isFirst && (
        <ArrowCircleLeftIcon
          onClick={prev}
          className="z-20 w-10 h-10 cursor-pointer absolute bg-white rounded-full top-1/2 -translate-y-1/2 ml-8"
        />
      )}
      {!isLast && (
        <ArrowCircleRightIcon
          onClick={next}
          className="z-20 w-10 h-10 cursor-pointer absolute bg-white rounded-full top-1/2 -translate-y-1/2 right-0 mr-8"
        />
      )}
      <Swiper
        onSwiper={handleSwiper}
        initialSlide={currentSlide}
        onSlideChange={updateArrows}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <Image alt="" src={src} layout="fill" objectFit="contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
