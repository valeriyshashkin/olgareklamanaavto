import Head from "next/head";
import Layout from "../../components/Layout";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Галерея - Olga</title>
      </Head>
      nothing...
    </>
  );
}

Gallery.getLayout = function getLayout(page) {
  return <Layout active="Галерея">{page}</Layout>;
};
