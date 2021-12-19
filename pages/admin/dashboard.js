import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Input from "../../components/Input";
import Gallery from "../../components/Gallery";
import Setting from "../../components/Setting";
import useUser from "../../utils/user";

export default function Dashboard() {
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
  const logout = () =>
    fetch("/api/logout").then(() => {
      router.push("/admin");
    });

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
    <div className="container">
      <Head>
        <title>Панель управления - Olga</title>
      </Head>
      <div className="header">
        <h1>Панель управления - {user.email}</h1>
        <button onClick={logout}>Выйти</button>
      </div>
      <div>
        <div>
          <header>
            <h3>Контакты</h3>
          </header>
          <Setting
            title="Ваш Instagram"
            desc="Введите свое имя пользователя в Instagram."
            tip="Эти данные будут отображаться на главной странице сайта в разделе Контакты."
          >
            <Input
              prefix="@"
              value={instagram}
              onChange={handleInstagram}
            />
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
        </div>
        <div>
          <h3>Цены</h3>
          <label>Простая наклейка</label>
          <Input
            type="number"
            prefix="₽"
            value={simplePrice}
            onChange={handleSimplePrice}
          />
          <label>Универсал, каблучок</label>
          <Input
            type="number"
            prefix="₽"
            value={universalPrice}
            onChange={handleUniversalPrice}
          />
          <label>Микроавтобус, автобус, грузовик</label>
          <Input
            type="number"
            prefix="₽"
            value={busPrice}
            onChange={handleBusPrice}
          />
          <div className="submit">
            <button onClick={savePrices}>Сохранить</button>
          </div>
        </div>
      </div>
      <h3>Галерея</h3>
      <Gallery />
      <style jsx>{`
        .container {
          width: 1024px;
          margin: 0 auto;
        }

        .header {
          display: flex;
          align-items: center;
        }

        header {
          border-bottom: 1px solid var(--bordergray);
          margin-bottom: 20px;
        }

        h1 {
          background-image: linear-gradient(
            to right,
            var(--from-color),
            var(--to-color)
          );
          color: transparent;
          background-clip: text;
        }

        button {
          margin-left: auto;
          background: var(--to-color);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
        }

        .submit {
          margin-top: 20px;
        }

        h3 {
          color: var(--to-color);
          font-size: 36px;
        }

        label {
          display: block;
          margin-top: 10px;
        }

        input:focus {
          border-color: var(--to-color);
        }
      `}</style>
    </div>
  );
}
