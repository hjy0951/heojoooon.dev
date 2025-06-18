import Link from "next/link";
import { Post } from "@/lib/api";
import { css, cx } from "#/styled-system/css";

interface PostNavigationProps {
  prev: Post | null;
  next: Post | null;
}

export const PostNavigation = ({ prev, next }: PostNavigationProps) => {
  return (
    <nav className={navigationStyle}>
      {prev && (
        <Link href={`/${prev.slug}`} className={linkStyle}>
          <div className={contentStyle}>
            <span className={labelStyle}>이전 글</span>
            <span className={`${titleStyle} title`}>{prev.title}</span>
          </div>
        </Link>
      )}
      {next && (
        <Link href={`/${next.slug}`} className={linkStyle}>
          <div className={cx(contentStyle, nextContentStyle)}>
            <span className={labelStyle}>다음 글</span>
            <span className={`${titleStyle} title`}>{next.title}</span>
          </div>
        </Link>
      )}
    </nav>
  );
};

const navigationStyle = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  mt: "48px",
  py: "32px",
  borderTop: "1px solid",
  borderColor: "prose.border",
});

const linkStyle = css({
  p: "4px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: "prose.text",
  transition: "all 0.2s ease-in-out",
  maxWidth: "45%",

  _hover: {
    "& .title": {
      color: "prose.toc.active",
      backgroundColor: "background.sns",
    },
  },
});

const contentStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflow: "hidden",
});

const nextContentStyle = css({
  alignItems: "flex-end",
});

const labelStyle = css({
  px: "6px",
  fontSize: "md",
  color: "prose.toc.inactive",
});

const titleStyle = css({
  fontSize: "md",
  fontWeight: "medium",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  py: "4px",
  px: "6px",
  borderRadius: "4px",
  transition: "all 0.2s ease-in-out",
});
