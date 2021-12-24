import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Input from "../../components/Input";
import Setting, { Skeletons } from "../../components/Setting";
import useUser from "../../utils/user";
import useContent, { saveContent } from "../../utils/content";
import Layout from "../../components/Layout";
import { useSWRConfig } from "swr";

export default function Contacts() {
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [isUpdated, setIsUpdated] = useState(false);

  const router = useRouter();

  const changeInstagram = (e) => setInstagram(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeWhatsapp = (e) => setWhatsapp(e.target.value);

  const saveInstagram = () => {
    setIsUpdated(true);
    mutate("/api/content", { ...content, instagram }, false);
    saveContent("instagram", instagram);
  };
  const saveWhatsapp = () => {
    setIsUpdated(true);
    mutate("/api/content", { ...content, whatsapp }, false);
    saveContent("whatsapp", whatsapp);
  };
  const saveEmail = () => {
    setIsUpdated(true);
    mutate("/api/content", { ...content, email }, false);
    saveContent("email", email);
  };

  const { mutate } = useSWRConfig();
  const { user, isUserLoading } = useUser();
  const { content, isContentLoading } = useContent();

  useEffect(() => {
    if (!isUserLoading && !isContentLoading && !isUpdated) {
      setInstagram(content.instagram);
      setWhatsapp(content.whatsapp);
      setEmail(content.email);
    }
  }, [content, isContentLoading, isUserLoading, isUpdated]);

  if (isUserLoading || isContentLoading) {
    return <Skeletons />;
  }

  if (user.error) {
    router.push("/admin");
    return <Skeletons />;
  }

  return (
    <>
      <Setting
        title="Ваш Instagram"
        desc="Введите свое имя пользователя в Instagram."
        tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
        onClick={saveInstagram}
      >
        <Input prefix="@" value={instagram} onChange={changeInstagram} />
      </Setting>
      <Setting
        title="Ваш WhatsApp"
        desc="Введите свой номер телефона в WhatsApp."
        tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
        onClick={saveWhatsapp}
      >
        <Input value={whatsapp} onChange={changeWhatsapp} />
      </Setting>
      <Setting
        title="Ваша электронная почта"
        desc="Введите адрес вашей электронной почты"
        tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
        onClick={saveEmail}
      >
        <Input value={email} onChange={changeEmail} />
      </Setting>
    </>
  );
}

Contacts.getLayout = function getLayout(page) {
  return (
    <Layout active="Контакты">
      <Head>
        <title>Контакты - Olga</title>
      </Head>
      {page}
    </Layout>
  );
};
