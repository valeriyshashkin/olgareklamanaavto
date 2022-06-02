import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
  XIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";

export default function Slider({ images, onClick, currentSlide, preview }) {
  const [swiper, setSwiper] = useState(null);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <section>
      <div
        onClick={onClick}
        className="flex items-center justify-center w-9 h-9 cursor-pointer absolute right-0 top-0 m-4 sm:m-8 bg-white rounded-full z-20"
      >
        <XIcon className="w-7 h-7" />
      </div>
      {preview && (
        <>
          <label
            htmlFor="delete"
            className="cursor-pointer z-20 absolute border-2 border-red-500 right-0 w-9 h-9 flex items-center justify-center rounded-full m-4 mr-16 sm:m-8 sm:mr-24"
          >
            <TrashIcon className="w-7 h-7 stroke-red-500" />
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
        <ArrowCircleLeftIcon
          onClick={prev}
          className="hidden sm:block z-20 w-10 h-10 cursor-pointer absolute bg-white rounded-full top-1/2 -translate-y-1/2 ml-8"
        />
      )}
      {!isLast && (
        <ArrowCircleRightIcon
          onClick={next}
          className="hidden sm:block z-20 w-10 h-10 cursor-pointer absolute bg-white rounded-full top-1/2 -translate-y-1/2 right-0 mr-8"
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
      <style jsx>{`
        section {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
          z-index: 20;
          width: 100%;
          height: 100%;
          display: flex;
        }
      `}</style>
    </section>
  );
}
