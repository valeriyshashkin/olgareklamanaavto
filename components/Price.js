import Image from "next/image";

export default function Price({ src, alt, title, price, right }) {
  return (
    <>
      <div className="container">
        <Image width={400} height={400} alt={alt} src={src} />
        <div className="text">
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 80px 0;
          align-items: center;
        }

        .container:first-child,
        .container:last-child {
          margin: 0;
        }

        h4 {
          font-size: 30px;
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 20px;
        }
      `}</style>
      <style jsx>{`
        .container {
          flex-direction: ${right ? "row-reverse" : "row"};
        }

        .text {
          width: ${right ? "600px" : "520px"};
          padding-left: ${right ? "0" : "80px"};
        }
      `}</style>
    </>
  );
}
