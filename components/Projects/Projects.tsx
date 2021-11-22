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
              styles={{ img: { maxWidth: "500px" } }}
            />
            <Image
              className="mt-3"
              src="/rating.png"
              alt="rating custom component"
              caption="Rating component"
              styles={{ img: { maxWidth: "350px" } }}
            />
            <br />
          </div>
        ),
      },
    ],
  },
  {
    header: {
      text: "XmlDocumentTester",
      id: "xmltester",
    },
    description: (
      <div>
        <Image
          src="/xmltester.png"
          alt="xml document tester application"
          caption="Test scenarios screen"
        />
        <p>
          The project is a small tool that i use at work when testing different
          scenarios related to EDI communication. By loading a xml file and
          defining multiple test cases, i can re-generate them every time EDI
          project is changed to make sure no regression was introduced.
        </p>
				<p>The software is basic and all user configration is stored in xml files locally.</p>
				<p>
					The program is written in <strong>C# (WPF)</strong>, and following modification rules are supported:
					<ul>
						<li>Fixed string</li>
						<li>Random string</li>
						<li>Random integer</li>
						<li>Repeat xml node (example when i want to test a scenario with multiple orders)</li>
						<li>Remove xml node</li>
						<li>Increment string (to generate orders with different reference numbers every time)</li>
						<li>Sequence string (get values from a predefined list and change them sequentially)</li>
					</ul>
				</p>
      </div>
    ),
    links: [
      {
        href: "https://sourceforge.net/projects/xmltesterpresentation/",
        text: "Sourceforge",
      },
      {
        href: "https://github.com/AndreiD049/XmlDocumentTester",
        text: "Github",
        img: "/github.svg",
      },
    ],
    additional: [
      {
        header: "What i've learned?",
        content: (
					<div>
						<ul>
							<li>Basic C#</li>
							<li>WPF UI Framework (MVVM)</li>
							<li>Basic component customization with WPF</li>
							<li>XML files manipulation with C#</li>
						</ul>
					</div>
				),
      },
			{
				header: "Application navigation",
				content: (
					<Image
						src="/xmltest-navigation.gif"
						alt="navigation"
					/>
				)
			},
			{
				header: "XML Document navigation & modification",
				content: (
					<Image
						src="/xmltest-modification.gif"
						alt="xml document modification"
					/>
				)
			}
    ],
  },
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
          className="mb-3"
        />
      ))}
    </section>
  );
};

export default Projects;
