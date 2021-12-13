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

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log({ fields, files });
    });
    
    res.end();
  }
}
