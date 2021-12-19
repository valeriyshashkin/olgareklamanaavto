import Link from "next/link";

function NavigationLink({ href, children }) {
  return (
    <li>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
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
    </li>
  );
}

export default function NavigationBar() {
  return (
    <div>
      <ul>
        <NavigationLink href="/admin/contacts">Контакты</NavigationLink>
        <NavigationLink href="/admin/prices">Цены</NavigationLink>
        <NavigationLink href="/admin/gallery">Галерея</NavigationLink>
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
