import { FC, HTMLAttributes } from "react";

export interface HeaderProps {
  id: string;
}

const Header: FC<HeaderProps & HTMLAttributes<HTMLDivElement>> = ({ id, children, style, className }) => {
  return (
    <h3>
      <a href={`#${id}`} className={"link link-header " + className} style={style}>
				<span id={id} className="link-ghost" />
				{children}
			</a>
    </h3>
  );
};

export default Header;
