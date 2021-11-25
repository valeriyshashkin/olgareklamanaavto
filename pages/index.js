import Calculator from "../components/Calculator";
import Head from "next/head";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Olga.ru - креативная оклейка автомобилей</title>
      </Head>
      <Header />
      <section className="calculator">
        <Calculator />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
      <style jsx>{`
        section {
          width: 1024px;
          margin: 0 auto;
          padding-top: 73px;
        }
      `}</style>
    </>
  );
}
