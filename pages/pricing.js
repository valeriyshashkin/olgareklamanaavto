import Head from "next/head";
import Layout from "../components/Layout";
import Title from "../components/Title";

function Price({ title, price, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>от {price} руб.</p>
      <ul>
        {description.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
      <style jsx>{`
        div {
          width: 300px;
          border: 1px solid gray;
          border-radius: 6px;
        }

        h3 {
          margin: 0;
          padding: 26px;
          padding-bottom: 0;
        }

        ul {
          padding: 0;
          padding: 26px;
          margin-bottom: 0;
          margin-left: 16px;
        }

        li {
          color: gray;
        }

        p {
          color: gray;
          padding: 0 26px;
        }
      `}</style>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Цены | Olga.ru</title>
      </Head>
      <div>
        <Title>Цены</Title>
        <p>Выберите тариф, который вам подходит</p>
        <div className="pricing">
          <Price
            title="Небольшая наклейка"
            price="2400"
            description={["Логотип", "Контакты", "Слоган"]}
          />
          <Price title="Каблучок, универсал" price="5200" description={[]} />
          <Price
            title="Грузовик, автобус, микроавтобус"
            price="7800"
            description={[]}
          />
        </div>
      </div>
      <style jsx>{`
        div {
          margin: 0 auto;
          width: 1024px;
        }

        h1 {
          padding-top: 20px;
          text-align: center;
        }

        p {
          color: gray;
          text-align: center;
          padding-bottom: 20px;
        }

        .pricing {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}

Pricing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
