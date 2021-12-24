import Head from "next/head";
import Layout from "../../components/Layout";
import Setting, { Skeletons } from "../../components/Setting";
import Input from "../../components/Input";
import useUser from "../../utils/user";
import useContent from "../../utils/content";
import { useRouter } from "next/router";

export default function Prices() {
  const router = useRouter();

  const { user, isUserLoading } = useUser();
  const { content, isContentLoading } = useContent();

  if (isUserLoading || isContentLoading) {
    return <Skeletons />;
  }

  if (user.error) {
    router.push("/admin");
    return <Skeletons />;
  }

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
