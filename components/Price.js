import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Price({ title, price, features }) {
  return (
    <>
      <div className="container">
        <p className="text-xl font-bold">{title}</p>
        <p className="price">от <span className="font-bold">{price}</span> рублей</p>
        {features.map((f, i) => (
          <div className="flex items-center my-4" key={i}>
            <BadgeCheckIcon className="w-6 h-6 shrink-0 fill-blue-500 mr-2" />
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
