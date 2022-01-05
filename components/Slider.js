import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        width="36px"
        viewBox="0 0 24 24"
        onClick={onClick}
        className="close"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
      {!isFirst && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          width="48px"
          viewBox="0 0 24 24"
          className="left"
          onClick={prev}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      )}
      {!isLast && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          width="48px"
          viewBox="0 0 24 24"
          className="right"
          onClick={next}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
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
      <style jsx>{`
        section {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
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
          margin-top: 6px;
          margin-right: 6px;
          padding: 4px;
          fill: white;
        }

        .left,
        .right {
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border-radius: 50%;
        }

        @media (max-width: 580px) {
          .left,
          .right {
            display: none;
          }
        }

        .left {
          left: 0;
          margin-left: 20px;
        }

        .right {
          right: 0;
          margin-right: 20px;
        }
      `}</style>
    </section>
  );
}
