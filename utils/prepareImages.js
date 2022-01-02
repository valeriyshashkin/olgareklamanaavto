import chunk from "./chunk";

export default function prepareImages(images) {
  let showedImages = [...images];

  if (images.length % 3 !== 0) {
    for (let i = 0; i < (parseInt(images.length / 3) + 1) * 3 - images.length; i++) {
      showedImages.push(null);
    }
  }

  return chunk(showedImages, 3);
}
