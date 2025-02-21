/* 공식문서 예제 "blog-start" code base */
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  createdAt: string;
  excerpt: string;
  content: string;
};

const postsDirectory = join(process.cwd(), "public/posts");

function readDir(path: string) {
  return fs.readdirSync(path).filter((fileName) => fileName !== ".DS_Store");
}

export function getSections() {
  return readDir(postsDirectory);
}

export function getPostSlugsBySection(section: string) {
  const dirPath = join(postsDirectory, section);
  const slugs = readDir(dirPath).map((slug) => `${section}/${slug}`);
  return slugs;
}

export function getAllPostPathList() {
  return getSections()
    .flatMap((section) => getPostSlugsBySection(section))
    .map((slug) => slug.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

function getSortedPostsByCreatedAt(slugs: string[]) {
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));
  return posts;
}

export function extractTagsInPosts(posts: Post[]) {
  const tagMap = posts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return Object.entries(tagMap).map(([tagName, count]) => ({ tagName, count }));
}

export function getPostsAndTagsBySection(section: string) {
  const dirPath = join(postsDirectory, section);
  const slugs = readDir(dirPath).map(
    (file) => `${section}/${file.replace(/\.mdx$/, "")}`
  );
  const posts = getSortedPostsByCreatedAt(slugs);
  const tagInfo = extractTagsInPosts(posts);
  return { posts, tagInfo };
}

export function getPostsBySection(section: string) {
  const dirPath = join(postsDirectory, section);
  const slugs = readDir(dirPath).map(
    (file) => `${section}/${file.replace(/\.mdx$/, "")}`
  );
  const contents = getSortedPostsByCreatedAt(slugs);
  return { section, contents };
}

export function getAllPosts() {
  const posts: { section: string; contents: Post[] }[] = [];
  const sections = getSections();

  sections.forEach((section) => {
    posts.push(getPostsBySection(section));
  });

  return posts;
}
