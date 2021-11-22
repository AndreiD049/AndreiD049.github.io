/* eslint-disable @next/next/no-img-element */
import React, { FC, HTMLAttributes, ReactElement } from "react";
import Accordeon from "../Accordeon";
import Header from "../Header";
import Tabs from "../Tabs";
import styles from "./Project.module.scss";

interface Link {
  text: string;
  href: string;
  img?: string;
}

interface AdditionalContent {
  header: string;
  content: ReactElement;
}

export interface ProjectProps {
  header: { text: string; id?: string };
  description: ReactElement | string;
  links?: Link[];
  additional?: AdditionalContent[];
}

const Project: FC<ProjectProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const getLinks: () => ReactElement[] = () => {
    if (typeof props.links !== "undefined") {
      return props.links.map((link) => {
        return (
          <span className={styles.link} key={link.text}>
            <a
              target="_blank"
              rel="noreferrer"
              href={link.href}
              title={link.href}
              className="link link-no-decoration"
            >
              {link.img ? (
                <img
                  src={link.img}
                  alt={link.text}
                  className={styles["link-image"]}
                />
              ) : null}
              {link.text}
            </a>
          </span>
        );
      });
    }
    return [];
  };
  return (
    <div className={props.className} style={props.style}>
      <div className={styles.container}>
        <Header
          className={styles.header}
          id={props.header.id ? props.header.id : props.header.text}
        >
          {props.header.text}
        </Header>
        {typeof props.links !== "undefined" ? (
          <div className={styles.links}>
            <span className={styles["links-text"]}>Links: </span>
            {getLinks()}
          </div>
        ) : null}
        <div className={styles.description}>
          <h4>Description</h4>
          <div className={styles["description-general"]}>
            {props.description}
          </div>
          <div className={styles.additional}>
            {props.additional?.map((add) => (
              <Accordeon
                key={add.header}
                headerText={add.header}
                styles={{
                  root: {
                    padding: "4px",
                  },
                }}
                initialCollapsed
                className={styles.accordeon}
              >
                {add.content}
              </Accordeon>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
