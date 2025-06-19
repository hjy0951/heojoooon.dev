import { css, cx } from "#/styled-system/css";
import { Section } from "@/components/about";
import { ProfileCard } from "@/components/layout";
import { pretendard } from "@/styles/font";
import { Metadata } from "next";
import { blogTitle } from "@/constants";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = `About | ${blogTitle}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title,
    keywords: ["허준영", "frontend"],
    alternates: {
      canonical: `${baseUrl}/about`,
    },
    openGraph: {
      title,
      type: "profile",
      url: `${baseUrl}/about`,
    },
    twitter: {
      card: "summary",
      title,
    },
  };
};

const AboutPage = () => {
  return (
    <div className={cx(pretendard.className, containerStyle)}>
      <ProfileCard isViewName={false} />

      <Section title="ABOUT ME">
        <p className={textStyle}>안녕하세요. 프론트엔드 개발자 허준영입니다.</p>

        <p className={textStyle}>
          팀원들과의 원활한 협업을 위해 항상 먼저 소통하려 노력하며, 함께 문제를
          해결하고 나아가는 과정을 중요하게 생각합니다. 단순히 의견을 나누는
          것을 넘어, 서로의 입장을 이해하고 더 나은 방향을 함께 고민하는
          개발자가 되고자 합니다. 협업은 결과 이상의 가치를 만들어낸다고 믿기에,
          언제나 열린 자세로 팀에 기여하려 노력하고 있습니다.
        </p>

        <p className={textStyle}>
          내가 만든 서비스가 사용자와 상호작용하며 실제로 동작하는 모습을 보며,
          단순한 개발을 넘어 사용자 경험에 가치를 더할 수 있다는 점에 큰 매력과
          보람을 느껴 시스템 엔지니어링에서 프론트엔드 개발로 전환하게
          되었습니다.
        </p>
      </Section>
    </div>
  );
};

export default AboutPage;

const containerStyle = css({
  marginX: "auto",
  marginTop: "96px",
  padding: "32px",
  maxWidth: "800px",
  width: "100%",
  display: "flex",
  flexDir: "column",
});

const textStyle = css({
  fontSize: "15px",
  fontWeight: 400,
  color: "prose.text",
});
