import { css } from "#/styled-system/css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={containerStyle}>
      © {currentYear}. Heojoooon all rights reserved.
    </footer>
  );
};

export default Footer;

const containerStyle = css({
  width: "full",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});