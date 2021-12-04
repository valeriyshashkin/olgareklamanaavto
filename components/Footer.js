export default function Footer() {
  return (
    <footer>
      Copyright © {new Date().getFullYear()} Olga. Все права защищены.
      <style jsx>{`
        footer {
          border-top: 1px solid lightgray;
          padding: 20px;
          text-align: center;
          color: gray;
        }
      `}</style>
    </footer>
  );
}
