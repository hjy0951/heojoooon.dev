import { css } from "#/styled-system/css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={containerStyle}>
      <Link href="/">Heojoooon.</Link>
      <div>
        <Link href="/about">About.</Link>
      </div>
    </header>
  );
};

export default Header;

const containerStyle = css({
  paddingX: "40px",
  width: "full",
  height: "80px",
  boxShadow: "0 0 6px 3px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
