import { getContent } from "../../../utils/getContent";

export default async function handler(req, res) {
  const content = await getContent();

  res.json(content);
}
