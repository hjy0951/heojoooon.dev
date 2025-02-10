import { css } from "#/styled-system/css";
import { getPostsAndTagsBySection } from "@/lib/apiv2";
import { ProfileCard } from "../layout";
import { Partition, PostList, Tags } from "../post";

type SectionPageProps = {
  section: string;
  selectedTag?: string;
};

export const SectionPage = ({ section, selectedTag }: SectionPageProps) => {
  const { posts, tagInfo } = getPostsAndTagsBySection(section);
  const allPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className={containerStyle}>
      <div className={tagsContainerStyle}>
        <Tags section={section} tagList={tagInfo} selectedTag={selectedTag} />
      </div>

      <main className={mainStyle}>
        <Partition key={section} name={section}>
          <PostList posts={allPosts} targetUrl={`/${section}`} wide />
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
});

const tagsContainerStyle = css({
  lg: { position: "fixed", top: "112px", right: "3%" },
});
