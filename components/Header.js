import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header({ admin }) {
  const router = useRouter();
  const [isScrollZero, setIsScrollZero] = useState(true);

  const logout = () => fetch("/api/logout").then(() => router.push("/admin"));

  const scroll = () => setIsScrollZero(scrollY === 0);

  useEffect(() => {
    addEventListener("scroll", scroll);
    return () => removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      <header>
        <nav>
          <Link href="/" passHref>
            <a className="logo" href="#">
              <svg
                width="100"
                height="50"
                viewBox="0 0 208 113"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M95.5 89H81.9062V17H95.5V89ZM104.734 63.2656C104.734 55.4844 106.578 49.2188 110.266 44.4688C113.984 39.7188 118.984 37.3438 125.266 37.3438C130.828 37.3438 135.156 39.25 138.25 43.0625L138.812 38.2812H151.094V87.3125C151.094 91.75 150.078 95.6094 148.047 98.8906C146.047 102.172 143.219 104.672 139.562 106.391C135.906 108.109 131.625 108.969 126.719 108.969C123 108.969 119.375 108.219 115.844 106.719C112.312 105.25 109.641 103.344 107.828 101L113.828 92.75C117.203 96.5312 121.297 98.4219 126.109 98.4219C129.703 98.4219 132.5 97.4531 134.5 95.5156C136.5 93.6094 137.5 90.8906 137.5 87.3594V84.6406C134.375 88.1719 130.266 89.9375 125.172 89.9375C119.078 89.9375 114.141 87.5625 110.359 82.8125C106.609 78.0312 104.734 71.7031 104.734 63.8281V63.2656ZM118.281 64.25C118.281 68.8438 119.203 72.4531 121.047 75.0781C122.891 77.6719 125.422 78.9688 128.641 78.9688C132.766 78.9688 135.719 77.4219 137.5 74.3281V53C135.688 49.9062 132.766 48.3594 128.734 48.3594C125.484 48.3594 122.922 49.6875 121.047 52.3438C119.203 55 118.281 58.9688 118.281 64.25ZM190.938 89C190.312 87.7812 189.859 86.2656 189.578 84.4531C186.297 88.1094 182.031 89.9375 176.781 89.9375C171.812 89.9375 167.688 88.5 164.406 85.625C161.156 82.75 159.531 79.125 159.531 74.75C159.531 69.375 161.516 65.25 165.484 62.375C169.484 59.5 175.25 58.0469 182.781 58.0156H189.016V55.1094C189.016 52.7656 188.406 50.8906 187.188 49.4844C186 48.0781 184.109 47.375 181.516 47.375C179.234 47.375 177.438 47.9219 176.125 49.0156C174.844 50.1094 174.203 51.6094 174.203 53.5156H160.656C160.656 50.5781 161.562 47.8594 163.375 45.3594C165.188 42.8594 167.75 40.9062 171.062 39.5C174.375 38.0625 178.094 37.3438 182.219 37.3438C188.469 37.3438 193.422 38.9219 197.078 42.0781C200.766 45.2031 202.609 49.6094 202.609 55.2969V77.2812C202.641 82.0938 203.312 85.7344 204.625 88.2031V89H190.938ZM179.734 79.5781C181.734 79.5781 183.578 79.1406 185.266 78.2656C186.953 77.3594 188.203 76.1562 189.016 74.6562V65.9375H183.953C177.172 65.9375 173.562 68.2812 173.125 72.9688L173.078 73.7656C173.078 75.4531 173.672 76.8438 174.859 77.9375C176.047 79.0312 177.672 79.5781 179.734 79.5781Z"
                  fill="black"
                />
                <circle cx="36" cy="53" r="36" fill="black" />
                <circle cx="36.5" cy="53.5" r="21.5" fill="white" />
                <circle cx="36.5" cy="53.5" r="8.5" fill="black" />
              </svg>
            </a>
          </Link>
          {admin ? (
            <div onClick={logout}>
              <p>Выйти</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                </g>
              </svg>
            </div>
          ) : (
            <ul>
              <li>
                <a href="#gallery">Сделано</a>
              </li>
              <li>
                <a href="#prices">Цены</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          z-index: 1;
        }

        .logo {
          margin: 10px 0;
        }

        nav {
          width: 1024px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }

        ul {
          display: flex;
          list-style-type: none;
          margin-left: auto;
          padding: 0;
        }

        ul li {
          margin-right: 50px;
        }

        ul li:last-child {
          margin-right: 0;
        }

        a {
          text-decoration: none;
          color: black;
        }

        div {
          margin-left: auto;
          cursor: pointer;
          border-radius: 6px;
          display: flex;
          align-items: center;
          padding: 10px;
        }

        div:hover {
          background: var(--lightgray);
        }

        div p {
          margin: 0;
          margin-right: 10px;
        }
      `}</style>
      <style jsx>{`
        header {
          border-bottom: ${isScrollZero ? "none" : "1px solid lightgray"};
        }
      `}</style>
    </>
  );
}
