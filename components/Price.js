export default function Price({ title, price, features }) {
  return (
    <>
      <div>
        <p className="title">{title}</p>
        <p className="price">от {price} рублей</p>
        <ul>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        div {
          max-width: 300px;
          padding: 0 20px;
        }

        div:first-child,
        div:last-child {
          margin: 0;
        }

        .title {
          font-size: 24px;
          margin: 0;
          font-weight: bold;
        }

        .price {
          margin: 0;
          font-size: 20px;
          color: var(--gray);
          margin-top: 10px;
        }

        @media (max-width: 720px) {
          h4 {
            font-size: 22px;
          }

          .price {
            font-size: 18px;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 720px) {
          div {
            flex-direction: column;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
