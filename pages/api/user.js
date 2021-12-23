import jwt from "jsonwebtoken";

export default function handler(req, res) {
  try {
    const { email } = jwt.verify(req.cookies.auth, process.env.JWT_SECRET);
    res.json({ error: false, email });
  } catch {
    res.json({ error: true });
  }
}
