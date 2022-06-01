import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Price from "../components/Price";
import { getImages } from "../utils/getImages";
import { GalleryRow, GalleryItem } from "../components/Gallery";
import prepareImages from "../utils/prepareImages";
import Image from "next/image";
import { useState } from "react";
import Slider from "../components/Slider";
import Script from "next/script";

export default function Index({ images }) {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openSlider = (src) => {
    if (!src) {
      return;
    }

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
      <Header />
      <h1 className="font-bold text-4xl sm:text-7xl mt-40 mb-28 text-center">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Живописные
        </span>
        <span>наклейки</span>
        <span>на&nbsp;автомобиль</span>
      </h1>
      <section id="gallery">
        <h3 className="text-4xl font-bold text-center mb-8">Сделано</h3>
        {showSlider && (
          <Slider
            images={images}
            onClick={closeSlider}
            currentSlide={currentSlide}
          />
        )}
        {prepareImages(images).map((row, i) => (
          <GalleryRow key={i}>
            {row.map((src, j) => (
              <GalleryItem onClick={() => openSlider(src)} key={j}>
                {src && (
                  <Image alt="" objectFit="cover" src={src} layout="fill" />
                )}
              </GalleryItem>
            ))}
          </GalleryRow>
        ))}
      </section>
      <section id="prices">
        <h3 className="text-4xl font-bold text-center my-8">Цены</h3>
        <div className="prices">
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
      <section id="contacts">
        <h3 className="text-4xl font-bold text-center mt-8">Контакты</h3>
        <div className="contacts">
          <Contact alt="WhatsApp" text="whatsapp" src="whatsapp" />
          <Contact alt="Instagram" text="instagram" src="instagram" />
          <Contact alt="E-mail" text="email" src="email" />
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 20px;
        }

        #gallery {
          padding: 0;
        }

        .image-row {
          display: flex;
          padding-bottom: 20px;
        }

        .image-row:last-child {
          padding-bottom: 0;
        }

        .prices {
          display: flex;
          justify-content: center;
        }

        span {
          display: block;
        }

        .colorful {
          background-image: linear-gradient(
            to right,
            var(--from-color),
            var(--to-color)
          );
          color: transparent;
          background-clip: text;
        }

        .contacts {
          margin: 200px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 580px) {
          .contacts {
            flex-direction: column;
            margin: 50px 0;
          }

          .prices {
            align-items: center;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const images = await getImages();

  return {
    props: { images },
    revalidate: 60,
  };
}
