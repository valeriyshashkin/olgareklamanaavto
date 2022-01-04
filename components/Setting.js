import Button from "./Button";

export function Skeletons() {
  return (
    <>
      <SettingSkeleton />
      <SettingSkeleton />
      <SettingSkeleton />
    </>
  );
}

function SettingSkeleton() {
  return (
    <section>
      <div>
        <h4></h4>
        <p></p>
      </div>
      <footer>
        <p></p>
      </footer>
      <style jsx>{`
        h4 {
          margin: 0;
          height: 24px;
          width: 240px;
          background: var(--skeletongray);
          border-radius: 6px;
        }

        p {
          margin: 10px 0;
          height: 14px;
          background: var(--skeletongray);
          border-radius: 6px;
          width: 400px;
          margin-bottom: 80px;
        }

        @media (max-width: 580px) {
          p {
            width: 220px;
          }

          h4 {
            width: 200px;
          }
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

export default function Setting({ title, desc, tip, children, onClick }) {
  return (
    <section>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        {children}
      </div>
      <footer>
        <p>{tip}</p>
        <Button onClick={onClick} margin="0 0 0 auto">
          Сохранить
        </Button>
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
