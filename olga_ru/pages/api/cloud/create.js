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

    const result = await fetch(`${process.env.CLOUD_STORAGE_DOMAIN}/create`, {
      method: "POST",
      headers: {
        Authorization: process.env.CLOUD_STORAGE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ files }),
    });

    const urls = await result.json();
    console.log(urls);

    // for (const u of urls) {
    //   await prisma.image.create({
    //     data: {
    //       src: u,
    //     },
    //   });
    // }

    res.end();
  }
}
