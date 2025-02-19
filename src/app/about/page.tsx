import Image from "next/image";
import ConstructionImage from "@/assets/images/construction.png";
import { css, cx } from "#/styled-system/css";
import { pretendard } from "@/styles/font";

const AboutPage = () => {
  return (
    <div className={cx(pretendard.className, containerStyle)}>
      <Image
        src={ConstructionImage}
        alt="construction icon"
        className={imageStyle}
      />

      <p className={descriptionStyle}>🚧 공사중인 페이지입니다.</p>
    </div>
  );
};

export default AboutPage;

const containerStyle = css({
  my: "60px",
  width: "100%",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "48px",
});

const imageStyle = css({
  width: "30%",
});

const descriptionStyle = css({
  fontSize: "20px",
  fontWeight: 600,
});
