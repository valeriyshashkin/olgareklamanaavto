import Subtitle from "./Subtitle";
import Image from "next/image";

function Contact({ src, type, content }) {
  function hrefByType() {
    switch (type) {
      case "whatsapp":
        return "tel:" + content;
      case "instagram":
        return "//instagram.com/" + content;
      case "email":
        return "mailto:" + content;
    }
  }

  return (
    <div>
      <Image alt="" src={src} width={50} height={50} />
      <a href={hrefByType()}>
        {type === "instagram" ? "@" + content : content}
      </a>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 200px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          margin-top: 30px;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}

export default function Contacts() {
  return (
    <>
      <Subtitle>Как можно связаться</Subtitle>
      <div>
        <Contact
          type="whatsapp"
          src="/whatsapp.png"
          content="8-(888)-888-88-88"
        />
        <Contact
          type="instagram"
          src="/instagram.png"
          content="olgareklamanaavto"
        />
        <Contact type="email" src="/email.png" content="admin@admin.com" />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
