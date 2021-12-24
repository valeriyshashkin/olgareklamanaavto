import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await fetch(`${process.env.CLOUD_STORAGE_DOMAIN}/presigned`, {
      method: "POST",
      headers: {
        Authorization: process.env.CLOUD_STORAGE_KEY,
      },
    });

    const { url } = await result.json();

    res.json({ url });
  }
}
