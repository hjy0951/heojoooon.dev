import { getAllPosts, getAllTags } from "@/lib/api";
import type { MetadataRoute } from "next";

/*
  sitemap object template:
    {
      url: "https://acme.com",
      lastModified: new Date(),
    }
*/

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const todayDate = new Date();
  const baseUrl = "https://heojooon.vercel.app";
  const tagList = await getAllTags();
  const postList = await getAllPosts();

  return [
    { url: baseUrl, lastModified: todayDate },
    ...tagList.map(({ tagName }) => ({
      url: `${baseUrl}/tag/${tagName}`,
      lastModified: todayDate,
    })),
    ...postList.map(({ slug }) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: todayDate,
    })),
  ];
}
