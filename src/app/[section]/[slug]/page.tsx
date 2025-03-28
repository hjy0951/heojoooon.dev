import { getPostBySlug, getPostDetail } from "@/lib/apiv2";
import { use } from "react";
import { css } from "#/styled-system/css";
import { createTOCInfo } from "@/lib/utils";
import { ProfileCard } from "@/components/layout";
import { getPostTags, getPostSlugsByTag } from "@/lib/api";
import { Body, Giscus, Header, TOC } from "@/components/post";
import { Metadata } from "next";

type PostParams = {
  params: Promise<{
    section: string;
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: PostParams): Promise<Metadata> => {
  const { section, slug } = await params;
  const post = getPostDetail({ section, slug });

  const baseUrl = "https://heojooon.vercel.app";
  const title = `${post.title} | Heojoooon.`;
  const imageUrl = `${baseUrl}/post-images/${section}/${slug}/cover.png`;
  const publishedTime = new Date(post.createdAt).toISOString();

  return {
    title,
    description: post.description,

    openGraph: {
      title,
      description: post.description,
      publishedTime,
      type: "article",
      url: `${baseUrl}/${section}/${slug}`,
      images: [imageUrl],
    },
    twitter: {
      title,
      description: post.description,
      images: [imageUrl],
    },
  };
};

export const generateStaticParams = () => {
  const params = getPostTags()
    .flatMap((tag) => getPostSlugsByTag(tag))
    .map((slug) => slug.split("/")[1].replace(/\.mdx$/, ""))
    .map((realSlug) => ({
      slug: realSlug,
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

        <Giscus />
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
  flexGrow: 1,
  overflow: "auto",
});

const articleStyle = css({
  minWidth: "100%",
  maxWidth: "800px",
  p: "60px 20px",
});
