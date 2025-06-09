import { css, cx } from "#/styled-system/css";
import { Post } from "@/lib/api";
import { calculateTimeToRead, convertTagName, TagType } from "@/lib/utils";
import { suite, yeongdeokSea } from "@/styles/font";
import { CustomLink } from "../mdx-components";

interface HeaderProps {
  post: Post;
}

export const Header = ({ post }: HeaderProps) => {
  const timeToRead = calculateTimeToRead(post.content);
  return (
    <header className={cx(postDescriptionStyle, `${suite.className}`)}>
      <h1 className={postTitleStyle}>{post.title}</h1>

      <div className={cx(postInfoStyle, `${yeongdeokSea.className}`)}>
        <h3>{post.createdAt},</h3>
        <h3>{timeToRead} min.</h3>
      </div>

      <div className={postTagsStyle}>
        {post.tags.map((tag) => (
          <h3 key={`${tag}-tag`}>
            <CustomLink href={`/tag/${tag}`} currentWindow>
              #{convertTagName(tag as TagType)}
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
  gap: "16px",
  alignItems: "center",
});

const postTitleStyle = css({
  fontSize: "40px",
  fontWeight: "800",
  color: "prose.title",
});

const postInfoStyle = css({
  display: "flex",
  gap: "12px",
  fontWeight: 500,
  fontSize: "20px",
  color: "prose.description",
});

const postTagsStyle = css({ display: "flex", gap: "6px", flexWrap: "wrap" });
