import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
  XIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { useEffect } from "react";

export default function Slider({ images, onClick, currentSlide, preview }) {
  const [swiper, setSwiper] = useState(null);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  function deleteImage() {
    setLoading(true);
    fetch("/api/image/delete", {
      method: "POST",
      body: JSON.stringify({
        public_id: images[swiper.activeIndex],
      }),
    }).then(() => location.reload());
  }

  return (
    <section
      className={classNames({
        "flex fixed top-0 bottom-0 left-0 right-0 bg-black w-full h-full z-20":
          mounted,
      })}
    >
      <div
        onClick={onClick}
        className="group absolute top-0 right-0 z-30 cursor-pointer w-20 h-20 sm:w-40 sm:h-40 flex items-center justify-center"
      >
        <XIcon className="h-10 stroke-gray-500 group-hover:stroke-white" />
      </div>
      {preview && (
        <>
          <label
            htmlFor="delete"
            className="group cursor-pointer h-20 w-20 sm:h-40 sm:w-40 z-30 absolute right-0 top-0 mr-20 sm:mr-40 flex items-center justify-center"
          >
            <TrashIcon className="h-10 group-hover:stroke-red-500 stroke-red-400" />
          </label>
          <input type="checkbox" id="delete" className="modal-toggle" />
          <label htmlFor="delete" className="modal cursor-pointer">
            <label className="modal-box relative space-y-4" htmlFor="">
              <h3 className="text-lg font-bold text-center">
                Вы уверены, что хотите удалить эту картинку?
              </h3>
              <button
                onClick={deleteImage}
                className={classNames("btn btn-error w-full btn-outline", {
                  loading,
                })}
              >
                Удалить
              </button>
              <label
                htmlFor="delete"
                className={classNames("btn btn-primary w-full", {
                  loading,
                })}
              >
                Отмена
              </label>
            </label>
          </label>
        </>
      )}
      {!isFirst && (
        <div
          onClick={prev}
          className="hidden sm:block group absolute top-0 bottom-0 left-0 w-40 cursor-pointer z-20"
        >
          <ChevronLeftIcon className="group-hover:stroke-white stroke-gray-500 h-10 top-1/2 -translate-y-1/2 absolute w-40" />
        </div>
      )}
      {!isLast && (
        <div
          onClick={next}
          className="hidden sm:block group absolute top-0 bottom-0 right-0 w-96 cursor-pointer z-20"
        >
          <ChevronRightIcon className="group-hover:stroke-white stroke-gray-500 h-10 top-1/2 -translate-y-1/2 right-0 absolute w-40" />
        </div>
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
