import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";

export default function Slider({ images, onClick, currentSlide }) {
  const [swiper, setSwiper] = useState(null);

  const handleSwiper = (s) => setSwiper(s);
  const prev = () => swiper.slidePrev();
  const next = () => swiper.slideNext();

  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        width="40px"
        viewBox="0 0 24 24"
        fill="gray"
        onClick={onClick}
        className="close"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        width="40px"
        viewBox="0 0 24 24"
        fill="gray"
        className="left"
        onClick={prev}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        width="40px"
        viewBox="0 0 24 24"
        fill="gray"
        className="right"
        onClick={next}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
      <Swiper onSwiper={handleSwiper} initialSlide={currentSlide}>
        {images.map((src) => (
          <SwiperSlide key={src}>
            <Image alt="" src={src} layout="fill" objectFit="contain" />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        section {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
        }

        .close,
        .left,
        .right {
          position: absolute;
          z-index: 2;
          cursor: pointer;
        }

        .close {
          top: 0;
          right: 0;
          margin-top: 20px;
          margin-right: 20px;
        }

        .left,
        .right {
          top: 50%;
          transform: translateY(-50%);
        }

        .left {
          left: 0;
          margin-left: 40px;
        }

        .right {
          right: 0;
          margin-right: 40px;
        }
      `}</style>
    </section>
  );
}
