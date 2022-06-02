import prisma from "../../../utils/prisma";
import cloudinary from "cloudinary";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.preview) {
      res.end();
      return;
    }

    const { public_id } = JSON.parse(req.body);

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    await cloudinary.v2.uploader.destroy(public_id);

    await prisma.image.delete({
      where: {
        src: public_id,
      },
    });

    res.end();
  }
}
