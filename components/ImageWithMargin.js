import Image from "next/image";

export function ImageWithMargin({ alt, src, margin }) {
  return (
    <div className="outer">
      <div className="inner">
        <Image alt={alt} src={src} layout="fill" />
      </div>
      <style jsx>{`
        .outer {
          margin-right: ${margin}px;
          width: 100%;
        }

        .outer:last-child {
          margin-right: 0;
        }

        .inner {
          position: relative;
          padding-bottom: 100%;
        }
      `}</style>
    </div>
  );
}

export function EmptyImageWithMargin({ margin }) {
  return (
    <div className="outer">
      <div className="inner"></div>
      <style jsx>{`
        .outer {
          margin-right: ${margin}px;
          width: 100%;
        }

        .outer:last-child {
          margin-right: 0;
        }

        .inner {
          position: relative;
          padding-bottom: 100%;
        }
      `}</style>
    </div>
  );
}
