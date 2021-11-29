import Head from "next/head";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function ShowCase() {
  return (
    <>
      <Head>
        <title>Демонстрация | Olga.ru</title>
      </Head>
      <div>
        <Title>Демонстрация</Title>
      </div>
      <style jsx>{`
        div {
          margin: 0 auto;
          width: 1024px;
        }
      `}</style>
    </>
  );
}

ShowCase.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
