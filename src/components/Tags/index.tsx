import { css, cva } from "#/styled-system/css";
import Link from "next/link";

type TagsProps = {
  tagList: { tagName: string; count: number }[];
  selectedTag?: string;
};

const Tags = ({ tagList, selectedTag }: TagsProps) => {
  const currentTag = selectedTag || "all";
  return (
    <nav className={containerStyle}>
      {tagList.map(({ tagName, count }) => (
        <Link
          key={tagName}
          href={tagName === "all" ? "/" : `/tag/${tagName}`}
          className={tagReceipe({
            variant: currentTag === tagName ? "selected" : "unselected",
          })}
        >
          <p className={tagNameStyle}>{tagName}</p>
          <span className={postCountStyle}>({count})</span>
        </Link>
      ))}
    </nav>
  );
};

export default Tags;

const containerStyle = css({
  margin: "auto",
  padding: "32px",
  maxWidth: "600px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  fontSize: "18px",
  fontWeight: "400",
});

const tagReceipe = cva({
  base: {
    p: "6px",
    display: "flex",
    gap: "2px",
    _hover: {
      "& p": { textDecoration: "underline", textUnderlineOffset: "4px" },
    },
  },
  variants: {
    variant: {
      unselected: { fontWeight: 400 },
      selected: { fontWeight: 700 },
    },
  },
});

const tagNameStyle = css({ lineHeight: 1.2 });

const postCountStyle = css({ fontSize: "12px" });
