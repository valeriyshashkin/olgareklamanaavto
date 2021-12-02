import connectDb from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ error: false });
  } else {
    res.status(200).json({ ok: true });
  }
}
