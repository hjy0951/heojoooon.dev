const tagMap = {
  all: "모든 글",
  life: "일상",
  develop: "개발",
  cicd: "CI/CD",
  javascript: "JavaScript",
  react: "React",
  nextjs: "NextJS",
} as const;

export type TagType = keyof typeof tagMap;

export const covertTagName = (slug: TagType): string => {
  return tagMap[slug];
};

export const calculateReadingTime = (
  text: string,
  wordsPerMinute: number = 120
): number => {
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.round(wordCount / wordsPerMinute);
  return readingTime;
};
