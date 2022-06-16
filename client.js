import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const client = sanityClient({
  projectId: "f7h0v6nq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

export default client;
