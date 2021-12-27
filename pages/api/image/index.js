import { getImages } from "../../../utils/getImages";

export default async function handler(req, res) {
  const images = await getImages();

  res.json(images);
}
