import prisma from "../../../utils/prisma";
import cloudinary from "cloudinary";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const public_ids = JSON.parse(req.body);

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    for (let i = 0; i < public_ids.length; i++) {
      await cloudinary.v2.uploader.destroy(public_ids[i]);
    }

    await prisma.image.deleteMany({
      where: { src: { in: public_ids } },
    });

    res.end();
  }
}
