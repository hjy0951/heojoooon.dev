"use client";

import { css } from "#/styled-system/css";
import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";

const navs = [
  { href: "/", text: "home" },
  { href: "/develop", text: "develop" },
  { href: "/life", text: "life" },
  { href: "/about", text: "about" },
];

export const Header = () => {
  const pathname = usePathname();
  const isCurrentPath = (current: string) => {
    return current === "home"
      ? pathname === "/"
      : pathname.startsWith(`/${current}`);
  };

  return (
    <header className={containerStyle}>
      <div className={css({ display: "flex", gap: "12px" })}>
        {navs.map((navProps) => (
          <NavButton
            key={`link-${navProps.text}`}
            {...navProps}
            selected={isCurrentPath(navProps.text)}
          />
        ))}
      </div>
    </header>
  );
};

const containerStyle = css({
  paddingX: "6%",
  width: "full",
  height: "80px",
  boxShadow: "0 0 6px 3px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
