export default function Footer() {
  return (
    <footer>
      Copyright © {new Date().getFullYear()} Olga.ru. Все права защищены.
      <style jsx>{`
        footer {
          border-top: 1px solid gray;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}
