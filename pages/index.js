import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { useState } from "react";
import Slider from "../components/Slider";
import Script from "next/script";
import { ChatIcon, MailIcon, CameraIcon } from "@heroicons/react/outline";
import knex from "knex";

export default function Index({ photos, contacts }) {
  const [showSlider, setShowSlider] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openSlider = (slideNumber) => {
    document.body.style.overflow = "hidden";
    setShowSlider(true);
    setCurrentSlide(slideNumber);
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
      <h1 className="text-center px-4 font-bold text-4xl sm:text-7xl mt-24 mb-8 max-w-screen-lg mx-auto">
        Наклейки на&nbsp;автомобиль
      </h1>
      <div className="max-w-screen-lg mx-auto grid sm:grid-cols-3 gap-6">
        <div className="mx-auto">
          <span className="ml-auto text-lg font-medium">
            <div className="flex justify-center">
              <ChatIcon className="w-7 h-7 mr-2" />
              WhatsApp
            </div>
            {contacts.whatsapp}
          </span>
        </div>
        <div className="mx-auto">
          <span className="ml-auto text-lg font-medium">
            <div className="flex justify-center">
              <CameraIcon className="w-7 h-7 mr-2" />
              Instagram
            </div>
            {contacts.instagram}
          </span>
        </div>
        <div className="mx-auto">
          <span className="ml-auto text-lg font-medium">
            <div className="flex justify-center">
              <MailIcon className="w-7 h-7 mr-2" />
              Email
            </div>
            {contacts.email}
          </span>
        </div>
      </div>
      <section className="mx-auto max-w-screen-lg -mt-20 pt-20">
        <h3 className="text-center text-4xl font-bold px-4 my-8">Работы</h3>
        {showSlider && (
          <Slider
            photos={photos}
            onClick={closeSlider}
            currentSlide={currentSlide}
          />
        )}
        <div className="grid grid-cols-3 gap-1 sm:gap-4 mb-1 sm:mb-4">
          {photos.map((src, i) => (
            <div
              key={i}
              className="w-full pb-full relative cursor-pointer"
              onClick={() => openSlider(i)}
            >
              <Image alt="" objectFit="cover" src={src} layout="fill" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const db = knex({
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  const { option_value: email } = await db("wp_options")
    .where("option_name", "contacts_email")
    .select("option_value")
    .first();

  const { option_value: whatsapp } = await db("wp_options")
    .where("option_name", "contacts_whatsapp")
    .select("option_value")
    .first();

  const { option_value: instagram } = await db("wp_options")
    .where("option_name", "contacts_instagram")
    .select("option_value")
    .first();

  const photos = (
    await (await fetch("http://localhost/wp-json/wp/v2/media")).json()
  ).map(
    (image) =>
      `${process.env.PROTOCOL}://${process.env.DOMAIN}/wp-content/uploads/${image.media_details.file}`
  );

  return {
    props: {
      photos,
      contacts: {
        email,
        instagram,
        whatsapp,
      },
    },
    revalidate: 10,
  };
}
