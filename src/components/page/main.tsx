import { css } from "#/styled-system/css";
import { getAllPosts, getAllTagsWithCount } from "@/lib/api";
import { TagType } from "@/lib/utils";
import { ProfileCard } from "../layout";
import { Partition, PostListItem } from "../post";

type MainPageProps = {
  currentTag?: TagType;
};

export const MainPage = ({ currentTag }: MainPageProps) => {
  const tagList = getAllTagsWithCount();
  const totalCount = tagList.reduce((acc, { count }) => acc + count, 0);
  tagList.unshift({ tag: "all", count: totalCount });

  const posts = getAllPosts(currentTag);

  return (
    <div className={containerStyle}>
      <main className={mainStyle}>
        <Partition name="DEVELOP">
          <div className={postListStyle}>
            {posts.map((post) => (
              <PostListItem key={`${post.title}`} {...post} />
            ))}
          </div>
        </Partition>

        <Partition name="LIFE">
          <div className={postListStyle}>
            {posts.map((post) => (
              <PostListItem key={`${post.title}`} {...post} />
            ))}
          </div>
        </Partition>
      </main>

      <ProfileCard />
    </div>
  );
};

const containerStyle = css({
  mt: "40px",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  gap: "40px",
});

const mainStyle = css({
  margin: "auto",
  px: "40px",
  maxWidth: "1000px",
  minWidth: "400px",
  display: "grid",
  gap: "60px",
  gridTemplateColumns: "repeat(1, 1fr)",
  md: { gridTemplateColumns: "repeat(2, 1fr)" },
});

const postListStyle = css({
  width: "full",
  display: "flex",
  flexDir: "column",
  gap: "32px",
  justifyItems: "center",
  gridTemplateColumns: "repeat(1, 1fr)",
  sm: { gridTemplateColumns: "repeat(2, 1fr)" },
});
