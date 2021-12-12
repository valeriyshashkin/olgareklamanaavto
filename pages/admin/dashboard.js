import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function InputWithSymbol({ type, symbol, value, onChange }) {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return (
    <div className="container">
      <div>{symbol}</div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        value={value}
        onChange={onChange}
      />
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
      `}</style>
      <style jsx>{`
        .container div {
          position: absolute;
          background: ${focus ? "var(--to-color)" : "gray"};
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
  const [active, setActive] = useState([]);

  function hanldeActive(name) {
    if (active.includes(name)) {
      setActive(active.filter((item) => item != name));
    } else {
      setActive([...active, name]);
    }
  }

  return (
    <>
      <button>Добавить фото</button>
      <div>
        <ImageInGallery
          src="/cloud/06082021-002005-1.jpg"
          width={200}
          height={200}
          onClick={hanldeActive}
          name="first"
          active={active.includes("first")}
        />
        <ImageInGallery
          src="/cloud/06082021-002005-1.jpg"
          width={200}
          height={200}
          onClick={hanldeActive}
          name="second"
          active={active.includes("second")}
        />
        <ImageInGallery
          src="/cloud/06082021-002005-1.jpg"
          width={200}
          height={200}
          onClick={hanldeActive}
          name="third"
          active={active.includes("third")}
        />
      </div>
      <style jsx>{`
        div {
          display: flex;
        }

        button {
          background: var(--to-color);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
          margin-bottom: 25px;
        }
      `}</style>
    </>
  );
}

function ImageInGallery({ src, height, width, onClick, name, active }) {
  function handle() {
    return onClick(name);
  }

  return (
    <div onClick={handle} className={active ? "active" : ""}>
      <Image alt="" src={src} width={width} height={height} />
      <style jsx global>{`
        div {
          position: relative;
        }

        .active::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 200px;
          width: 200px;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url("/selected.svg");
        }
      `}</style>
    </div>
  );
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
          <div className="submit">
            <button onClick={saveContacts}>Сохранить</button>
          </div>
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
