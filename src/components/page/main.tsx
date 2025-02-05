import { css } from "#/styled-system/css";
import Tags from "@/components/Tags";
import { getAllPosts, getAllTagsWithCount } from "@/lib/api";
import { TagType } from "@/lib/utils";
import PostGridItem from "../PostGridItem";
import { ProfileCard } from "../layout";

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
        <Tags tagList={tagList} selectedTag={currentTag} />

        <div className={postsGridStyle}>
          {posts.map((post) => (
            <PostGridItem key={`${post.title}`} {...post} />
          ))}
        </div>
      </main>

      <ProfileCard />
    </div>
  );
};

const containerStyle = css({
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
});

const postsGridStyle = css({
  width: "full",
  display: "grid",
  gap: "32px",
  justifyItems: "center",
  gridTemplateColumns: "repeat(1, 1fr)",
  sm: { gridTemplateColumns: "repeat(2, 1fr)" },
});
