import Image from "next/image";

export default function Contact({ text, src, alt }) {
  return (
    <div>
      <Image alt={alt} src={src} />
      <p>{text}</p>
      <style jsx>{`
        div {
          width: 300px;
          text-align: center;
        }

        p {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}