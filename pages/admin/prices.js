import Head from "next/head";
import Layout from "../../components/Layout";
import Setting from "../../components/Setting";
import Input from "../../components/Input";

export default function Prices() {
  return (
    <>
      <Head>
        <title>Цены - Olga</title>
      </Head>
      <Setting
        title="Цена простой наклейки"
        desc="Укажите цену простой наклейки на транспортное средство"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Цены."
      >
        <Input postfix="₽" />
      </Setting>
      <Setting
        title="Цена универсала"
        desc="Укажите цену оклейки универсала, каблучка"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Цены."
      >
        <Input postfix="₽" />
      </Setting>
      <Setting
        title="Цена автобуса"
        desc="Укажите цену оклейки микроавтобуса, автобуса, грузовика"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Цены."
      >
        <Input postfix="₽" />
      </Setting>
    </>
  );
}

Prices.getLayout = function getLayout(page) {
  return <Layout active="Цены">{page}</Layout>;
};
