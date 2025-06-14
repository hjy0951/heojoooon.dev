import { css } from "#/styled-system/css";
import { getAllPosts, getAllTags } from "@/lib/api";
import { PostList, Tags } from "../post-list";
import { SNSLinkGroup } from "../layout";
import { Suspense } from "react";

interface MainPageProps {
  selectedTag?: string;
}

export const MainPage = async ({ selectedTag }: MainPageProps) => {
  const [posts, tagInfo] = await Promise.all([getAllPosts(), getAllTags()]);

  const allPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className={containerStyle}>
      <Tags
        tagList={tagInfo}
        selectedTag={selectedTag}
        totalCount={posts.length}
      />

      <main className={mainStyle}>
        <Suspense fallback={<div>Loading...</div>}>
          <PostList posts={allPosts} wide />
        </Suspense>
      </main>

      <SNSLinkGroup />
    </div>
  );
};

const containerStyle = css({
  pt: "112px",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  gap: "24px",
});

const mainStyle = css({
  margin: "auto",
  pt: "32px",
  pb: "80px",
  maxWidth: "1000px",
  minWidth: "320px",
});
