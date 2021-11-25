import Calculator from "../components/Calculator";
import Head from "next/head";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

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
      <section id="contacts"></section>
      <style jsx>{`
        section {
          width: 1024px;
          margin: 0 auto;
        }

        .calculator {
          margin-top: 73px;
        }
      `}</style>
    </>
  );
}
