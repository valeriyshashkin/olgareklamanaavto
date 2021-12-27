import Head from "next/head";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import useUser from "../../utils/user";
import useGallery from "../../utils/gallery";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import Gallery, { Skeleton } from "../../components/Gallery";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const router = useRouter();

  const upload = (e) => {
    setTotalImages(e.target.files.length);
    fetch("/api/image/sign")
      .then((res) => res.json())
      .then(({ timestamp, signature }) => {
        [...e.target.files].map((file, i) => {
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
                setUploadedImages(i);
              });
            });
        });
        setUploadedImages(0);
        setTotalImages(0);
      });
  };

  const changeSelection = (selected) => {
    setSelectedImages([...setSelectedImages, selected]);
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

  if (user?.error) {
    router.push("/admin");
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
      {uploadedImages !== totalImages && (
        <span>
          Загружено {uploadedImages} из {totalImages}
        </span>
      )}
      {isUserLoading || isGalleryLoading ? (
        <Skeleton />
      ) : user.error ? (
        <Skeleton />
      ) : (
        <Gallery
          images={images}
          onChange={changeSelection}
          selection={selectedImages}
        />
      )}
      <style jsx>{`
        #file-upload {
          opacity: 0;
          width: 0;
        }

        label {
          height: 100%;
        }

        span {
          margin-left: 20px;
        }
      `}</style>
    </>
  );
}

GalleryPage.getLayout = function getLayout(page) {
  return (
    <Layout active="Галерея">
      <Head>
        <title>Галерея - Olga</title>
      </Head>
      {page}
    </Layout>
  );
};
