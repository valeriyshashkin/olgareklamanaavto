import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import Link from "next/link";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function login() {
    setIsLoading(true);
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
          router.push("/admin/contacts");
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      });
  }

  return (
    <div>
      <Head>
        <title>Вход в панель управления - Olga</title>
      </Head>
      <h1>Вход</h1>
      {isError && (
        <p>Не удается войти. Проверьте правильность ввода почты и пароля</p>
      )}
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
      <Button large onClick={login} loading={isLoading}>
        Войти
      </Button>
      <Link href="/" passHref>
        <a>&larr; Вернуться на главную</a>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          width: 300px;
          margin: 0 auto;
          margin-top: 180px;
        }

        @media (max-width: 580px) {
          div {
            margin-top: 60px;
          }
        }

        h1 {
          text-align: center;
          font-size: 40px;
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

        a {
          text-align: center;
          margin-top: 20px;
          text-decoration: none;
          color: var(--to-color);
        }

        p {
          background: var(--red);
          padding: 10px;
          border-radius: 6px;
          color: white;
          margin: 0;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
