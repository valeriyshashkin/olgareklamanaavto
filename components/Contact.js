import Image from "next/image";

export default function Contact({ text, src, alt }) {
  return (
    <div>
      <Image alt={alt} src={src} width={60} height={60} />
      <p>{text}</p>
      <style jsx>{`
        div {
          width: 300px;
          text-align: center;
        }

        p {
          font-size: 20px;
        }

        @media (max-width: 720px) {
          p {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
