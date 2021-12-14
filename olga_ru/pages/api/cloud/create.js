import prisma from "../../../prisma/prisma";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable({ multiples: true });

    const files = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(files);
      });
    });

    const res = await fetch(`${CLOUD_STORAGE_DOMAIN}/create`, {
      method: "POST",
      body: JSON.stringify() + req.body,
    });

    const urls = await res.json();

    for (const u of urls) {
      await prisma.image.create({
        data: {
          src: u,
        },
      });
    }

    res.end();
  }
}
