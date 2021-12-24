import { getContent } from "../../../utils/content";

export default async function handler(req, res) {
  const content = await getContent();

  res.json(content);
}
