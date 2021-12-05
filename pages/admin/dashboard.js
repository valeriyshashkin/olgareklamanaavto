import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

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

  return (
    <div className="container">
      <Head>
        <title>Панель управления - Olga</title>
      </Head>
      <div className="header">
        <h1>Панель управления</h1>
        <button onClick={logout}>Выйти</button>
      </div>
      <h3>Контакты</h3>
      <label>Инстаграм</label>
      <input value={instagram} onChange={handleInstagram} />
      <label>Ватсап</label>
      <input value={whatsapp} onChange={handleWhatsapp} />
      <label>Почта</label>
      <input value={email} onChange={handleEmail} />
      <h3>Цены</h3>
      <label>Простая наклейка</label>
      <input value={simplePrice} onChange={handleSimplePrice} />
      <label>Универсал, каблучок</label>
      <input value={universalPrice} onChange={handleUniversalPrice} />
      <label>Микроавтобус, автобус, грузовик</label>
      <input value={busPrice} onChange={handleBusPrice} />
      <h3>Галерея</h3>
      <style jsx>{`
        .container {
          width: 1024px;
          margin: 0 auto;
        }

        .header {
          display: flex;
          align-items: center;
        }

        .header button {
          margin-left: auto;
        }

        label {
          display: block;
        }

        input {
          padding: 10px;
        }
      `}</style>
    </div>
  );
}
