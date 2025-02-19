import { SectionPage } from "@/components/page";
import { getSections, getPostsAndTagsBySection } from "@/lib/apiv2";
import { use } from "react";

type TagParams = {
  params: Promise<{
    section: string;
    tag: string;
  }>;
};

export const generateStaticParams = () => {
  const sections = getSections();
  const params = sections
    .flatMap((section) => {
      const { tagInfo } = getPostsAndTagsBySection(section);
      return tagInfo;
    })
    .map(({ tagName }) => ({ tag: tagName }));

  return params;
};

const TagPage = (props: TagParams) => {
  const { section, tag } = use(props.params);
  return <SectionPage section={section} selectedTag={tag} />;
};

export default TagPage;
