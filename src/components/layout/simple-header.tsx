import { css } from "#/styled-system/css";
import { CustomLink } from "../mdx-components";
import { ModeButton } from "./mode-button";

const navs = [
  { href: "/", text: "Home." },
  { href: "/about", text: "About." },
];

const SimpleHeader = () => {
  return (
    <header className={wrapperStyle}>
      <div className={containerStyle}>
        {navs.map(({ href, text }) => (
          <CustomLink
            key={`nav-to-${text}`}
            href={href}
            color={"secondary"}
            currentWindow
          >
            {text}
          </CustomLink>
        ))}
      </div>

      <ModeButton />
    </header>
  );
};

export default SimpleHeader;

const wrapperStyle = css({
  zIndex: 10000,
  position: "fixed",
  top: 0,
  paddingX: "6%",
  width: "full",
  height: "72px",
  backgroundColor: "background.primary",
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
