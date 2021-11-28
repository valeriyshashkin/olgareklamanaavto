import Head from "next/head";
import Layout from "../components/Layout";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      Контакты
    </>
  );
}

Contacts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};