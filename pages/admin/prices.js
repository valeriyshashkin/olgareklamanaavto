import Head from "next/head";
import Layout from "../../components/Layout";
import Setting, { Skeletons } from "../../components/Setting";
import Input from "../../components/Input";
import useUser from "../../utils/user";
import useContent, { saveContent } from "../../utils/content";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSWRConfig } from "swr";

export default function Prices() {
  const [busPrice, setBusPrice] = useState("");
  const [simplePrice, setSimplePrice] = useState("");
  const [universalPrice, setUniversalPrice] = useState("");

  const router = useRouter();

  const changeBusPrice = (e) => setBusPrice(e.target.value);
  const changeSimplePrice = (e) => setSimplePrice(e.target.value);
  const changeUniversalPrice = (e) => setUniversalPrice(e.target.value);

  const saveBusPrice = () => {
    mutate("/api/content", { ...content, busPrice }, false);
    saveContent("busPrice", busPrice, () => mutate("/api/content"));
  };
  const saveSimplePrice = () => {
    mutate("/api/content", { ...content, simplePrice }, false);
    saveContent("simplePrice", simplePrice, () => mutate("/api/content"));
  };
  const saveUniversalPrice = () => {
    mutate("/api/content", { ...content, universalPrice }, false);
    saveContent("universalPrice", universalPrice, () => mutate("/api/content"));
  };

  const { mutate } = useSWRConfig();
  const { user, isUserLoading } = useUser();
  const { content, isContentLoading } = useContent();

  useEffect(() => {
    if (!isUserLoading && !isContentLoading) {
      setBusPrice(content.busPrice);
      setSimplePrice(content.simplePrice);
      setUniversalPrice(content.universalPrice);
    }
  }, [content, isUserLoading, isContentLoading]);

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
        onClick={saveSimplePrice}
      >
        <Input value={simplePrice} onChange={changeSimplePrice} postfix="₽" />
      </Setting>
      <Setting
        title="Цена универсала"
        desc="Укажите цену оклейки универсала, каблучка"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Цены."
        onClick={saveUniversalPrice}
      >
        <Input
          value={universalPrice}
          onChange={changeUniversalPrice}
          postfix="₽"
        />
      </Setting>
      <Setting
        title="Цена автобуса"
        desc="Укажите цену оклейки микроавтобуса, автобуса, грузовика"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Цены."
        onClick={saveBusPrice}
      >
        <Input value={busPrice} onChange={changeBusPrice} postfix="₽" />
      </Setting>
    </>
  );
}

Prices.getLayout = function getLayout(page) {
  return <Layout active="Цены">{page}</Layout>;
};
