import { css } from "#/styled-system/css";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className={containerStyle}>
      <main>Main</main>

      <ProfileCard />
    </div>
  );
}

const containerStyle = css({
  display: "flex",
  flexDir: "column",
  alignItems: "center",
});
