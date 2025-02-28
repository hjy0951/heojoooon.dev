import { css, cx } from "#/styled-system/css";
import { suite } from "@/styles/font";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import { Code, BlockQuote, CustomLink, CallOut, Image } from "../atom";
import { Post } from "@/lib/apiv2";
import moonlightTheme from "@/assets/themes/moonlight-ii.json" with { type: "json" };

interface BodyProps {
  post: Post;
}

export const Body = ({ post }: BodyProps) => {
  return (
    <section
      className={cx(
        "prose",
        `${suite.className}`,
        css({
          position: "relative",
          mt: "48px",
          width: "100%",
          fontWeight: 500,
        })
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
  );
};
