import { getAllPosts, getAllTags } from "@/lib/api";
import type { MetadataRoute } from "next";

/*
  sitemap object template:
    {
      url: "https://acme.com",
      lastModified: new Date(),
    }
*/

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = process.env.NEXT_PUBLIC_BASE_URL || "";
  const tagList = getAllTags();
  const postList = getAllPosts();

  return [
    { url, lastModified },
    ...tagList.map(({ tagName }) => ({
      url: `${url}/tag/${tagName}`,
      lastModified,
    })),
    ...postList.map(({ slug }) => ({
      url: `${url}/${slug}`,
      lastModified,
    })),
  ];
}
