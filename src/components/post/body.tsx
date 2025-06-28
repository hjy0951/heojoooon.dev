import { css, cx } from "#/styled-system/css";
import { suite } from "@/styles/font";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import {
  Code,
  BlockQuote,
  CustomLink,
  CallOut,
  MDXImage,
} from "../mdx-components";
import { Post } from "@/lib/api";
import moonlightTheme from "@/assets/themes/moonlight-ii.json" with { type: "json" };
import { CodeBlock } from "../mdx-components/code-block";

interface BodyProps {
  post: Post;
}

export const Body = ({ post }: BodyProps) => {
  return (
    <section
      className={cx(
        "prose",
        proseStyle,
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
          img: MDXImage,
          a: CustomLink,
          CallOut,
          pre: CodeBlock,
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

export const proseStyle = css({
  "& figure": {
    marginBottom: "prose.block",
  },
  // Typography
  "& h1, & h2, & h3, & h4": {
    paddingTop: "prose.heading",
    paddingBottom: "prose.text",
    color: "prose.text",
    scrollMarginTop: "80px",
  },
  "& h1": {
    textStyle: "prose.h1",
  },
  "& h2": {
    textStyle: "prose.h2",
  },
  "& h3": {
    textStyle: "prose.h3",
  },
  "& h4": {
    textStyle: "prose.h4",
  },

  "& p": {
    width: "100%",
    paddingBottom: "prose.text",
    color: "prose.text",
    textStyle: "prose.p",
  },
  "& blockquote p, & li p, & .callout-body p": {
    paddingBottom: "inherit",
    color: "inherit",
    textStyle: "inherit",
  },
  "& blockquote": {
    "& ol, & ul": {
      paddingBottom: "0",
    },
  },

  "& u": {
    textUnderlineOffset: "4px",
  },
  "& strong": {
    fontWeight: "800",
  },
  "& hr": {
    margin: "prose.block 0",
    color: "prose.border",
  },

  // Lists
  "& ul": {
    paddingBottom: "4px",
    margin: "0",
    display: "block",
    listStyleType: "disc",
    marginBlockEnd: "0.5em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "20px",
    color: "prose.text",

    "& li p": {
      padding: "0",
    },
    "& li::marker": {
      fontSize: "0.85em",
      color: "prose.secondary",
    },
  },
  "& li": {
    marginBottom: "prose.small",
    "&::marker": {
      color: "prose.secondary",
    },
  },
  "& ol": {
    listStyleType: "decimal",
    paddingY: "12px",
    paddingInlineStart: "1.5em",
    color: "prose.text",

    "& li::marker": {
      fontWeight: "800",
    },
  },

  "& code[data-line-numbers]": {
    counterReset: "line",

    "& > [data-line]::before": {
      counterIncrement: "line",
      content: "counter(line)",

      marginLeft: "6px",
      display: "inline-block",
      width: "0.75rem",
      marginRight: "2rem",
      textAlign: "right",
      color: "prose.lineNumber",
    },
  },
  '& code[data-line-numbers-max-digits="2"] > [data-line]::before': {
    width: "1.25rem",
  },
  '& code[data-line-numbers-max-digits="3"] > [data-line]::before': {
    width: "1.75rem",
  },
  '& code[data-line-numbers-max-digits="4"] > [data-line]::before': {
    width: "2.25rem",
  },
});
