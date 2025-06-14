/* 공식문서 예제 "blog-start" code base */
import fs from "fs/promises";
import matter from "gray-matter";
import { join } from "path";

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
};

const postsDirectory = join(process.cwd(), "public/posts");

async function readDir(path: string) {
  const files = await fs.readdir(path);
  return files.filter((fileName) => fileName !== ".DS_Store");
}

export async function getAllPostSlugs() {
  const files = await readDir(postsDirectory);
  return files.map((slug) => slug.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as Post;
}

async function getPostsBySlugs(slugs: string[]) {
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts;
}

function sortPostsByLatest(posts: Post[]) {
  // sort posts by date in descending order
  return posts.sort((post1, post2) => {
    const date1 = post1.updatedAt || post1.createdAt;
    const date2 = post2.updatedAt || post2.createdAt;
    return date1 > date2 ? -1 : 1;
  });
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

export async function getAllTags() {
  const slugs = await getAllPostSlugs();
  const posts = await getPostsBySlugs(slugs);
  const tagInfo = extractTagsInPosts(posts);
  return tagInfo;
}

export async function getAllPosts() {
  const slugs = await getAllPostSlugs();
  const posts = await getPostsBySlugs(slugs);
  return sortPostsByLatest(posts);
}
