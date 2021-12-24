import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  const content = await prisma.content.findMany();

  res.json({ content });
}
