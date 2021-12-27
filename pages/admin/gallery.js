import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import useUser from "../../utils/user";
import useGallery from "../../utils/gallery";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";

export default function Gallery() {
  const [images, setImages] = useState([]);

  const router = useRouter();

  const upload = (e) => {
    fetch("/api/image/sign")
      .then((res) => res.json())
      .then(({ timestamp, signature }) => {
        [...e.target.files].map((file) => {
          const fd = new FormData();

          fd.append("file", file);
          fd.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
          fd.append("timestamp", timestamp);
          fd.append("signature", signature);

          fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            { method: "POST", body: fd }
          )
            .then((res) => res.json())
            .then(({ public_id }) => {
              fetch("/api/image/add", {
                method: "POST",
                body: JSON.stringify({
                  public_id,
                }),
              }).then(() => {
                mutate("/api/image");
              });
            });
        });
      });
  };

  useEffect(() => {
    fetch("/api/image")
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
      });
  }, []);

  const { mutate } = useSWRConfig();
  const { user, isUserLoading } = useUser();
  const { gallery, isGalleryLoading } = useGallery();

  useEffect(() => {
    if (!isUserLoading && !isGalleryLoading) {
      setImages(gallery);
    }
  }, [gallery, isGalleryLoading, isUserLoading]);

  if (isUserLoading || isGalleryLoading) {
    return "loading...";
  }

  if (user.error) {
    router.push("/admin");
    return "loading...";
  }

  return (
    <>
      <input
        id="file-upload"
        type="file"
        multiple
        accept="image/*"
        onChange={upload}
      />
      <Button margin="12px 0" labelFor="file-upload">
        Добавить фото
      </Button>
      {images.map((src, id) => (
        <Image
          alt=""
          objectFit="scale-down"
          key={id}
          src={src}
          height={300}
          width={300}
        />
      ))}
      <style jsx>{`
        #file-upload {
          opacity: 0;
          width: 0;
        }

        label {
          height: 100%;
        }
      `}</style>
    </>
  );
}

Gallery.getLayout = function getLayout(page) {
  return (
    <Layout active="Галерея">
      <Head>
        <title>Галерея - Olga</title>
      </Head>
      {page}
    </Layout>
  );
};
