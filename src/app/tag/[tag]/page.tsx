import { MainPage } from "@/components/page";
import { getAllTags } from "@/lib/api";
import { use } from "react";

type TagParams = {
  params: Promise<{
    section: string;
    tag: string;
  }>;
};

export const generateStaticParams = async () => {
  const tagInfo = await getAllTags();
  const params = tagInfo.map(({ tagName }) => ({ tag: tagName }));

  return params;
};

const TagedMainPage = (props: TagParams) => {
  const { tag } = use(props.params);
  return <MainPage selectedTag={tag} />;
};

export default TagedMainPage;
