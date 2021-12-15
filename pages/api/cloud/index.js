import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {
  const images = await prisma.image.findMany();

  res.json({ images });
}
