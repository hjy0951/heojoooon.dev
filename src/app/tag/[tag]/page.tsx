import { MainPage } from "@/components/Pages";
import { TagType } from "@/lib/utils";
import { use } from "react";

type HomeParams = {
  params: Promise<{
    tag: TagType;
  }>;
};

const HomeWithSelectedTag = (props: HomeParams) => {
  const { tag } = use(props.params);

  return <MainPage currentTag={tag} />;
};

export default HomeWithSelectedTag;
