import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

function ImageWithMargin({ alt, src, margin }) {
  return (
    <div className="outer">
      <div className="inner">
        <Image alt={alt} src={src} layout="fill" />
      </div>
      <style jsx>{`
        .outer {
          margin-right: ${margin}px;
          width: 100%;
        }

        .outer:last-child {
          margin-right: 0;
        }

        .inner {
          position: relative;
          padding-bottom: 100%;
        }
      `}</style>
    </div>
  );
}

function Contact({ text, src }) {
  return (
    <div>
      <Image alt="" src={src} width={50} height={50} />
      <p>{text}</p>
      <style jsx>{`
        div {
          text-align: center;
          font-size: 20px;
          width: 300px;
        }
      `}</style>
    </div>
  );
}

function Price({ src, alt, title, price, right }) {
  return (
    <>
      {right ? (
        <div className="container">
          <div className="text">
            <h4>{title}</h4>
            <p>{price}</p>
          </div>
          <Image width={400} height={400} alt={alt} src={src} />
        </div>
      ) : (
        <div className="container">
          <Image width={400} height={400} alt={alt} src={src} />
          <div className="text">
            <h4>{title}</h4>
            <p>{price}</p>
          </div>
        </div>
      )}
      <style jsx>{`
        .container {
          display: flex;
          margin: 80px 0;
          align-items: center;
        }

        .container:first-child,
        .container:last-child {
          margin: 0;
        }

        h4 {
          font-size: 30px;
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 20px;
        }
      `}</style>
      <style jsx>{`
        .text {
          width: ${right ? "600px" : "520px"};
          padding-left: ${right ? "0" : "80px"};
        }
      `}</style>
    </>
  );
}

export default function Index() {
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
        <div className="image-row">
          <ImageWithMargin
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            margin={20}
          />
          <ImageWithMargin
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            margin={20}
          />
          <ImageWithMargin
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            margin={20}
          />
        </div>
        <div className="image-row">
          <ImageWithMargin
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            margin={20}
          />
          <ImageWithMargin
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            margin={20}
          />
          <ImageWithMargin
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            margin={20}
          />
        </div>
      </section>
      <section id="prices">
        <h3>Цены</h3>
        <div className="prices">
          <Price
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            title="Простая наклейка"
            price="от 2400 рублей"
          />
          <Price
            right
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            title="Универсал, каблучок"
            price="от 5200 рублей"
          />
          <Price
            alt=""
            src="/cloud/06082021-002005-1.jpg"
            title="Микроавтобус, автобус, грузовик"
            price="от 7800 рублей"
          />
        </div>
      </section>
      <section id="contacts">
        <h3>Контакты</h3>
        <div className="contacts">
          <Contact text="+7 (777) 777-77-77" src="/whatsapp.png" />
          <Contact text="@olgareklamanaavto" src="/instagram.png" />
          <Contact text="a@a.ru" src="/email.png" />
        </div>
      </section>
      <Footer />
      <style jsx>{`
        h1 {
          padding-top: 130px;
          margin: 0 auto;
          color: #0575e6;
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
          background-image: linear-gradient(to right, #00f260, #0575e6);
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
