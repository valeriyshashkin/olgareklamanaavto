import prisma from "../../../utils/prisma";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      jwt.verify(req.cookies.auth, process.env.JWT_SECRET);
    } catch {
      res.end();
      return;
    }

    const { key, value } = JSON.parse(req.body);

    await prisma.content.update({
      where: { key },
      data: { value },
    });

    res.end();
  }
}
