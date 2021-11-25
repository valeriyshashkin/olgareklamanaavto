import Calculator from "../components/Calculator";
import Head from "next/head";

function Subtitle({ children }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          font-size: 40px;
        }
      `}</style>
    </>
  );
}

function Header() {
  return (
    <>
      <Head>
        <title>Olga.ru - креативная оклейка автомобилей</title>
      </Head>
      <header>
        <nav>
          <h1>
            <a href="#">Olga.ru</a>
          </h1>
          <ul>
            <li>
              <a href="#">Калькулятор</a>
            </li>
            <li>
              <a href="#gallery">Сделано</a>
            </li>
            <li>
              <a href="#contacts">Обращайтесь</a>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          border-bottom: 1px solid gray;
        }

        nav {
          width: 1024px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        ul {
          display: flex;
          list-style-type: none;
          margin-left: auto;
          padding: 0;
        }

        ul li {
          font-weight: bold;
          margin-right: 50px;
        }

        ul li:last-child {
          margin-right: 0;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </>
  );
}

export default function Index() {
  return (
    <>
      <Header />
      <section>
        <Calculator />
      </section>
      <section id="gallery">
        <Subtitle>Наклейки, воплощенные в реальность</Subtitle>
      </section>
      <section id="contacts"></section>
      <style jsx>{`
        section {
          width: 1024px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
