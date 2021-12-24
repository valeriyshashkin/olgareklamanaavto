import Head from "next/head";
import Layout from "../../components/Layout";

export default function Gallery() {
  return <>nothing...</>;
}

Gallery.getLayout = function getLayout(page) {
  return (
    <Layout active="Галерея">
      <Head>
        <title>Галерея - Olga</title>
      </Head>
      {page}
    </Layout>
  );
};
