import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function login() {
    fetch("/api/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          router.push("/admin/dashboard");
        }
      });
  }

  return (
    <div>
      <Head>
        <title>Вход в панель управления - Olga</title>
      </Head>
      <h1>Вход</h1>
      <input
        value={email}
        onChange={handleEmail}
        placeholder="Почта"
        type="email"
      />
      <input
        value={password}
        onChange={handlePassword}
        placeholder="Пароль"
        type="password"
      />
      <button onClick={login}>Войти</button>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          width: 300px;
          margin: 0 auto;
          margin-top: 140px;
        }

        h1 {
          text-align: center;
          font-size: 40px;
          background-image: linear-gradient(to right, var(--from-color), var(--to-color));
          color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        input,
        button {
          border-radius: 6px;
          border: 1px solid gray;
          padding: 10px;
          margin-bottom: 20px;
          font-size: 20px;
          outline-color: var(--to-color);
        }

        button {
          margin-bottom: 0;
          color: white;
          border: none;
          cursor: pointer;
          background: var(--to-color);
        }
      `}</style>
    </div>
  );
}
