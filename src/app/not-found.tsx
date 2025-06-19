import Link from "next/link";
import { css } from "#/styled-system/css";

export default function NotFound() {
  return (
    <div className={containerStyle}>
      <div className={contentStyle}>
        <h1 className={titleStyle}>404</h1>
        <h3 className={subtitleStyle}>페이지를 찾을 수 없습니다.</h3>

        <Link href="/" className={linkStyle}>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

const containerStyle = css({
  minHeight: "calc(100vh - 100px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const contentStyle = css({
  textAlign: "center",
  maxWidth: "500px",
});

const titleStyle = css({
  fontSize: "5rem",
  fontWeight: "bold",
  color: "prose.normal",
  marginBottom: "1rem",
});

const subtitleStyle = css({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "prose.normal",
  marginBottom: "1rem",
});

const linkStyle = css({
  display: "inline-block",
  padding: "12px 24px",
  backgroundColor: "background.reverse",
  color: "prose.reverse",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "500",
  transition: "background-color 0.2s",

  _hover: {
    backgroundColor: "prose.toc.active",
  },
});
