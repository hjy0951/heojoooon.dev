import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";
import { HTMLAttributes, PropsWithChildren } from "react";

type CodeProps = {
  // codeText: string;
  "data-theme"?: string;
} & HTMLAttributes<HTMLElement>;

export const Code = ({
  children,
  "data-theme": dataTheme,
  ...props
}: PropsWithChildren<CodeProps>) => {
  return dataTheme ? (
    <code {...props}>{children}</code>
  ) : (
    <code className={cx(codeStyle, pretendard.className)} {...props}>
      {children}
    </code>
  );
};

const codeStyle = css({
  padding: "3px 6px",
  borderRadius: "4px",
  fontWeight: 600,
  color: "#DE645B",
  backgroundColor: "#dedede",
});
