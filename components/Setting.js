export default function Setting({ title, desc, tip, children }) {
  return (
    <section>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        {children}
      </div>
      <footer>
        <p>{tip}</p>
        <button>Сохранить</button>
      </footer>
      <style jsx>{`
        h4 {
          font-size: 24px;
          margin: 0;
        }

        p {
          margin: 10px 0;
          font-size: 14px;
        }

        button {
          background: var(--to-color);
          color: white;
          border-radius: 6px;
          padding: 10px;
          border: none;
          margin-left: auto;
          display: block;
        }

        section {
          border-radius: 6px;
          border: 1px solid var(--bordergray);
          margin-bottom: 20px;
        }

        div {
          padding: 20px;
        }

        footer {
          display: flex;
          align-items: center;
          background: var(--lightgray);
          padding: 20px;
          border-top: 1px solid var(--bordergray);
        }

        footer p {
          margin: 0;
          color: var(--gray);
        }
      `}</style>
    </section>
  );
}
