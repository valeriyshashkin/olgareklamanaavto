import chunk from "./chunk";

export default function prepareImages(images) {
  let showedImages = [...images];

  for (let i = 0; i < 3 - images.length % 3; i++) {
    showedImages.push(null);
  }

  return chunk(showedImages, 3);
}
