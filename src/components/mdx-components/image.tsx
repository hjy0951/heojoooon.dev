import { css, cx } from "#/styled-system/css";
import { SourceIcon } from "@/components/icons";
import Image, { ImageProps } from "next/image";

export const MDXImage = ({ src, alt, ...rest }: ImageProps) => {
  // NOTE: 크기 정보 파싱 (::800x600 형태)
  const sizeMatch = alt.match(/::(\d+)x(\d+)/);
  const width = sizeMatch ? parseInt(sizeMatch[1]) : 800;
  const height = sizeMatch ? parseInt(sizeMatch[2]) : 400;
  const cleanedAlt = alt.replace(/::\d+x\d+/, "").trim();

  // NOTE: 출처 링크 파싱 (link:: 형태)
  const linkMatch = cleanedAlt.match(/link::(https?:\/\/[^\s]+)/);
  const isUnoptimized =
    typeof src === "string" ? /\.(svg|gif)$/i.test(src) : false;

  return (
    <>
      <Image
        src={src}
        alt={cleanedAlt}
        width={width}
        height={height}
        className={imageStyle}
        unoptimized={isUnoptimized}
        loading="lazy"
        quality={85}
        {...rest}
      />
      {cleanedAlt !== "" && linkMatch ? (
        <a
          className={cx(textStyle, linkStyle)}
          href={linkMatch[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SourceIcon width={14} height={14} color="#868686" />
          <span>출처</span>
        </a>
      ) : (
        <span className={cx(textStyle, descriptionStyle)}>{cleanedAlt}</span>
      )}
    </>
  );
};

const imageStyle = css({
  maxWidth: "100%",
  height: "auto",
  my: "8px 0",
  mx: "auto",
  border: "1px solid rgba(0,0,0,0.24)",
  borderRadius: "12px",
});

const textStyle = css({
  px: "16px",
  color: "prose.caption",
  fontSize: "14px",
});

const linkStyle = css({
  display: "flex",
  gap: "4px",
  alignItems: "center",
  justifyContent: "center",
  textUnderlineOffset: "4px",

  _hover: {
    textDecoration: "underline",
  },
});

const descriptionStyle = css({
  textAlign: "center",
  display: "block",
  width: "full",
});
