import { css } from "#/styled-system/css";
import { getPostsAndTagsBySection } from "@/lib/apiv2";
import { ProfileCard } from "../layout";
import { Partition, PostList } from "../post";
import Tags from "../Tags";

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
    <>
      <div className={css({ position: "sticky", top: 0, right: "20px" })}>
        <Tags section={section} tagList={tagInfo} selectedTag={selectedTag} />
      </div>

      <div className={containerStyle}>
        <main className={mainStyle}>
          <Partition key={section} name={section}>
            <PostList posts={allPosts} targetUrl={`/${section}`} wide />
          </Partition>
        </main>

        <ProfileCard />
      </div>
    </>
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
