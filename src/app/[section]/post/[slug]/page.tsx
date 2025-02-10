import { getPostBySlug } from "@/lib/apiv2";
import { MDXRemote } from "next-mdx-remote/rsc";
import { use } from "react";

import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { css, cx } from "#/styled-system/css";
import { yeongdeokSea, suite } from "@/styles/font";
import { calculateTimeToRead, covertTagName, TagType } from "@/lib/utils";
import moonlightTheme from "@/assets/themes/moonlight-ii.json" with { type: "json" };
import {
  Code,
  BlockQuote,
  CustomLink,
  Image,
  CallOut,
} from "@/components/atom";
import { ProfileCard } from "@/components/layout";
import { getPostTags, getPostSlugsByTag } from "@/lib/api";

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

  return (
    <div className={containerStyle}>
      <article className={articleStyle}>
        <section
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
        </section>

        <section
          className={cx(
            "prose",
            `${suite.className}`,
            css({ fontWeight: 500, width: "100%" })
          )}
        >
          <MDXRemote
            source={post.content}
            components={{
              code: Code,
              blockquote: BlockQuote,
              img: Image,
              a: CustomLink,
              CallOut,
            }}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: moonlightTheme,
                      keepBackground: true,
                    },
                  ],
                  rehypeSlug,
                ],
              },
            }}
          />
        </section>
      </article>

      <ProfileCard />
    </div>
  );
};

export default PostPage;

const containerStyle = css({
  margin: "auto",
  maxWidth: "800px",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
});

const articleStyle = css({
  width: "100%",
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
