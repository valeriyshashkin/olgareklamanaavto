import Head from "next/head";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <>
      <Head>
        <title>Olga.ru - творческая оклейка автомобилей</title>
      </Head>
      Главная
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
