import { SectionPage } from "@/components/page";
import { use } from "react";

type TagParams = {
  params: Promise<{
    section: string;
    tag: string;
  }>;
};

const TagPage = (props: TagParams) => {
  const { section, tag } = use(props.params);
  return <SectionPage section={section} selectedTag={tag} />;
};

export default TagPage;
