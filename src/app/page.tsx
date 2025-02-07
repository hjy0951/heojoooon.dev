import { css } from "#/styled-system/css";
import { ProfileCard } from "@/components/layout";
import { Partition, PostList } from "@/components/post";
import { getAllPosts } from "@/lib/apiv2";

const MainPage = () => {
  const postSections = getAllPosts();

  return (
    <div className={containerStyle}>
      <main className={mainStyle}>
        {postSections.map(({ section, contents }) => (
          <Partition key={section} name={section}>
            <PostList posts={contents} targetUrl={`/${section}`} brief />
          </Partition>
        ))}
      </main>

      <ProfileCard />
    </div>
  );
};

export default MainPage;

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
