import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Price from "../components/Price";
import { getImages } from "../utils/getImages";
import Image from "next/image";
import { useState } from "react";
import Slider from "../components/Slider";
import Script from "next/script";
import { PlusCircleIcon } from "@heroicons/react/outline";

export default function Index({ images, preview }) {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openSlider = (src) => {
    document.body.style.overflow = "hidden";
    setShowSlider(true);
    setCurrentSlide(images.indexOf(src));
  };

  const closeSlider = () => {
    document.body.style.overflow = "auto";
    setShowSlider(false);
  };

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
      <h1 className="font-bold text-4xl sm:text-7xl mt-40 mb-28 text-center">
        <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Живописные
        </span>
        <span className="block">наклейки</span>
        <span className="block">на&nbsp;автомобиль</span>
      </h1>
      <section id="gallery" className="mx-auto max-w-screen-lg">
        <h3 className="text-4xl font-bold text-center mb-8">Сделано</h3>
        {preview && (
          <div className="mx-2">
            <label className="btn btn-outline w-full mb-8 btn-primary">
              <PlusCircleIcon className="h-6 w-6 mr-2" />
              Добавить фото
            </label>
          </div>
        )}
        {showSlider && (
          <Slider
            images={images}
            onClick={closeSlider}
            currentSlide={currentSlide}
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
      <section id="prices" className="mx-auto px-5 max-w-screen-lg">
        <h3 className="text-4xl font-bold text-center my-8">Цены</h3>
        <div className="flex flex-col sm:flex-row justify-center">
          <Price
            title="Небольшая красивая наклейка"
            price="1000"
            features={[
              "небольшая наклейка",
              "капот, дверь или заднее стекло",
              "эконом пленка",
            ]}
          />
          <Price
            title="Легковое авто, универсал, каблучок"
            price="2000"
            features={[
              "полная оклейка дверей, стекол",
              "капот и заднее стекло",
              "перфорация на стекло",
            ]}
          />
          <Price
            title="Микроавтобус, автобус, грузовик"
            price="3000"
            features={[
              "боковая часть полностью или частично",
              "переднее и заднее стекло",
              "перфорация на стекло",
            ]}
          />
        </div>
      </section>
      <section id="contacts" className="mx-auto px-5 max-w-screen-lg">
        <h3 className="text-4xl font-bold text-center mt-8">Контакты</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center my-12 sm:my-48">
          <Contact alt="WhatsApp" text="8-800-000-00-00" src="whatsapp" />
          <Contact alt="Instagram" text="@olgareklamanaavto" src="instagram" />
          <Contact alt="E-mail" text="admin@admin.com" src="email" />
        </div>
      </section>
      <footer className="border-t border-gray-300 p-5 text-center text-gray-500">
        Copyright © {new Date().getFullYear()} Olga. Все права защищены.
      </footer>
      {preview && <div className="h-10"></div>}
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
