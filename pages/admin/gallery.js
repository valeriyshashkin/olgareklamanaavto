import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

export default function Gallery() {
  return (
    <>
      <input id="file-upload" type="file" multiple accept="image/*" />
      <Button margin="12px 0" labelFor="file-upload">
        Добавить фото
      </Button>
      <style jsx>{`
        #file-upload {
          opacity: 0;
          width: 0;
        }

        label {
          height: 100%;
        }
      `}</style>
    </>
  );
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
