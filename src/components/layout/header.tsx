import { css } from "#/styled-system/css";
import { getSections } from "@/lib/apiv2";
import { NavButton } from "./nav-button";

export const Header = () => {
  const sections = getSections();

  return (
    <header className={containerStyle}>
      <div className={css({ display: "flex", gap: "12px" })}>
        <NavButton href="/" text="home" />
        {sections.map((section) => (
          <NavButton
            key={`link-${section}`}
            href={`/${section}`}
            text={section}
          />
        ))}
        <NavButton href="/about" text="about" />
      </div>
    </header>
  );
};

const containerStyle = css({
  paddingX: "10%",
  width: "full",
  height: "80px",
  boxShadow: "0 0 6px 3px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
