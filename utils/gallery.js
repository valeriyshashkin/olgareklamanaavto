import useSWR from "swr";
import fetcher from "./fetcher";

export default function useGallery() {
  const { data, error } = useSWR("/api/image", fetcher);

  return { gallery: data, isGalleryLoading: !error && !data, isError: error };
}
