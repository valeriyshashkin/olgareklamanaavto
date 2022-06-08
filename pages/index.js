import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { getImages } from "../utils/getImages";
import Image from "next/image";
import { useState } from "react";
import Slider from "../components/Slider";
import Script from "next/script";
import {
  ChatIcon,
  PlusCircleIcon,
  MailIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";

export default function Index({ images, preview }) {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const openSlider = (src) => {
    document.body.style.overflow = "hidden";
    setShowSlider(true);
    setCurrentSlide(images.indexOf(src));
  };

  const closeSlider = () => {
    document.body.style.overflow = "auto";
    setShowSlider(false);
  };

  function uploadImage(e) {
    setLoading(true);
    fetch("/api/image/sign")
      .then((res) => res.json())
      .then(({ timestamp, signature }) => {
        const fd = new FormData();
        fd.append("file", e.target.files[0]);
        fd.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
        fd.append("timestamp", timestamp);
        fd.append("signature", signature);

        fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: fd }
        )
          .then((res) => res.json())
          .then(({ public_id }) => {
            fetch("/api/image/add", {
              method: "POST",
              body: JSON.stringify({ public_id }),
            }).then(() => location.reload());
          });
      });
  }

  return (
    <>
      <Head>
        <title>Olga - творческая оклейка автомобилей</title>
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <Header preview={preview} />
      <h1 className="text-center px-4 font-bold text-4xl sm:text-7xl mt-24 mb-8 max-w-screen-lg mx-auto">
        Наклейки на&nbsp;автомобиль
      </h1>
      <div className="max-w-screen-lg mx-auto grid sm:grid-cols-3 gap-6">
        <div className="mx-auto">
          <div className="flex">
            <ChatIcon className="w-7 h-7 mr-2" />
            <span className="ml-auto text-lg font-medium">8-800-000-00-00</span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex">
            <CameraIcon className="w-7 h-7 mr-2" />
            <span className="ml-auto text-lg font-medium">@olgareklamanaavto</span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex">
            <MailIcon className="w-7 h-7 mr-2" />
            <span className="ml-auto text-lg font-medium">admin@admin.com</span>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-screen-lg -mt-20 pt-20">
        <h3 className="text-center text-4xl font-bold px-4 my-8">Работы</h3>
        {preview && (
          <>
            <input
              id="upload"
              type="file"
              accept="image/*"
              hidden
              onChange={uploadImage}
            />
            <div className="mx-2">
              <label
                htmlFor="upload"
                className={classNames(
                  "btn btn-outline w-full mb-8 btn-primary",
                  { loading }
                )}
              >
                <PlusCircleIcon className="h-6 w-6 mr-2" />
                Добавить фото
              </label>
            </div>
          </>
        )}
        {showSlider && (
          <Slider
            images={images}
            onClick={closeSlider}
            currentSlide={currentSlide}
            preview={preview}
          />
        )}
        <div className="grid grid-cols-3 gap-1 sm:gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-full pb-full relative cursor-pointer"
              onClick={() => openSlider(src)}
            >
              <Image alt="" objectFit="cover" src={src} layout="fill" />
            </div>
          ))}
        </div>
      </section>
      <div className="h-4"></div>
    </>
  );
}

export async function getStaticProps(context) {
  const images = await getImages();

  if (context.preview) {
    return {
      props: {
        images,
        preview: true,
      },
    };
  }

  return {
    props: {
      images,
      preview: false,
    },
    revalidate: 60,
  };
}
