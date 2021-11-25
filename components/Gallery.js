import Image from "next/image";
import Subtitle from "./Subtitle";

function GalleryImage({ src }) {
  return (
    <>
      <div>
        <Image alt="" src={src} layout="fill" />
      </div>
      <style jsx>{`
        div {
          width: calc((1024px - 40px) / 3);
          height: calc((1024px - 40px) / 3);
          margin-right: 20px;
          position: relative;
        }

        div:last-child {
          margin-right: 0;
        }
      `}</style>
    </>
  );
}

export default function Gallery() {
  return (
    <>
      <Subtitle>Наклейки, воплощенные в реальность</Subtitle>
      <div>
        <GalleryImage src="/06082021-002005-1.jpg" />
        <GalleryImage src="/06082021-002005-1.jpg" />
        <GalleryImage src="/06082021-002005-1.jpg" />
      </div>
      <div>
        <GalleryImage src="/06082021-002005-1.jpg" />
        <GalleryImage src="/06082021-002005-1.jpg" />
        <GalleryImage src="/06082021-002005-1.jpg" />
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
        }

        div:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
