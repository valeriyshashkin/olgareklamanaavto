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
          router.push("/admin/content");
        }
      });
  }

  return (
    <div>
      <Head>
        <title>Вход в панель управления</title>
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
          color: var(--primary);
        }

        input,
        button {
          border-radius: var(--border-radius);
          border: 1px solid var(--secondary);
          padding: 20px;
          margin-bottom: 20px;
          outline-color: var(--primary);
          font-size: 20px;
        }

        button {
          margin-bottom: 0;
          background: var(--primary);
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
