import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Olga.ru - творческая оклейка автомобилей</title>
      </Head>
      <Header />
      <h1>
        <span>Живописные</span> наклейки на&nbsp;автомобиль
      </h1>
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

        span {
          background-image: linear-gradient(to right, #00f260, #0575e6);
          color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
}
