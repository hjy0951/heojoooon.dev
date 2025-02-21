import { getAllPostPathList, getSections } from "@/lib/apiv2";
import type { MetadataRoute } from "next";

/*
  sitemap object template:
    {
      url: "https://acme.com",
      lastModified: new Date(),
    }
*/

export default function sitemap(): MetadataRoute.Sitemap {
  const todayDate = new Date();
  const baseUrl = "https://heojooon.vercel.app";
  const sections = getSections();
  const postList = getAllPostPathList();

  return [
    { url: baseUrl, lastModified: todayDate },
    ...sections.map((section) => ({
      url: `${baseUrl}/${section}`,
      lastModified: todayDate,
    })),
    ...postList.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: todayDate,
    })),
  ];
}
