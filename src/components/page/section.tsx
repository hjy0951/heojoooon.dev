import { css } from "#/styled-system/css";
import { getPostsBySection } from "@/lib/apiv2";
import { ProfileCard } from "../layout";
import { Partition, PostList } from "../post";

type SectionPageProps = {
  section: string;
};

export const SectionPage = ({ section }: SectionPageProps) => {
  const { contents } = getPostsBySection(section);
  return (
    <div className={containerStyle}>
      <main className={mainStyle}>
        <Partition key={section} name={section}>
          <PostList posts={contents} targetUrl={`/${section}`} />
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
