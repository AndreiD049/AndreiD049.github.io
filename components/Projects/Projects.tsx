/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styles from "./Projects.module.scss";
import Project, { ProjectProps } from "./Project";
import Header from "../Header";
import Image from "../Image";

const projects: ProjectProps[] = [
  {
    header: {
      text: "Admin tools",
      id: "admin-tools",
    },
    links: [
      {
        href: "https://github.com/AndreiD049/appraisal-web-base",
        text: "Github",
        img: "/github.svg",
      },
    ],
    description: (
      <div className={styles.description}>
        <p>
          This project is a proof of concept of an internal admin tool used to
          follow up and manage work in a department.
        </p>
        <Image
          src="/admintools.png"
          alt="home page"
          caption="Home page of Admin Tools"
        />
        <p>
          It is a full stack project, running on a $5 Digital Ocean Dropplet.
          Below are listed some of it&apos;s components and features used:
          <ul>
            <li>Frontend: React + Fluent UI</li>
            <li>Backend services using Express</li>
            <li>Jest for backend tests</li>
            <li>MongoDB + mongoose for a database</li>
            <li>
              Authentication using Passportjs and{" "}
              <a
                href="http://www.passportjs.org/packages/passport-azure-ad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                passport-azure-ad
              </a>{" "}
              strategy (because most of the applications at my workplace use
              Azure AD)
            </li>
            <li>Docker and Docker compose to pack the application</li>
            <li>Nginx used as a proxy and cache</li>
            <li>
              <a
                href="https://www.w3schools.com/html/html5_serversentevents.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server Sent Events
              </a>{" "}
              for server-client one way communication
            </li>
            <li>Redis for caching and SSE connections store</li>
          </ul>
        </p>
        <p>
          Initially this tools was supposed to be used only for staff
          evaluations, but soon more features were requested. Eventually
          &apos;daily tasks&apos; feature was also added which was used to
          create recurrent (daily, weekly, monthly etc...) tasks for users by
          their team leaders.
        </p>
        <p>
          At the moment of writing the development has stopped, only evaluation
          features being used by end users.
        </p>
      </div>
    ),
    additional: [
      {
        header: "What i've learned?",
        content: (
          <div>
            <ul>
              <li>
                Managing Full Stack applications is hard. Because of limited
                time and resources, it&apos;s hard to fix everything and add
                every feature by yourself. This leads to some unpleasant
                compromises like skipping tests that lower code quality and lead
                to technical debt growth. But this was a valuable lesson i
                think.
              </li>
              <li>Writing backend tests using jest</li>
              <li>Github Actions for CI</li>
              <li>React & Fluent UI</li>
              <li>Authentication using passportjs</li>
              <li>Nginx setup and fine tuning</li>
              <li>Docker & Docker compose setup</li>
              <li>
                Some Linux features like firewall setup and hiding internal
                services behind it
              </li>
              <li>
                TLS Certificate setup using certbot and Let&apos;s Encrypt.
              </li>
              <li>Setting up MongoDB replica set</li>
              <li>Working with MongoDB and mongoose</li>
              <li>Using SSE for server-client one way communication</li>
              <li>Much more stuff i already forgot...</li>
            </ul>
          </div>
        ),
      },
      {
        header: "Layout & themes",
        content: (
          <Image
            src="/admintools-layout.gif"
            alt="Admin Tools general layout & themes"
            caption="Admin Tools general layout & themes"
          />
        ),
      },
      {
        header: "Fluid layout",
        content: (
          <Image
            src="/admintools-dynamic-layout.gif"
            alt="Admin Tools homepage dynamic layout"
            caption="Fluid layout using 'golden-layout'"
          />
        ),
      },
      {
        header: "Staff evaluations",
        content: (
          <>
            <p>
              This option was actually tested on end users (around 90 people)
              and is still being used. (although most actively it&apos;s used
              for around 2 months a year)
            </p>
            <Image
              src="/admintools-appraisals.gif"
              alt="Admin Tools appraisal system"
              caption="Evaluations"
            />
          </>
        ),
      },
      {
        header: "Recurrent tasks",
        content: (
          <Image
            src="/admintools-tasks.gif"
            alt="Recurrent tasks in Admin tools"
            caption="Recurrent tasks"
          />
        ),
      },
      {
        header: "Authorization",
        content: (
          <>
            <p>For Authorization, a basic role based strategy was used. It provided control not only over actions user can do, but also over components user can see.</p>
						<Image
							src="/admintools-permissions.gif"
							alt="Authorization"
							caption="User roles/permissions"
						/>
          </>
        ),
      },
    ],
  },
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
              <li>
                Had my initial experience Static site generation using nextjs
              </li>
              <li>Sass</li>
              <li>Refreshed my knowledge of Typescript</li>
              <li>
                Github Actions to sync the pages when i push to main branch
              </li>
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
        <p>
          The software is basic and all user configration is stored in xml files
          locally.
        </p>
        <p>
          The program is written in <strong>C# (WPF)</strong>, and following
          modification rules are supported:
          <ul>
            <li>Fixed string</li>
            <li>Random string</li>
            <li>Random integer</li>
            <li>
              Repeat xml node (example when i want to test a scenario with
              multiple orders)
            </li>
            <li>Remove xml node</li>
            <li>
              Increment string (to generate orders with different reference
              numbers every time)
            </li>
            <li>
              Sequence string (get values from a predefined list and change them
              sequentially)
            </li>
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
        content: <Image src="/xmltest-navigation.gif" alt="navigation" />,
      },
      {
        header: "XML Document navigation & modification",
        content: (
          <Image
            src="/xmltest-modification.gif"
            alt="xml document modification"
          />
        ),
      },
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
