import Head from "next/head";
import Layout from "../components/Layout";

export default function ShowCase() {
  return (
    <>
      <Head>
        <title>Демонстрация</title>
      </Head>
      Демонстрация
    </>
  );
}

ShowCase.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};