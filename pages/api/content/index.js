import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  const content = await prisma.content.findMany();

  let response = {};

  for (const { key, value } of content) {
    response[key] = value;
  }

  res.json(response);
}
