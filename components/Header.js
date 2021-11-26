export default function Header() {
  return (
    <>
      <header>
        <nav>
          <h1>
            <a href="#">Olga.ru</a>
          </h1>
          <ul>
            <li>
              <a href="#">Каталог</a>
            </li>
            {/* <li>
              <a href="#calculator">Калькулятор</a>
            </li> */}
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
          border-bottom: 1px solid var(--secondary);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          z-index: 1;
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
          color: var(--primary);
        }
      `}</style>
    </>
  );
}
