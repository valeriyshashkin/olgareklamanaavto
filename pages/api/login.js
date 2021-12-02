import connectDb from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ error: false });
  } else {
    const db = await connectDb();
    await db.testModel.create({
      test: "new test",
    });
    const result = await db.testModel.findAll();
    res.status(200).json({ testModels: result });
  }
}
