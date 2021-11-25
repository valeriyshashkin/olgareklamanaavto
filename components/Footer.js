export default function Footer() {
  return (
    <footer>
      Copyright © {new Date().getFullYear()} Olga.ru. Все права защищены.
      <style jsx>{`
        footer {
          border-top: 1px solid var(--secondary);
          padding: 20px;
          text-align: center;
          color: var(--secondary);
        }
      `}</style>
    </footer>
  );
}
