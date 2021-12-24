import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { key, value } = JSON.parse(req.body);

    await prisma.content.update({
      where: { key },
      data: { value },
    });

    res.end();
  }
}
