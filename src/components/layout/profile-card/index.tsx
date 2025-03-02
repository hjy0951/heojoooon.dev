import Image from "next/image";
import ProfileImage from "#/public/images/profile.jpg";
import { css, cx } from "#/styled-system/css";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import SNSLink from "./sns-link";
import { pretendard } from "@/styles/font";
import StarIcon from "@/components/icons/star";

const SNSs = [
  {
    name: "GitHub",
    icon: <RiGithubFill size={28} />,
    url: "https://github.com/hjy0951",
  },
  {
    name: "LinkedIn",
    icon: <RiLinkedinBoxFill size={28} />,
    url: "https://www.linkedin.com/in/%EC%A4%80%EC%98%81-%ED%97%88-159288250/",
  },
  {
    name: "Instagram",
    icon: <RiInstagramLine size={28} />,
    url: "https://www.instagram.com/heojoooon/",
  },
  {
    name: "hjy0951@gmail.com",
    icon: <MdOutlineEmail size={28} />,
    url: "mailto:hjy0951@gmail.com",
  },
];

export const ProfileCard = () => {
  return (
    <div className={containerStyle}>
      <div className={imageWrapperStyle}>
        <div
          className={cx(
            pretendard.className,
            css({
              zIndex: 100,
              position: "absolute",
              top: "8%",
              left: "33%",
              display: "flex",
              color: "#fdfdfd",
              flexDir: "column",
              fontSize: "14px",
            })
          )}
        >
          <div
            className={css({
              display: "flex",
              gap: "4px",
              alignItems: "center",
            })}
          >
            <div
              className={css({
                p: "1px 4px",
                display: "flex",
                gap: "2px",
              })}
            >
              <StarIcon />
              <StarIcon />
              <StarIcon className={flickerAnimation} />
            </div>
          </div>

          <p
            className={css({
              textAlign: "center",
            })}
          >
            허준영.
          </p>
        </div>

        <Image
          className={profileImageStyle}
          src={ProfileImage}
          alt="profile image"
          placeholder="blur"
          priority
        />
      </div>

      <div className={linkGroupStyle}>
        {SNSs.map((sns, index) => (
          <SNSLink key={index} {...sns} />
        ))}
      </div>
    </div>
  );
};

const containerStyle = css({
  padding: "24px 36px",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  borderRadius: "12px",
});

const imageWrapperStyle = css({ position: "relative", width: "180px" });

const profileImageStyle = css({
  borderRadius: "20px",
  filter: "grayscale(20%) brightness(70%)",
});

const linkGroupStyle = css({
  display: "flex",
  flexDir: "column",
  gap: "4px",
  justifyContent: "flex-end",
});

const flickerAnimation = css({
  animation: "flickerEffect 4s infinite",
});
