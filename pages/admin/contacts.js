import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Input from "../../components/Input";
import Setting from "../../components/Setting";
import useUser from "../../utils/user";
import Layout from "../../components/Layout";

export default function Contacts() {
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [busPrice, setBusPrice] = useState("");
  const [simplePrice, setSimplePrice] = useState("");
  const [universalPrice, setUniversalPrice] = useState("");

  const router = useRouter();

  const handleInstagram = (e) => setInstagram(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleWhatsapp = (e) => setWhatsapp(e.target.value);
  const handleBusPrice = (e) => setBusPrice(e.target.value);
  const handleSimplePrice = (e) => setSimplePrice(e.target.value);
  const handleUniversalPrice = (e) => setUniversalPrice(e.target.value);

  const saveContacts = () =>
    fetch("/api/content/update", {
      method: "POST",
      body: JSON.stringify([
        { key: "instagram", value: instagram },
        { key: "whatsapp", value: whatsapp },
        { key: "email", value: email },
      ]),
    });

  const savePrices = () =>
    fetch("/api/content/update", {
      method: "POST",
      body: JSON.stringify([
        { key: "simplePrice", value: simplePrice },
        { key: "universalPrice", value: universalPrice },
        { key: "busPrice", value: busPrice },
      ]),
    });

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((res) => {
        for (const { key, value } of res.content) {
          switch (key) {
            case "instagram":
              setInstagram(value);
              break;
            case "whatsapp":
              setWhatsapp(value);
              break;
            case "email":
              setEmail(value);
              break;
            case "simplePrice":
              setSimplePrice(value);
              break;
            case "universalPrice":
              setUniversalPrice(value);
              break;
            case "busPrice":
              setBusPrice(value);
          }
        }
      });
  }, []);

  const { user, isLoading } = useUser();

  if (isLoading) {
    return "Загрузка...";
  }

  if (user.error) {
    router.push("/admin");
    return "Загрузка...";
  }

  return (
    <>
      <Head>
        <title>Контакты - Olga</title>
      </Head>
      <Setting
        title="Ваш Instagram"
        desc="Введите свое имя пользователя в Instagram."
        tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
      >
        <Input prefix="@" value={instagram} onChange={handleInstagram} />
      </Setting>
      <Setting
        title="Ваш WhatsApp"
        desc="Введите свой номер телефона в WhatsApp."
        tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
      >
        <Input value={whatsapp} onChange={handleWhatsapp} />
      </Setting>
      <Setting
        title="Ваша электронная почта"
        desc="Введите адрес вашей электронной почты"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
      >
        <Input value={email} onChange={handleEmail} />
      </Setting>
    </>
  );
}

Contacts.getLayout = function getLayout(page) {
  return <Layout active="Контакты">{page}</Layout>;
};
