import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {
  const content = await prisma.content.findMany();

  res.json({ content });
}
