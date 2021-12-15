import { useState, useEffect } from "react";

function ImageInGallery({ src, onClick, name, active }) {
  function handle() {
    return onClick(name);
  }

  return (
    <>
      <div onClick={handle} className={active ? "active" : ""}>
        <Image className="img" alt="" src={src} height={200} width={200} />
      </div>
      <style jsx>{`
        div {
          position: relative;
          cursor: pointer;
        }
      `}</style>
      <style jsx global>{`
        .img {
          object-fit: cover;
        }

        .active::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 200px;
          width: 200px;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url("/selected.svg");
        }
      `}</style>
    </>
  );
}

export default function Gallery() {
  const [active, setActive] = useState([]);
  const [images, setImages] = useState([]);
  const inputRef = useRef();

  function hanldeActive(name) {
    if (active.includes(name)) {
      setActive(active.filter((item) => item != name));
    } else {
      setActive([...active, name]);
    }
  }

  function fetchImages() {
    fetch("/api/cloud")
      .then((res) => res.json())
      .then(({ images }) => setImages(images));
  }

  function upload(e) {
    const formData = new FormData();

    for (const f of e.target.files) {
      formData.append("file", f);
    }

    fetch("/api/cloud/create", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(({ url }) =>
        fetch(url, {
          method: "POST",
          body: formData,
        }).then(() => fetchImages())
      );
  }

  function remove() {
    fetch("/api/cloud/delete", {
      method: "POST",
      body: JSON.stringify({ ids: active }),
    }).then(() => fetchImages());
  }

  function handleClick() {
    inputRef.current.click();
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={upload}
          ref={inputRef}
        />
        <button onClick={handleClick}>Добавить фото</button>
        {active.length !== 0 && (
          <button className="remove" onClick={remove}>
            Удалить
          </button>
        )}
      </div>
      <div>
        {images.map(({ id, src }) => (
          <ImageInGallery
            key={id}
            src={"data:image/png;base64, " + src}
            onClick={hanldeActive}
            name={id}
            active={active.includes(id)}
          />
        ))}
      </div>
      <style jsx>{`
        div {
          display: flex;
        }

        button {
          background: var(--to-color);
          border: none;
          color: white;
          border-radius: 6px;
          padding: 10px;
          cursor: pointer;
          margin-bottom: 25px;
        }

        input {
          display: none;
        }

        .remove {
          background: #ff2222;
          margin-left: 20px;
        }
      `}</style>
    </>
  );
}
