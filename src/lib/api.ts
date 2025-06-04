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

export function getAllPostSlugs() {
  return readDir(postsDirectory).map((slug) => slug.replace(/\.mdx$/, ""));
}

export function getPostDetail(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as Post;
}

function getPostsBySlugs(slugs: string[]) {
  const posts = slugs.map((slug) => getPostDetail(slug));
  return posts;
}

function sortPostsByCreatedAt(posts: Post[]) {
  // sort posts by date in descending order
  return posts.sort((post1, post2) =>
    post1.createdAt > post2.createdAt ? -1 : 1
  );
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

export function getAllTags() {
  const slugs = getAllPostSlugs();
  const posts = getPostsBySlugs(slugs);
  const tagInfo = extractTagsInPosts(posts);
  return tagInfo;
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = sortPostsByCreatedAt(getPostsBySlugs(slugs));
  return posts;
}
