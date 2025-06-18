import { getAdjacentPosts, getAllPostSlugs, getPostBySlug } from "@/lib/api";
import { use } from "react";
import { css } from "#/styled-system/css";
import { createTOCInfo } from "@/lib/utils";
import {
  Body,
  Giscus,
  Header,
  TOC,
  PostNavigation,
  UtilityButtonGroup,
} from "@/components/post";
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
  const post = getPostBySlug(slug);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const title = `${post.title} | HEOJOOON.`;
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

export const generateStaticParams = () => {
  const params = getAllPostSlugs().map((slug) => ({
    slug,
  }));

  console.log(params);

  return params;
};

const PostPage = (props: PostParams) => {
  const { slug } = use(props.params);
  const post = getPostBySlug(slug);
  const tocInfo = createTOCInfo(post.content);
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className={wrapperStyle}>
      <div className={containerStyle}>
        <article className={articleStyle}>
          <Header post={post} />
          <Body post={post} />
          <PostNavigation prev={prev} next={next} />
        </article>

        <SNSLinkGroup />

        <Giscus />
      </div>
      <aside className={asideStyle}>
        <div className={menuWrapperStyle}>
          <TOC data={tocInfo} />
          <UtilityButtonGroup />
        </div>
      </aside>
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
  animation: "slideInFromTop 0.4s ease-in-out forwards",
});

const asideStyle = css({
  display: "none",
  scrollBehavior: "smooth",

  md: { display: "block" },
});

const menuWrapperStyle = css({
  position: "sticky",
  bottom: 0,
  top: "160px",
  ml: "12px",
  width: "260px",
});
