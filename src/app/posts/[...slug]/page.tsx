import { getPostBySlug } from "@/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";
import { use } from "react";

import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { css } from "#/styled-system/css";

type PostParams = {
  params: Promise<{
    slug: string[];
  }>;
};

const PostPage = (props: PostParams) => {
  const { slug } = use(props.params);
  const post = getPostBySlug(slug.join("/"));

  return (
    <div className={containerStyle}>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  // theme: { dark: "github-dark-dimmed", light: "github-light" },
                  theme: "github-dark-dimmed",
                  keepBackground: true,
                },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
    </div>
  );
};

export default PostPage;

const containerStyle = css({ margin: "auto", maxWidth: "800px" });
