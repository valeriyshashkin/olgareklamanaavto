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
      <div>Главная</div>
      <Footer />
      <style jsx>{`
        div {
          padding-top: 74px;
          margin: 0 auto;
          width: 1024px;
        }
      `}</style>
    </>
  );
}
