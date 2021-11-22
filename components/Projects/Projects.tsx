/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styles from "./Projects.module.scss";
import Project, { ProjectProps } from "./Project";
import Header from "../Header";

const projects: ProjectProps[] = [
  {
    title: {
      text: "This page (andreid049.github.io)",
      id: "github-page",
    },
    description: (
      <div className={styles.description}>
        <p>
          The project represents a statically generated site, built using{" "}
          <strong>React</strong>, <strong>NextJS</strong>,{" "}
          <strong>Typescript</strong> and <strong>Sass</strong> for styles.
        </p>
				<img src="/andreid049.gif" alt="gif showing the page in action" title="gif showing the page in action" />
        <p>
          I didn&apos;t use any styling or components libararies on purpose, as
          i wanted to practice SCSS and DOM manipulations.
        </p>
      </div>
    ),
    links: [
      {
        text: "Github",
        href: "https://github.com/AndreiD049/AndreiD049.github.io",
        img: "/github.svg",
      },
    ],
    additional: [
      {
        header: "What i've learned?",
        content: (
          <div>
						<ul>
							<li>NextJS</li>
							<li>Sass (specifically scss)</li>
							<li>Refreshed my knowledge of Typescript</li>
							<li>Created some useful react components that can be reused, like Accordeon and Rating</li>
						</ul>
          </div>
        ),
      },
    ],
  },
];

const Projects: FC = () => {
  return (
    <section>
      {projects.map((project) => (
        <Project
          key={project.title.text}
          title={project.title}
          description={project.description}
          links={project.links}
          additional={project.additional}
        />
      ))}
    </section>
  );
};

export default Projects;
