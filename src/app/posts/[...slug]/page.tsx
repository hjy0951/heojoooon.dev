import { getPostBySlug, getPostSlugsByTag, getPostTags } from "@/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";
import { use } from "react";

import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { css, cx } from "#/styled-system/css";
import ProfileCard from "@/components/ProfileCard";
import { yeongdeokSea, suite } from "@/styles/font";
import { covertTagName } from "@/lib/utils";

type PostParams = {
  params: Promise<{
    slug: string[];
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
  const { slug } = use(props.params);
  const post = getPostBySlug(slug.join("/"));

  return (
    <div className={containerStyle}>
      <article className={articleStyle}>
        <section
          className={cx(postDescriptionStyle, `${yeongdeokSea.className}`)}
        >
          <h1 className={postTitleStyle}>{post.title}</h1>

          <div className={postInfoStyle}>
            <h3>{post.createdAt},</h3>
            <h3>{covertTagName(post.tag)}</h3>
          </div>
        </section>

        <section className={cx(`${suite.className}`, css({ fontWeight: 500 }))}>
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark-dimmed",
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
  py: "60px",
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
});
