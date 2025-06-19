/* 공식문서 예제 "blog-start" code base */
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { TagType } from "./utils";

export type Post = {
  slug: string;
  title: string;
  tags: TagType[];
  description: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
};

const postsDirectory = join(process.cwd(), "public/posts");

function readDir(path: string) {
  return fs.readdirSync(path).filter((fileName) => fileName !== ".DS_Store");
}

export function getAllPostSlugs() {
  return readDir(postsDirectory).map((slug) => slug.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as Post;
}

function getPostsBySlugs(slugs: string[]) {
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts;
}
export function getAdjacentPosts(currentSlug: string) {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
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

export function getAllTags() {
  const slugs = getAllPostSlugs();
  const posts = getPostsBySlugs(slugs);
  const tagInfo = extractTagsInPosts(posts);
  return tagInfo;
}

export function getAllPosts() {
  const slugs = getAllPostSlugs();
  const posts = sortPostsByLatest(getPostsBySlugs(slugs));
  return posts;
}
