import { getPostBySlug } from "@/lib/apiv2";
import { use } from "react";
import { css, cx } from "#/styled-system/css";
import { yeongdeokSea } from "@/styles/font";
import {
  calculateTimeToRead,
  covertTagName,
  createTOCInfo,
  TagType,
} from "@/lib/utils";
import { CustomLink } from "@/components/atom";
import { ProfileCard } from "@/components/layout";
import { getPostTags, getPostSlugsByTag } from "@/lib/api";
import { Body, TOC } from "@/components/post";

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
  const timeToRead = calculateTimeToRead(post.content);
  const tocInfo = createTOCInfo(post.content);

  return (
    <div className={wrapperStyle}>
      <div className={containerStyle}>
        <article className={articleStyle}>
          <header
            className={cx(postDescriptionStyle, `${yeongdeokSea.className}`)}
          >
            <h1 className={postTitleStyle}>{post.title}</h1>

            <div className={postInfoStyle}>
              <h3>{post.createdAt},</h3>
              <h3>{timeToRead} min.</h3>
            </div>

            <div className={postTagsStyle}>
              {post.tags.map((tag) => (
                <h3 key={`${tag}-tag`}>
                  <CustomLink href={`/${section}/${tag}`} currentWindow>
                    {covertTagName(tag as TagType)},
                  </CustomLink>
                </h3>
              ))}
            </div>
          </header>

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

const postDescriptionStyle = css({
  display: "flex",
  flexDir: "column",
  alignItems: "center",
});

const postTitleStyle = css({
  fontSize: "40px",
  fontWeight: "600",
});

const postInfoStyle = css({
  display: "flex",
  gap: "12px",
  fontWeight: 500,
  fontSize: "20px",
});

const postTagsStyle = css({ display: "flex", gap: "6px", flexWrap: "wrap" });
