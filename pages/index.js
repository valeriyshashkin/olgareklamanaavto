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
        <span>Живописные</span> наклейки на&nbsp;автомобиль
      </h1>
      <section id="gallery">
        <h3>Сделано</h3>
        {showSlider && <Slider images={images} onClick={closeSlider} currentSlide={currentSlide} />}
        {prepareImages(images).map((row, i) => (
          <GalleryRow key={i}>
            {row.map((src, j) => (
              <GalleryItem onClick={() => openSlider(src)} key={j}>
                {src && (
                  <Image
                    alt=""
                    objectFit="scale-down"
                    src={src}
                    layout="fill"
                  />
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
            alt=""
            src="06082021-002005-1.jpg"
            title="Простая наклейка"
            price={`от ${content.simplePrice} рублей`}
          />
          <Price
            right
            alt=""
            src="06082021-002005-1.jpg"
            title="Универсал, каблучок"
            price={`от ${content.universalPrice} рублей`}
          />
          <Price
            alt=""
            src="06082021-002005-1.jpg"
            title="Микроавтобус, автобус, грузовик"
            price={`от ${content.busPrice} рублей`}
          />
        </div>
      </section>
      <section id="contacts">
        <h3>Контакты</h3>
        <div className="contacts">
          <Contact
            alt="WhatsApp"
            text={content.whatsapp}
            src="whatsapp"
          ></Contact>
          <Contact
            alt="Instagram"
            text={content.instagram}
            src="instagram"
          ></Contact>
          <Contact alt="E-mail" text={content.email} src="email"></Contact>
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
          width: 700px;
        }

        section {
          width: 1024px;
          margin: 0 auto;
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
          flex-direction: column;
          align-items: center;
        }

        h3 {
          text-align: center;
          font-size: 40px;
          padding-top: 100px;
          margin-top: 0;
        }

        span {
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
