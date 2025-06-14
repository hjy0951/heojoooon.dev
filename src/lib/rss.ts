import { getAllPosts } from "./api";

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
  const posts = await getAllPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      return `<item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/${post.slug}</link>
        <guid isPermaLink="false">${baseUrl}/${post.slug}</guid>
        <pubDate>${new Date(post.updatedAt || post.createdAt).toUTCString()}</pubDate>
        <description><![CDATA[ ${post.description} ]]></description>
        <content:encoded><![CDATA[ ${flattenMarkdown(post.content)} ]]></content:encoded>
      </item>`;
    })
  );

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Heojooon's Blog RSS Feed]]></title>
    <description><![CDATA[프론트엔드 개발자 허준영입니다.]]></description>
    <link>${baseUrl}</link>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items.join("")}
  </channel>
</rss>`;

  return rss;
};
