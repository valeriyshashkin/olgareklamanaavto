import prisma from "../../../prisma/prisma";
import formidable from "formidable";
import fs from "fs";

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

    if (files.file.constructor === Array) {
      for (const f of files.file) {
        await prisma.image.create({
          data: { src: fs.readFileSync(f.filepath, { encoding: "base64" }) },
        });
      }
    } else {
      await prisma.image.create({
        data: {
          src: fs.readFileSync(files.file.filepath, { encoding: "base64" }),
        },
      });
    }

    res.end();
  }
}
