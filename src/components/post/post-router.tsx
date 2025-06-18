import { css } from "#/styled-system/css";
import Link from "next/link";

type PostRouterProps = {
  prevPost?: { slug: string; title: string };
  nextPost?: { slug: string; title: string };
};

export const PostRouter = ({ prevPost, nextPost }: PostRouterProps) => {
  return (
    <div className={containerStyle}>
      <div className={navigationContainerStyle}>
        {prevPost && (
          <Link href={`/posts/${prevPost.slug}`} className={navLinkStyle}>
            <span className={navLabelStyle}>이전 글</span>
            <span className={navTitleStyle}>{prevPost.title}</span>
          </Link>
        )}

        {nextPost && (
          <Link href={`/posts/${nextPost.slug}`} className={navLinkStyle}>
            <span className={navLabelStyle}>다음 글</span>
            <span className={navTitleStyle}>{nextPost.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

const containerStyle = css({
  mt: "32px",
  pt: "24px",
  borderTop: "1px solid",
  borderColor: "prose.border",
});

const navigationContainerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
});

const navLinkStyle = css({
  flex: 1,
  p: "16px",
  borderRadius: "8px",
  backgroundColor: "prose.button.background",
  transition: "all 0.2s ease-in-out",
  _hover: {
    backgroundColor: "background.sns",
    "& span": {
      color: "prose.toc.active",
    },
  },
});

const navLabelStyle = css({
  display: "block",
  fontSize: "sm",
  color: "prose.toc.inactive",
  mb: "4px",
});

const navTitleStyle = css({
  display: "block",
  fontSize: "md",
  fontWeight: "medium",
  color: "prose.toc.inactive",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
