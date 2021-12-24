import useSWR from "swr";
import fetcher from "./fetcher";

export default function useUser() {
  const { data, error } = useSWR("/api/user", fetcher);

  return { user: data, isUserLoading: !error && !data, isError: error };
}
