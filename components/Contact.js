import Image from "next/image";

export default function Contact({ text, src, alt }) {
  return (
    <div className="text-center w-72 my-5">
      <Image alt={alt} src={src} width={60} height={60} />
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
}
