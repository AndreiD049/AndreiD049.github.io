import React, { FC } from "react";
import PeriodCard from "../PeriodCard";
import styles from './Work.module.scss';

const Work: FC = () => {
	return (
		<section>
      <PeriodCard
        dateFrom={new Date("2016-10-10")}
        dateTo={new Date("2017-11-01")}
        dateFormat="mm-yyyy"
        category="Katoen Natie"
        showDateDifference
        dateDifferenceFormat="mm-yyyy"
				spoilers={[
					{
						header: "My responsibilities",
						content: (
							<div>
								<ul>
									<li>Data entry</li>
									<li>Communication with carriers/customers</li>
									<li>Internal reports follow-up</li>
									<li>Invoicing</li>
								</ul>
							</div>
						),
					}
				]}
      >
        <div className={styles.container}>
          <span className={styles.text}><a target="_blank" rel="noreferrer" href="https://www.katoennatie.com/">Katoen Natie</a></span>
          <span className={styles.text}>Customer Service Representative</span>
        </div>
      </PeriodCard>
      <PeriodCard
        dateFrom={new Date("2017-11-01")}
        dateFormat="mm-yyyy"
        showDateDifference
        dateDifferenceFormat="mm-yyyy"
				spoilers={[
					{
						header: "My responsibilities",
						content: (
							<div>
								<ul>
									<li>EDI development and support</li>
									<li>XSLT - transformation of xml messages according to internal schemas</li>
									<li>Development of internal tools and optimisations using VBA, VBScript, Powershell</li>
									<li>PowerQuery + PowerPivot + VBA - Reporting and excel dashboard development</li>
									<li>C# + Selenium - writing integration tests for internal tools in development</li>
									<li>Debugging <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/C/AL">C/AL</a> code</li>
									<li>Reporting issues on Azure DevOps boards, follow-up and testing end result</li>
									<li>Service Desk support of internal tools and software</li>
									<li>Trainings for internal staff</li>
									<li>Creating training materials, presentations and manuals</li>
									<li>Invoicing setup & execution</li>
								</ul>
							</div>
						),
					}
				]}
      >
        <div className={styles.container}>
          <span className={styles.text}>Business Support Analyst</span>
        </div>
      </PeriodCard>
		</section>
	);
};

export default Work;