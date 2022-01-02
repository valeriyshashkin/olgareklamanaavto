export default function Price({ title, price, right, children }) {
  return (
    <>
      <div className="container">
        <div className="half">{children}</div>
        <div className="text half">
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 80px 0;
          align-items: center;
          justify-content: flex-start;
        }

        .container:first-child,
        .container:last-child {
          margin: 0;
        }

        .half {
          width: 50%;
        }

        h4 {
          font-size: 30px;
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 20px;
          color: var(--gray);
          margin-top: 10px;
        }

        @media (max-width: 720px) {
          .half {
            width: 100%;
            text-align: center;
          }

          h4 {
            font-size: 22px;
          }

          p {
            font-size: 18px;
          }
        }
      `}</style>
      <style jsx>{`
        .container {
          flex-direction: ${right ? "row-reverse" : "row"};
        }

        @media (max-width: 720px) {
          .container {
            flex-direction: column;
            margin: 0;
          }
        }

        .text {
          padding-left: ${right ? "0" : "80px"};
          padding-right: ${right ? "80px" : "0"};
        }

        @media (max-width: 720px) {
          .text {
            text-align: center;
            padding: 0;
            margin: 20px 0 60px 0;
          }
        }
      `}</style>
    </>
  );
}
