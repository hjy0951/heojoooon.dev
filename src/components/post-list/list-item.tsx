import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { PaperPlaneIcon } from "../icons";
import { Badge } from "./badge";
import { convertTagName, TagType } from "@/lib/utils";
import { Post } from "@/lib/api";

type PostListItemProps = Omit<Post, "content">;

export const PostListItem = ({
  title,
  description,
  createdAt,
  updatedAt,
  slug,
  tags,
}: PostListItemProps) => {
  const displayDate = updatedAt ? `${updatedAt} (updated)` : createdAt;

  return (
    <Link href={`/${slug}`} className={containerStyle}>
      <div className={cx(coverImageWrawpperStyle, coverImageStyle)}>
        <Image
          className={coverImageStyle}
          src={`/post-images/${slug}/cover.png`}
          alt={`"${title}" 커버 이미지`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={cx(postInfoStyle, pretendard.className)}>
        <div>
          <p className={titleStyle}>{title}</p>
          {description && <p className={descriptionStyle}>{description}</p>}
        </div>

        <div>
          <div className={postTagsStyle}>
            {tags.map((tag) => (
              <Badge key={tag}>{convertTagName(tag as TagType)}</Badge>
            ))}
          </div>

          <div className={dateWrapperStyle}>
            <PaperPlaneIcon />
            <p className={dateStyle}>{displayDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const containerStyle = css({
  width: "100%",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  gap: "12px",
  maxWidth: "440px",
  borderRadius: "12px",
  transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",

  _hover: {
    boxShadow: "0 4px 6px rgba(0,0,0,0.40), 0 2px 4px rgba(0,0,0,0.32)",
    transform: "translateY(-4px)",
  },

  sm: { flexDir: "row", alignItems: "normal" },
});

const coverImageWrawpperStyle = css({
  m: "8px",
  position: "relative",
  width: "180px",
  height: "180px",
  minWidth: "180px",
});

const coverImageStyle = css({
  borderRadius: "6px",
});

const postInfoStyle = css({
  width: "100%",
  flex: 1,
  p: "12px",
  display: "flex",
  flexDir: "column",
  justifyContent: "space-between",
});

const titleStyle = css({ fontWeight: 600, color: "prose.title" });

const descriptionStyle = css({
  fontSize: "14px",
  fontWeight: 500,
  color: "prose.description",
});

const postTagsStyle = css({
  display: "flex",
  gap: "4px",
  justifyContent: "end",
});

const dateWrapperStyle = css({
  mt: "8px",
  display: "flex",
  gap: "4px",
  alignItems: "center",
  justifyContent: "end",
});

const dateStyle = css({
  fontSize: "14px",
  fontWeight: 500,
  color: "prose.title",
});
