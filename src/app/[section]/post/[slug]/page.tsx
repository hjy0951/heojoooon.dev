import { getPostBySlug } from "@/lib/apiv2";
import { use } from "react";
import { css } from "#/styled-system/css";
import { createTOCInfo } from "@/lib/utils";
import { ProfileCard } from "@/components/layout";
import { getPostTags, getPostSlugsByTag } from "@/lib/api";
import { Body, Header, TOC } from "@/components/post";

type PostParams = {
  params: Promise<{
    section: string;
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  const params = getPostTags()
    .map((tag) => getPostSlugsByTag(tag))
    .map((slug) => ({
      slug,
    }));

  return params;
};

const PostPage = (props: PostParams) => {
  const { section, slug } = use(props.params);
  const post = getPostBySlug(`${section}/${slug}`);
  const tocInfo = createTOCInfo(post.content);

  return (
    <div className={wrapperStyle}>
      <div className={containerStyle}>
        <article className={articleStyle}>
          <Header section={section} post={post} />

          <Body post={post} />
        </article>

        <ProfileCard />
      </div>

      <TOC data={tocInfo} />
    </div>
  );
};

export default PostPage;

const wrapperStyle = css({
  margin: "auto",
  maxWidth: "800px",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",

  md: { maxWidth: "1200px" },
});

const containerStyle = css({
  display: "flex",
  flexDir: "column",
  alignItems: "center",
});

const articleStyle = css({
  maxWidth: "800px",
  p: "60px 20px",
  display: "flex",
  flexDir: "column",
  gap: "40px",
});
