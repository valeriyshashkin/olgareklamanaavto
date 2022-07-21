import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { useState } from "react";
import Slider from "../components/Slider";
import Script from "next/script";
import { ChatIcon, MailIcon, CameraIcon } from "@heroicons/react/outline";

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
            {contacts.find((c) => c.key === "WhatsApp").value}
          </span>
        </div>
        <div className="mx-auto">
          <span className="ml-auto text-lg font-medium">
            <div className="flex justify-center">
              <CameraIcon className="w-7 h-7 mr-2" />
              Instagram
            </div>
            {contacts.find((c) => c.key === "Instagram").value}
          </span>
        </div>
        <div className="mx-auto">
          <span className="ml-auto text-lg font-medium">
            <div className="flex justify-center">
              <MailIcon className="w-7 h-7 mr-2" />
              Email
            </div>
            {contacts.find((c) => c.key === "Email").value}
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
          {photos.map((p, i) => (
            <div
              key={i}
              className="w-full pb-full relative cursor-pointer"
              onClick={() => openSlider(i)}
            >
              <Image
                alt=""
                objectFit="cover"
                src={p}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const contactsResponse = await fetch(
    `https://discord.com/api/channels/${process.env.DISCORD_CONTACTS_CHANNEL}/messages`,
    { headers: { authorization: `Bot ${process.env.DISCORD_TOKEN}` } }
  );
  const photosResponse = await fetch(
    `https://discord.com/api/channels/${process.env.DISCORD_PHOTOS_CHANNEL}/messages`,
    { headers: { authorization: `Bot ${process.env.DISCORD_TOKEN}` } }
  );

  const contacts = (await contactsResponse.json()).map((m) => {
    const [key, value] = m.content.split(" ");
    return {
      key,
      value,
    };
  });

  let photos = [];
  for (let m of await photosResponse.json()) {
    for (let p of m.attachments) {
      photos.push(p.url);
    }
  }

  return {
    props: {
      photos,
      contacts,
    },
    revalidate: 60,
  };
}
