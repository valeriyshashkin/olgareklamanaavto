import jwt from "jsonwebtoken";
import setCookie from "../../utils/cookies";
import prisma from "../../prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = JSON.parse(req.body);

    const admin = await prisma.admin.findFirst({
      where: { email },
    });

    if (admin && admin.password === password) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1y",
      });
      setCookie(res, "auth", token, {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        path: "/",
      });
      res.json({ error: false });
    } else {
      res.json({ error: true });
    }
  }
}
