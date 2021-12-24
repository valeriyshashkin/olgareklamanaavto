import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Input from "../../components/Input";
import Setting, { SettingSkeleton } from "../../components/Setting";
import useUser from "../../utils/user";
import useContent from "../../utils/content";
import Layout from "../../components/Layout";

function Skeletons() {
  return (
    <>
      <SettingSkeleton />
      <SettingSkeleton />
      <SettingSkeleton />
    </>
  );
}

export default function Contacts() {
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleInstagram = (e) => setInstagram(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleWhatsapp = (e) => setWhatsapp(e.target.value);

  const saveContacts = () =>
    fetch("/api/content/update", {
      method: "POST",
      body: JSON.stringify([
        { key: "instagram", value: instagram },
        { key: "whatsapp", value: whatsapp },
        { key: "email", value: email },
      ]),
    });

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
