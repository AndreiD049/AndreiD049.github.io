import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from './HeaderNav.module.scss';

export default function HeaderNav() {
  const [selected, setSelected] = useState<string>("");
	const [isHeaderHidden, setHeaderHidden] = useState<boolean>(false);
  const isSelected = (id: string) => selected == id;
  const handleSelect = (id: string) => () => setSelected(id);
	const scrollThreshold = 100;

	useEffect(() => {
		function listener(e: Event) {
			const scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
			if (!isHeaderHidden && scrollValue >= scrollThreshold) {
				setHeaderHidden(true);
			} else if (isHeaderHidden && scrollValue < scrollThreshold) {
				setHeaderHidden(false);
			}
		}
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		}
	}, [isHeaderHidden]);

  return (
    <header id="header" className={styles.header}>
      <h1 id="greet" className={classNames([
				"text-center",
				isHeaderHidden ? styles["greet-hidden"] : styles["greet-shown"],
			])}>
        Hi, i&apos;m %username%
      </h1>
      <nav className="flex flex-center mb-2 mt-1">
          <a
            href="#about"
            className={classNames("link", "link-no-decoration", {
              "link-selected": isSelected("about"),
            })}
            onClick={handleSelect("about")}
          >
            About me
          </a>
        <div className="delimiter px-2"></div>
          <a
            href="#education"
            className={classNames("link", "link-no-decoration", {
              "link-selected": isSelected("education"),
            })}
            onClick={handleSelect("education")}
          >
            Education
          </a>
        <div className="delimiter px-2"></div>
          <a
            href="#work"
            className={classNames("link", "link-no-decoration", {
              "link-selected": isSelected("work"),
            })}
            onClick={handleSelect("work")}
          >
            Work
          </a>
        <div className="delimiter px-2"></div>
          <a
            href="#projects"
            className={classNames("link", "link-no-decoration", {
              "link-selected": isSelected("projects"),
            })}
            onClick={handleSelect("projects")}
          >
            Projects
          </a>
        <div className="delimiter px-2"></div>
          <a
            href="#contact"
            className={classNames("link", "link-no-decoration", {
              "link-selected": isSelected("contact"),
            })}
            onClick={handleSelect("contact")}
          >
            Contact
          </a>
      </nav>
    </header>
  );
}
