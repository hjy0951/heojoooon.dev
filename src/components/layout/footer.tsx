import { css } from "#/styled-system/css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={containerStyle}>
      © {currentYear}. Heojoooon all rights reserved.
    </footer>
  );
};

const containerStyle = css({
  width: "full",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "500",
});
