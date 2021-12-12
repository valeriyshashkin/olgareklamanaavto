import jwt from "jsonwebtoken";
import cookies from "../../utils/cookies";
import prisma from "../../prisma/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = JSON.parse(req.body);

    const admin = await prisma.admin.findFirst({
      where: { email }
    });

    if (admin && admin.password === password) {
      const token = jwt.sign({ email }, process.env.SECRET);
      res.cookie("auth", token, {maxAge: 365 * 24 * 60 * 60 * 1000});
      res.json({ error: false });
    } else {
      res.json({ error: true });
    }
  }
}

export default cookies(handler);
