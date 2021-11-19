import { FC } from "react";

export interface HeaderProps {
  id: string;
}

const Header: FC<HeaderProps> = ({ id, children }) => {
  return (
    <h3>
      <a href={`#${id}`} className="link link-header">
				<span id={id} className="link-ghost" />
				{children}
			</a>
    </h3>
  );
};

export default Header;
