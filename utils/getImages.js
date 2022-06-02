import prisma from "./prisma";

export async function getImages() {
  const images = await prisma.image.findMany();

  let result = [];

  for (const { src } of images) {
    result.push(src);
  }

  return result.reverse();
}
