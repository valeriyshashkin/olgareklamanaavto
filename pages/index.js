import Calculator from "../components/Calculator";

export default function Index() {
  return (
    <>
      <header>
        <nav>
          <h1 className="logo">Olga.ru</h1>
          <ul>
            <li>Калькулятор</li>
            <li>Сделано</li>
            <li>Обращайтесь</li>
          </ul>
        </nav>
      </header>
      <section className="calculator">
        <Calculator />
      </section>
      <section className="gallery"></section>
      <section className="contacts"></section>
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

        section {
          width: 1024px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
