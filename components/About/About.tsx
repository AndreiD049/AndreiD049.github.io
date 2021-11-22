import { FC } from "react";
import Rating from "../Rating";
import Header from "../Header";
import styles from "./About.module.scss";

const About: FC = () => {
  return (
    <article>
      <p>
        Hello, my name is Andrei.
        <br />I have a bachelor&apos;s and master&apos;s degree in Marketing and
        Logistics from <a href="https://usm.md/">Moldova State University</a>.
        Also, i&apos;m passionate about software development and computer
        science in general.
        <br />
      </p>
      <p>
        I&apos;m a pretty tech-savvy, and have a &quot;automation-first&quot;
        mindset. This reflects at my current job as a Business Support Analyst.
        I tend to automate things that make sense to be automated, and if they
        don&apos;t, there is always room for small optimisations to help the
        manual process.
      </p>
      <Header id="languages">Languages</Header>
      <p className={styles.postscriptum}>Note: Below scores are subjective and pure estimations.</p>
      <p className={styles.postscriptum}>Note 2: There are of course many more languages that i&apos;ve tried (PHP, Rust, C/C++, Racket etc...). But i don&apos;t feel like placing them on this list (yet)</p>
      <ul>
        <li>
          <Rating text="Javascript" additionlText="Intermediate" value={3.5} />
        </li>
        <li>
          <Rating text="Python" additionlText="Pre-Intermediate" value={3} />
        </li>
        <li>
          <Rating text="XSLT" additionlText="Pre-Intermediate" value={3} />
        </li>
        <li>
          <Rating text="CSS" additionlText="Pre-Intermediate" value={2.5} />
        </li>
        <li>
          <Rating text="C#" additionlText="Elementary" value={1.5} />
        </li>
        <li>
          <Rating text="Java" additionlText="Elementary" value={1.5} />
        </li>
        <li>
          <Rating
            text="Powershell"
            additionlText="Elementary, but proficient with google :)"
            value={1.5}
          />
        </li>
      </ul>
      <Header id="tools">Tools & Libraries</Header>
      <ul>
        <li>
          <Rating text="React" additionlText="(Javascript) Intermediate" value={4} />
        </li>
        <li>
          <Rating text="ExpressJs" additionlText="(Nodejs) Intermediate" value={3.5} />
        </li>
        <li>
          <Rating text="NextJS" additionlText="(Nodejs) Pre-Intermediate" value={3} />
        </li>
        <li>
          <Rating text="MongoDB & mongoose" additionlText="Pre-Intermediate" value={3} />
        </li>
        <li>
          <Rating text="Selenium" additionlText="(C#/Python/Java) Medium" value={2.5} />
        </li>
        <li>
          <Rating text="Nginx" additionlText="Elementary+" value={2} />
        </li>
        <li>
          <Rating text="Docker & Docker compose" additionlText="Elementary+" value={2} />
        </li>
        <li>
          <Rating text="Flask" additionlText="(Python) Elementary+" value={2} />
        </li>
        <li>
          <Rating text="FluentUI" additionlText="(Javascript) Intermediate" value={4} />
        </li>
        <li>
          <Rating text="MaterialUI" additionlText="(Javascript) Medium+" value={3} />
        </li>
      </ul>
    </article>
  );
};

export default About;
