import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { public_id } = JSON.parse(req.body);

    await prisma.image.create({
      data: {
        src: public_id,
      },
    });

    res.end();
  }
}
