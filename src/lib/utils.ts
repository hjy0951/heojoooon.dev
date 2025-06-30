import { HeadingInfo } from "@/components/post";
import { slug } from "github-slugger";

const tagMap = {
  all: "모든 글",
  life: "일상",
  develop: "개발",
  cicd: "CI/CD",
  javascript: "JavaScript",
  typescript: "TypeScript",
  svg: "SVG",
  react: "React",
  nextjs: "NextJS",
  css: "CSS",
  recoil: "Recoil",
  tanstackQuery: "Tanstack-Query",
  retrospect: "회고",
  essay: "에세이",
  "github-actions": "GitHub-Actions",
  "code-review": "코드 리뷰",
  blog: "블로그 제작기",
  refactoring: "리팩토링",
} as const;

export type TagType = keyof typeof tagMap;

export const convertTagName = (slug: TagType): string => {
  return tagMap[slug] ?? slug;
};

export const calculateTimeToRead = (
  text: string,
  wordsPerMinute: number = 120
): number => {
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.round(wordCount / wordsPerMinute);
  return readingTime;
};

const removeLink = (text: string) => {
  /* heading에 link가 존재하는 경우 처리 */
  return text.replace(/\[([^\]]+)]\s*\(.*?\)/g, "$1");
};

export const createTOCInfo = (content: string): HeadingInfo[] => {
  const regex = /^(##|###|####) (.*$)/gim;
  const headingList = content.match(regex);

  if (!headingList) return [];

  const tocInfo = headingList.map((heading: string) => {
    const realHeading = removeLink(heading);
    return {
      text: realHeading.replace(/^#+\s*/, ""),
      link: `#${slug(realHeading).replace(/-/, "")}`,
      indentCount: realHeading.match(/#/g)?.length || 3,
    };
  });

  /* 가장 큰 heading을 기준으로 indent 적용 */
  const minIndentCount = Math.min(...tocInfo.map((item) => item.indentCount));

  return tocInfo.map((item) => ({
    ...item,
    indentCount: item.indentCount - minIndentCount,
  }));
};
