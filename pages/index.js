import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getContent } from "../utils/getContent";
import Contact from "../components/Contact";
import Price from "../components/Price";
import { getImages } from "../utils/getImages";
import { GalleryRow, GalleryItem } from "../components/Gallery";
import prepareImages from "../utils/prepareImages";
import Image from "next/image";
import { useState } from "react";
import Slider from "../components/Slider";

export default function Index({ content, images }) {
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
      <Header />
      <h1>
        <span className="colorful">Живописные</span>
        <span>наклейки</span>
        <span>на&nbsp;автомобиль</span>
      </h1>
      <section id="gallery">
        <h3>Сделано</h3>
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
        <h3>Цены</h3>
        <div className="prices">
          <Price
            title="Небольшая красивая наклейка"
            price={content.simplePrice}
            features={[
              "небольшая наклейка",
              "капот, дверь или заднее стекло",
              "эконом пленка",
            ]}
          />
          <Price
            title="Легковое авто, универсал, каблучок"
            price={content.universalPrice}
            features={[
              "полная оклейка дверей, стекол",
              "капот и заднее стекло",
              "перфорация на стекло",
            ]}
          />
          <Price
            title="Микроавтобус, автобус, грузовик"
            price={content.busPrice}
            features={[
              "боковая часть полностью или частично",
              "переднее и заднее стекло",
              "перфорация на стекло",
            ]}
          />
        </div>
      </section>
      <section id="contacts">
        <h3>Контакты</h3>
        <div className="contacts">
          <Contact alt="WhatsApp" text={content.whatsapp} src="whatsapp" />
          <Contact alt="Instagram" text={content.instagram} src="instagram" />
          <Contact alt="E-mail" text={content.email} src="email" />
        </div>
      </section>
      <Footer />
      <style jsx>{`
        h1 {
          padding-top: 130px;
          margin: 0 auto;
          color: var(--to-color);
          text-align: center;
          font-size: 80px;
        }

        h3 {
          text-align: center;
          font-size: 40px;
          padding-top: 100px;
          margin-top: 0;
        }

        @media (max-width: 720px) {
          h1 {
            font-size: 55px;
          }

          h3 {
            font-size: 40px;
          }
        }

        @media (max-width: 520px) {
          h1 {
            font-size: 45px;
          }

          h3 {
            font-size: 30px;
          }
        }

        @media (max-width: 420px) {
          h1 {
            font-size: 35px;
          }
        }

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
  const content = await getContent();
  const images = await getImages();

  return {
    props: { content, images },
    revalidate: 60,
  };
}
