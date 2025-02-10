import { Post } from "@/lib/apiv2";
import { PostListItem } from "./list-item";
import { css } from "#/styled-system/css";
import Link from "next/link";
import { RightArrowIcon } from "../icons";

type PostListProps = {
  posts: Post[];
  brief?: boolean;
  targetUrl?: string;
};

const viewCount = 4;

export const PostList = ({
  posts,
  brief = false,
  targetUrl = "/",
}: PostListProps) => {
  const numOfBrief = Math.min(viewCount, posts.length);

  return (
    <>
      <div className={postListStyle}>
        {brief
          ? posts
              .slice(0, numOfBrief)
              .map((post) => <PostListItem key={`${post.title}`} {...post} />)
          : posts.map((post) => (
              <PostListItem key={`${post.title}`} {...post} />
            ))}
      </div>

      {brief && numOfBrief === viewCount && (
        <div className={linkWrapperStyle}>
          <Link href={targetUrl} className={linkStyle}>
            READ MORE
            <RightArrowIcon />
          </Link>
        </div>
      )}
    </>
  );
};

const postListStyle = css({
  width: "full",
  display: "flex",
  flexDir: "column",
  gap: "32px",
  justifyItems: "center",

  md: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const linkWrapperStyle = css({
  mt: "20px",
  display: "flex",
  justifyContent: "flex-end",
  fontWeight: 500,
  fontSize: 14,

  _hover: {
    fontWeight: 600,

    "& svg": {
      animation: "bounceRight 2s infinite ease-out",
      willChange: "transform",
    },
  },
});

const linkStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
