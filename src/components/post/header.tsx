import { css, cx } from "#/styled-system/css";
import { Post } from "@/lib/apiv2";
import { calculateTimeToRead, covertTagName, TagType } from "@/lib/utils";
import { yeongdeokSea } from "@/styles/font";
import { CustomLink } from "../atom";

interface HeaderProps {
  section: string;
  post: Post;
}

export const Header = ({ section, post }: HeaderProps) => {
  const timeToRead = calculateTimeToRead(post.content);
  return (
    <header className={cx(postDescriptionStyle, `${yeongdeokSea.className}`)}>
      <h1 className={postTitleStyle}>{post.title}</h1>

      <div className={postInfoStyle}>
        <h3>{post.createdAt},</h3>
        <h3>{timeToRead} min.</h3>
      </div>

      <div className={postTagsStyle}>
        {post.tags.map((tag) => (
          <h3 key={`${tag}-tag`}>
            <CustomLink href={`/${section}/tag/${tag}`} currentWindow>
              #{covertTagName(tag as TagType)}
            </CustomLink>
          </h3>
        ))}
      </div>
    </header>
  );
};

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
