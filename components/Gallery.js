export function Skeleton() {
  return (
    <>
      <GalleryRow>
        <GalleryItem>
          <div></div>
        </GalleryItem>
        <GalleryItem>
          <div></div>
        </GalleryItem>
        <GalleryItem>
          <div></div>
        </GalleryItem>
      </GalleryRow>
      <GalleryRow>
        <GalleryItem>
          <div></div>
        </GalleryItem>
        <GalleryItem>
          <div></div>
        </GalleryItem>
        <GalleryItem>
          <div></div>
        </GalleryItem>
      </GalleryRow>
      <style jsx>{`
        div {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--imageskeletongray);
        }
      `}</style>
    </>
  );
}

export function GalleryItem({ children, onClick }) {
  return (
    <div className="outer">
      <div className="inner" onClick={onClick}>
        {children}
      </div>
      <style jsx>{`
        .outer {
          width: 100%;
          margin-right: 10px;
          cursor: pointer;
        }

        .inner {
          padding-bottom: 100%;
          position: relative;
        }

        .outer:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
}

export function GalleryRow({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: flex;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
