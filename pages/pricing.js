import Head from "next/head";
import Layout from "../components/Layout";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Цены</title>
      </Head>
      Цены
    </>
  );
}

Pricing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};