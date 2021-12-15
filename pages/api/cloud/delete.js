import prisma from "../../../prisma/prisma";

export default async function handler(req, res) {
  const { ids } = JSON.parse(req.body);

  await prisma.image.deleteMany({
    where: { id: { in: ids } },
  });
  
  res.end();
}
