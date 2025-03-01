import { css } from "#/styled-system/css";
import { getSections } from "@/lib/apiv2";
import Link from "next/link";

export const Header = () => {
  const sections = getSections();

  return (
    <header className={containerStyle}>
      <div className={css({ display: "flex", gap: "20px" })}>
        <Link href="/">home.</Link>
        {sections.map((section) => (
          <Link key={`link-${section}`} href={`/${section}`}>
            {section}.
          </Link>
        ))}
      </div>

      <div>
        <Link href="/about">
          <s>about.</s>
        </Link>
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
