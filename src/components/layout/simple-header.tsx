import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";
import Link from "next/link";

const navs = [
  { href: "/", text: "Home." },
  { href: "/about", text: "About." },
];

const SimpleHeader = () => {
  return (
    <header className={wrapperStyle}>
      <div className={containerStyle}>
        {navs.map(({ href, text }) => (
          <Link
            key={`nav-to-${text}`}
            href={href}
            className={cx(pretendard.className, linkStyle)}
          >
            {text}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default SimpleHeader;

const wrapperStyle = css({
  paddingX: "6%",
  width: "full",
  height: "80px",
  boxShadow: "0 0 6px 3px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const containerStyle = css({
  display: "flex",
  gap: "16px",
  justifyContent: "space-between",
});

const linkStyle = css({
  fontSize: "18px",
  fontWeight: 500,

  _hover: {
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },
});
