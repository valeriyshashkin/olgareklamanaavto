import Head from "next/head";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Контакты | Olga.ru</title>
      </Head>
      <Title>Контакты</Title>
    </>
  );
}

Contacts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
