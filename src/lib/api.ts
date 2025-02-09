/* 공식문서 예제 "blog-start" code base */
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { TagType } from "./utils";

/*
slug: GitHub-Actions-Study
title: "GitHub-Actions"
description: "CI/CD와 GitHub Actions"
tags: ["cicd"]
createdAt: "2023.10.02"
updatedAt: ""
*/
export type Post = {
  slug: string;
  tag: TagType;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

const postsDirectory = join(process.cwd(), "public/posts");

function readDir(path: string) {
  return fs.readdirSync(path).filter((fileName) => fileName !== ".DS_Store");
}

export function getPostTags() {
  const allTags = readDir(postsDirectory) as TagType[];
  return allTags;
}

type TagInfo = {
  tag: TagType;
  count: number;
};

export function getAllTagsWithCount() {
  const tagInfos: TagInfo[] = [];
  const tags = getPostTags();

  tags.forEach((tag) => {
    const count = readDir(join(postsDirectory, `/${tag}`)).length;
    tagInfos.push({ tag, count });
  });

  return tagInfos;
}

export function getPostSlugsByTag(tag: TagType) {
  const dirPath = join(postsDirectory, tag);
  const slugs = readDir(dirPath).map((slug) => `${tag}/${slug}`);
  return slugs;
}

export function getPostBySlug(slug: string) {
  const [tag] = slug.split("/");
  const fullPath = join(postsDirectory, `/${slug}/content.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, tag, slug, content } as Post;
}

function getSortedPostsByCreatedAt(slugs: string[]) {
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));
  return posts;
}

export function getAllPosts(tag?: TagType): Post[] {
  let slugs;

  if (!tag) {
    const tags = getPostTags();
    slugs = tags.reduce<string[]>(
      (acc, tag) => [...acc, ...getPostSlugsByTag(tag)],
      []
    );
  } else {
    slugs = getPostSlugsByTag(tag);
  }

  const posts = getSortedPostsByCreatedAt(slugs);
  return posts;
}
