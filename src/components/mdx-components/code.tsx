import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";
import { HTMLAttributes, PropsWithChildren } from "react";

interface CodeProps extends HTMLAttributes<HTMLElement> {
  "data-theme"?: string;
}

export const Code = ({
  children,
  "data-theme": dataTheme,
  ...props
}: PropsWithChildren<CodeProps>) => {
  if (dataTheme) {
    return <code {...props}>{children}</code>;
  }

  return (
    <code className={cx(codeStyle, pretendard.className)} {...props}>
      {children}
    </code>
  );
};

const codeStyle = css({
  padding: "3px 6px",
  borderRadius: "4px",
  fontWeight: 600,
  color: "prose.code",
  backgroundColor: "background.code",
});
