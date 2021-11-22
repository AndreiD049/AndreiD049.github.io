import { FC, ReactElement } from "react";

interface Link {
  text: string;
  href: string;
}

interface Tab {
	header: string;
	content: ReactElement;
}

interface ProjectProps {
  title: string;
  links?: (Link | ReactElement)[];
	description: ReactElement;
	tabs: Tab[];
}

const Project: FC<ProjectProps> = (props) => {
  return <div></div>;
};

export default Project;
