/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styles from "./Projects.module.scss";
import Project, { ProjectProps } from "./Project";
import Header from "../Header";
import Image from "../Image";

const projects: ProjectProps[] = [
  {
    header: {
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
        <Image
          caption="Page in action"
          src="/andreid049.gif"
          alt="gif showing the page in action"
        />
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
              <li>
                Created some useful react components that can be reused, like
                Accordeon and Rating
              </li>
            </ul>
            <Image
							className="mt-3"
              src="/accordeon.gif"
              alt="accordeon custom component"
              caption="Accordeon component"
            />
            <Image
							className="mt-3"
              src="/rating.png"
              alt="rating custom component"
              caption="Rating component"
							styles={{img: {maxWidth: '300px'}}}
            />
						<br/>
          </div>
        ),
      },
    ],
  },
	{
		header: {
			text: "XmlDocumentTester",
			id: "xmltester"
		},
		description: (
			<div>test</div>
		),
		links: [
			{
				href: "https://sourceforge.net/projects/xmltesterpresentation/",
				text: "Sourceforge",
			},
			{
				href: "https://github.com/AndreiD049/XmlDocumentTester",
				text: "Github",
				img: "/github.svg"
			},
		],
		additional: [
      {
        header: "What i've learned?",
        content: (
					<div>test</div>
        ),
      },
		]
	}
];

const Projects: FC = () => {
  return (
    <section>
      {projects.map((project, idx) => (
        <Project
          key={project.header.text}
          header={{
            text: `${idx + 1}. ${project.header.text}`,
            id: project.header.id,
          }}
          description={project.description}
          links={project.links}
          additional={project.additional}
					className="mb-2"
        />
      ))}
    </section>
  );
};

export default Projects;
