import Image from "next/image";
import chunk from "../utils/chunk";

export function Skeleton() {
  return (
    <>
      <div className="container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin-bottom: 10px;
          width: 100%;
        }

        .item {
          background: var(--skeletongray);
          height: 250px;
          width: 250px;
          margin-right: 10px;
        }

        .item:last-child {
          margin-right: 0;
        }
      `}</style>
    </>
  );
}

export default function Gallery({ images, onChange, selection }) {
  let showedImages = images;

  for (let i = 0; i < images.length % 3; i++) {
    showedImages.push(null);
  }

  showedImages = chunk(showedImages, 3);

  // const select = (e) => {
  //   e.target.src
  // }

  return (
    <>
      {showedImages.map((row, i) => (
        <div className="row" key={i}>
          {row.map((src, j) => (
            <div className="item" key={j}>
              {src && (
                <Image onClick={select} alt="" objectFit="scale-down" src={src} layout="fill" />
              )}
            </div>
          ))}
        </div>
      ))}
      <style jsx>{`
        .row {
          display: flex;
          margin-bottom: 10px;
        }

        .item {
          height: 250px;
          width: 250px;
          position: relative;
          margin-right: 10px;
        }

        .item:last-child {
          margin-right: 0;
        }
      `}</style>
    </>
  );
}
