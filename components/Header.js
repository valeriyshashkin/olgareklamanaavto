import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <h1>
            <Link href="/" passHref>
              <a>Olga.ru</a>
            </Link>
          </h1>
          <ul>
            <li>
              <Link href="/showcase" passHref>
                <a>Демонстрация</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing" passHref>
                <a>Цены</a>
              </Link>
            </li>
            <li>
              <Link href="/contacts" passHref>
                <a>Контакты</a>
              </Link>
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
