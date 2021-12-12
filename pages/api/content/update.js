import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const content = JSON.parse(req.body);

    for (const { key, value } of content) {
      await prisma.content.update({
        where: { key },
        data: { value },
      });
    }

    res.end();
  }
}
