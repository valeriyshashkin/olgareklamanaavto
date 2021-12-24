import prisma from "./prisma";
import useSWR from "swr";
import fetcher from "./fetcher";

export default function useContent() {
  const { data, error } = useSWR("/api/content", fetcher);

  return { content: data, isContentLoading: !error && !data, isError: error };
}

export function saveContent(key, value, callback) {
  fetch("/api/content/update", {
    method: "POST",
    body: JSON.stringify({ key, value }),
  }).then(callback);
}

export async function getContent() {
  const content = await prisma.content.findMany();

  let result = {};
  
  for (const { key, value } of content) {
    result[key] = value;
  }

  return result;
}
