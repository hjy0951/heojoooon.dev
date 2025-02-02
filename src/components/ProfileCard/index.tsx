import Image from "next/image";
import ProfileImage from "#/public/images/profile.jpg";
import { css } from "#/styled-system/css";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import SNSLink from "./SNSLink";

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

const ProfileCard = () => {
  return (
    <div className={containerStyle}>
      <div className={imageWrapperStyle}>
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

export default ProfileCard;

const containerStyle = css({
  padding: "24px 36px",
  display: "flex",
  gap: "20px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.24)",
  borderRadius: "12px",
});

const imageWrapperStyle = css({ width: "180px" });

const profileImageStyle = css({ borderRadius: "20px" });

const linkGroupStyle = css({
  display: "flex",
  flexDir: "column",
  gap: "4px",
  justifyContent: "flex-end",
});
