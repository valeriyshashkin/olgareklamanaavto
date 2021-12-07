import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function InputWithSymbol({ type, symbol, value, onChange }) {
  return (
    <div className="container">
      <div>{symbol}</div>
      <input type={type} value={value} onChange={onChange} />
      <style jsx>{`
        .container {
          position: relative;
        }

        input {
          padding: 10px;
          padding-left: 50px;
          width: 260px;
          border-radius: 6px;
          border: 1px solid gray;
          margin: 5px 0;
          outline-color: var(--to-color);
        }

        .container div {
          position: absolute;
          background: var(--to-color);
          color: white;
          left: 0;
          top: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          border-radius: 6px 0 0 6px;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}

function Gallery() {
  return (
    <>
      <button>Добавить фото</button>
      <div>
        <ImageInGallery
          src="/cloud/06082021-002005-1.jpg"
          width={200}
          height={200}
        />
        <ImageInGallery
          src="/cloud/06082021-002005-1.jpg"
          width={200}
          height={200}
        />
        <ImageInGallery
          src="/cloud/06082021-002005-1.jpg"
          width={200}
          height={200}
        />
      </div>
      <style jsx>{`
        div {
          display: flex;
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
      `}</style>
    </>
  );
}

function ImageInGallery({ src, height, width }) {
  return <Image alt="" src={src} width={width} height={height} />;
}

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
      <div className="row">
        <div>
          <h3>Контакты</h3>
          <label>Инстаграм</label>
          <InputWithSymbol
            symbol="@"
            value={instagram}
            onChange={handleInstagram}
          />
          <label>Ватсап</label>
          <input value={whatsapp} onChange={handleWhatsapp} />
          <label>Почта</label>
          <input value={email} onChange={handleEmail} />
        </div>
        <div>
          <h3>Цены</h3>
          <label>Простая наклейка</label>
          <InputWithSymbol
            type="number"
            symbol="₽"
            value={simplePrice}
            onChange={handleSimplePrice}
          />
          <label>Универсал, каблучок</label>
          <InputWithSymbol
            type="number"
            symbol="₽"
            value={universalPrice}
            onChange={handleUniversalPrice}
          />
          <label>Микроавтобус, автобус, грузовик</label>
          <InputWithSymbol
            type="number"
            symbol="₽"
            value={busPrice}
            onChange={handleBusPrice}
          />
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

        h3 {
          color: var(--to-color);
        }

        label {
          display: block;
          margin-top: 10px;
        }

        input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid gray;
          margin: 5px 0;
          width: 300px;
          outline-color: var(--to-color);
        }

        .row {
          display: flex;
          justify-content: space-between;
        }

        .row div {
          width: 500px;
        }
      `}</style>
    </div>
  );
}
