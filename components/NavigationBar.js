import Link from "next/link";

function NavigationLink({ href, children, active }) {
  return (
    <li>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          font-size: 20px;
          display: block;
          padding: 20px;
          border-radius: 6px;
          margin-bottom: 10px;
          margin-right: 10px;
        }

        a:hover {
          background: var(--lightgray);
        }
      `}</style>
      <style jsx>{`
        a {
          color: ${active ? "black" : "var(--gray)"};
          font-weight: ${active ? "bold" : "initial"};
        }
      `}</style>
    </li>
  );
}

export default function NavigationBar({ active }) {
  return (
    <div>
      <ul>
        <NavigationLink href="/admin/contacts" active={active === "Контакты"}>
          Контакты
        </NavigationLink>
        <NavigationLink href="/admin/prices" active={active === "Цены"}>
          Цены
        </NavigationLink>
        <NavigationLink href="/admin/gallery" active={active === "Галерея"}>
          Галерея
        </NavigationLink>
      </ul>
      <style jsx>{`
        div {
          width: 300px;
        }

        ul {
          margin: 0;
          list-style: none;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
