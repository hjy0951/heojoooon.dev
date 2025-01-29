import { css } from "#/styled-system/css";
import Image from "next/image";
import Link from "next/link";

type PostGridItemProps = {
  title: string;
  createdAt: string;
  slug: string;
};

const PostGridItem = ({ title, createdAt, slug }: PostGridItemProps) => {
  return (
    <Link href={`/`} className={containerStyle}>
      <div className={coverImageWrawpperStyle}>
        <Image
          className={coverImageStyle}
          src={`/contents/${slug}/cover.png`}
          alt={`"${title}" 커버 이미지`}
          width={440}
          height={330}
        />
      </div>

      <div className={infoStyle}>
        <p>{title}</p>
        <p>{createdAt}</p>
      </div>
    </Link>
  );
};

export default PostGridItem;

const containerStyle = css({
  maxWidth: "440px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  borderRadius: "12px",
  transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",

  _hover: {
    boxShadow: "0 4px 6px rgba(0,0,0,0.40), 0 2px 4px rgba(0,0,0,0.32)",
    transform: "translateY(-4px)",
  },
});

const coverImageWrawpperStyle = css({
  maxWidth: "440px",
  maxHeight: "330px",
});

const coverImageStyle = css({
  borderBottom: "1px solid rgba(0,0,0,0.12)",
  borderRadius: "12px 12px 0 0",
});

const infoStyle = css({
  p: "16px",
});
