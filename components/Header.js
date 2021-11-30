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
              <a href="#gallery">Сделано</a>
            </li>
            <li>
              <a href="#prices">Цены</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          border-bottom: 1px solid lightgray;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          z-index: 1;
        }

        h1 {
          font-weight: 400;
        }

        h1 a {
          color: black;
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
          margin-right: 50px;
        }

        ul li:last-child {
          margin-right: 0;
        }

        a {
          text-decoration: none;
          color: gray;
        }
      `}</style>
    </>
  );
}
