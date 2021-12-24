import prisma from "./prisma";

export async function getContent() {
  const content = await prisma.content.findMany();

  let result = {};

  for (const { key, value } of content) {
    result[key] = value;
  }

  return result;
}
