import { getAllPosts } from "./api";
import { Feed } from "feed";

const flattenMarkdown = (content: string): string => {
  return (
    content
      // 코드 블록 제거
      .replace(/```[\s\S]*?```/g, "")
      // 인라인 코드 제거
      .replace(/`[^`]+`/g, "")
      // 리스트 마크다운 제거
      .replace(/^[-*+]\s+/gm, "")
      // 숫자 리스트 마크다운 제거
      .replace(/^\d+\.\s+/gm, "")
      // 빈 줄 제거
      .replace(/\n\s*\n/g, "\n")
      // 줄바꿈을 공백으로 변환
      .replace(/\n/g, " ")
      // 연속된 공백 제거
      .replace(/\s+/g, " ")
      // 앞뒤 공백 제거
      .trim()
  );
};

export const generateRSS = async () => {
  const baseUrl = "https://heojooon.vercel.app";
  const posts = getAllPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      return `<item>
        <title>${post.title}</title>
        <link>${baseUrl}/${post.slug}</link>
        <guid>${baseUrl}/${post.slug}</guid>
        <pubDate>${new Date(post.updatedAt || post.createdAt).toUTCString()}</pubDate>
        <description><![CDATA[${post.description}]]></description>
        <content:encoded><![CDATA[${flattenMarkdown(post.content)}]]></content:encoded>
      </item>`;
    })
  );

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Heojooon's Blog RSS Feed</title>
    <link>${baseUrl}</link>
    <description>개발과 일상에 대한 이야기를 나누는 공간입니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items.join("")}
  </channel>
</rss>`;

  return rss;
};

export const generateRssFeed = async () => {
  const baseUrl = "https://heojooon.vercel.app";

  const feed = new Feed({
    title: "Heojooon's Blog RSS Feed",
    description: "개발과 일상에 대한 이야기를 나누는 공간입니다.",
    id: baseUrl,
    link: baseUrl,
    language: "ko",
    copyright: `© ${new Date().getFullYear()}. Heojoooon all rights reserved.`,
    updated: new Date(),
  });

  const posts = await getAllPosts(); // 마크다운에서 불러오든 DB에서 불러오든

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/${post.slug}`,
      link: `${baseUrl}/${post.slug}`,
      description: post.description,
      date: new Date(post.updatedAt || post.createdAt),
      content: flattenMarkdown(post.content),
    });
  });

  return feed.rss2(); // XML 문자열
};
