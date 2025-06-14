import { getAllPostSlugs, getPostBySlug } from "@/lib/api";
import { css } from "#/styled-system/css";
import { createTOCInfo } from "@/lib/utils";
import { Body, Giscus, Header, TOC } from "@/components/post";
import { Metadata } from "next";
import { SNSLinkGroup } from "@/components/layout";

type PostParams = {
  params: Promise<{
    section: string;
    slug: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: PostParams): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const baseUrl = "https://heojooon.vercel.app";
  const title = `${post.title} | Heojoooon.`;
  const imageUrl = `${baseUrl}/post-images/${slug}/cover.png`;
  const publishedTime = new Date(post.createdAt).toISOString();

  return {
    title,
    description: post.description,

    openGraph: {
      title,
      description: post.description,
      publishedTime,
      type: "article",
      url: `${baseUrl}/${slug}`,
      images: [imageUrl],
    },
    twitter: {
      title,
      description: post.description,
      images: [imageUrl],
    },
  };
};

export const generateStaticParams = async () => {
  const params = (await getAllPostSlugs()).map((slug) => ({
    slug,
  }));

  return params;
};

const PostPage = async (props: PostParams) => {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  const tocInfo = createTOCInfo(post.content);

  return (
    <div className={wrapperStyle}>
      <div className={containerStyle}>
        <article className={articleStyle}>
          <Header post={post} />

          <Body post={post} />
        </article>

        <SNSLinkGroup />

        <Giscus />
      </div>

      <TOC data={tocInfo} />
    </div>
  );
};

export default PostPage;

const wrapperStyle = css({
  marginX: "auto",
  marginTop: "96px",
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
