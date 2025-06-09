import { css } from "#/styled-system/css";
import { HTMLAttributes } from "react";

type CodeBlockProps = HTMLAttributes<HTMLPreElement>;

export const CodeBlock = (props: CodeBlockProps) => {
  return <pre className={codeBlockStyle} {...props} />;
};

export const codeBlockStyle = css({
  padding: "prose.text",
  margin: "0 prose.small",
  borderRadius: "8px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  overflow: "scroll",
  "& > code": {
    display: "grid",
    fontSize: "13px",
  },
  "& code span[data-highlighted-line]": {
    borderLeft: "2px solid #fdfdfd",
    backgroundColor: "prose.highlight",
  },
});
