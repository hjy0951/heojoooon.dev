"use client";

import { css, cx } from "#/styled-system/css";
import { useEffect, useRef, useState } from "react";
import { CustomLink } from "../mdx-components";
import { ModeButton } from "./mode-button";

const navs = [
  { href: "/", text: "Home." },
  { href: "/about", text: "About." },
];

const SimpleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={sentinelStyle} />
      <header className={cx(wrapperStyle, isScrolled && scrolledBorderStyle)}>
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
    </>
  );
};

export default SimpleHeader;

const sentinelStyle = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "1px",
  height: "1px",
  pointerEvents: "none",
  visibility: "hidden",
});

const wrapperStyle = css({
  zIndex: 10000,
  position: "fixed",
  top: 0,
  paddingX: "6%",
  width: "full",
  height: "72px",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(var(--colors-background-primary), 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid transparent",
  transition: "border-bottom-color 0.2s ease-in-out",
});

const scrolledBorderStyle = css({
  borderBottomColor: "border.header",
});

const containerStyle = css({
  display: "flex",
  gap: "16px",
  justifyContent: "space-between",
});
