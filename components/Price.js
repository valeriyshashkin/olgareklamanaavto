export default function Price({ title, price, features }) {
  return (
    <>
      <div className="container">
        <p className="title">{title}</p>
        <p className="price">от {price} рублей</p>
        {features.map((f, i) => (
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <div key={i}>{f}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 300px;
          padding: 0 20px;
        }

        .container:last-child {
          margin: 0;
        }

        .item {
          display: flex;
          margin: 20px 0;
          align-items: center;
        }

        .item svg {
          fill: var(--to-color);
          min-width: 24px;
        }

        .item div {
          margin-left: 10px;
        }

        .title {
          font-size: 24px;
          margin: 0;
          font-weight: 600;
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

        @media (max-width: 580px) {
          .container {
            margin-bottom: 40px;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 720px) {
          .container {
            flex-direction: column;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}
