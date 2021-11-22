import React, { FC } from "react";
import PeriodCard from "../PeriodCard";
import styles from './Education.module.scss';

const Education: FC = () => {
  return (
    <section>
      <PeriodCard
        dateFrom={new Date("2001-09-01")}
        dateTo={new Date("2013-06-01")}
        dateFormat="mm-yyyy"
        category="School"
        showDateDifference
        dateDifferenceFormat="yyyy"
      >
        <div className={styles.container}>
          <span className={styles.text}>High School &quot;Constantin Stere&quot;</span>
          <span className={styles['text-small']}>Soroca</span>
        </div>
      </PeriodCard>

      <PeriodCard
        dateFrom={new Date("2013-09-01")}
        dateTo={new Date("2016-06-01")}
        dateFormat="mm-yyyy"
        category="Bachelor"
        className="mt-2"
        showDateDifference
        dateDifferenceFormat="yyyy"
      >
        <div className={styles.container}>
          <span className={styles.text}>Moldova State University</span>
          <span className={styles.text}>Marketing and Logistics program</span>
          <span className={styles['text-small']}>Faculty of Economic Sciences</span>
          <small className={styles['text-small']}>Chisinau</small>
        </div>
      </PeriodCard>

      <PeriodCard
        dateFrom={new Date("2016-09-01")}
        dateTo={new Date("2018-06-01")}
        dateFormat="mm-yyyy"
        category="Master"
        className="mt-2"
        showDateDifference
        dateDifferenceFormat="yyyy"
      >
        <div className={styles.container}>
          <span className={styles.text}>Moldova State University</span>
          <span className={styles.text}>Marketing studies</span>
          <span className={styles['text-small']}>Faculty of Economic Sciences</span>
          <small className={styles['text-small']}>Chisinau</small>
        </div>
      </PeriodCard>
    </section>
  );
};

export default Education;
