import connectDb from "../../utils/db";
import jwt from "jsonwebtoken";
import cookies from "../../utils/cookies";

async function handler(req, res) {
  if (req.method === "POST") {
    const token = jwt.sign({ email: "admin@admin.com" }, process.env.SECRET);
    res.cookie("auth", token, {maxAge: 365 * 24 * 60 * 60 * 1000});
    res.status(200).json({ error: false });
  }
}

export default cookies(handler);
