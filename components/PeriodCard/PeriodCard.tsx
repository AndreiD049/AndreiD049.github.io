import { FC, HTMLAttributes } from "react";
import Accordeon from "../Accordeon";
import styles from "./PeriodCard.module.scss";

interface Spoiler {
	header: string;
	content: JSX.Element | string;
}

interface PeriodCardProps {
  category?: string;
  dateFrom: Date;
  dateTo: Date;
  dateFormat?: "yyyy" | "mm-yyyy";
  showDateDifference?: boolean;
  dateDifferenceFormat?: "yyyy" | "mm" | "mm-yyyy";
	spoilers?: Spoiler[];
}

const PeriodCard: FC<PeriodCardProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  const formatDate = (dt: Date) => {
    const format = props.dateFormat ?? "yyyy";
    switch (format) {
      case "yyyy":
        return dt.getFullYear();
      case "mm-yyyy":
        return dt.toLocaleString("en-us", {
          month: "short",
          year: "numeric",
        });
      default:
        break;
    }
    return dt.getFullYear();
  };

	const getDateDifference = (dt1: Date, dt2: Date): string => {
		const y1 = dt1.getFullYear();
		const m1 = dt1.getMonth();
		const y2 = dt2.getFullYear();
		const m2 = dt2.getMonth();
		const mDiff = m2 - m1;
		const yDiff = y2 - y1;
		let result = "";
		const format = props.dateDifferenceFormat ?? "mm-yyyy";
		let months = mDiff < 0 ? 12 + mDiff : mDiff;
		let years = mDiff < 0 ? yDiff - 1 : yDiff;
		switch (format) {
			case "mm":
				result = `${months + years * 12} months`;
				break;
			case "mm-yyyy":
				let hasYears = false;
				if (years !== 0) {
					result += `${years} ${years === 1 ? "year" : "years"}`;
					hasYears = true;
				}
				if (months !== 0) {
					if (hasYears) {
						result += ', ';
					}
					result += `${months} ${months === 1 ? "month" : "months"}`
				}
				break;
			case "yyyy":
				const additionalYears = months >= 6 ? 1 : 0;
				const roundedYears = years + additionalYears;
				result += `${roundedYears} ${roundedYears === 1 ? " year" : " years"}`;
				break;
			default:
				const _never: never = format;
				break;
		}
		return result;
	};

  return (
    <div className={`${styles.card} ${props.className}`}>
      {/* Category */}
      <div className={styles.category}>
        {props.category ? <span>{props.category}</span> : null}
      </div>
      <div className={styles.body}>
        <div className={styles.years}>
          <span>{formatDate(props.dateFrom)}</span>
          <span>{formatDate(props.dateTo)}</span>
					{
						props.showDateDifference ?
							(
								<span className={styles.difference}>
									{getDateDifference(props.dateFrom, props.dateTo)}
								</span>
							) :
							null
					}
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
			{props.spoilers?.map(({header, content}, idx) => (
				<Accordeon 
				initialCollapsed
				key={`${header}-${idx}`} headerText={header}
				styles={{
					root: {
						borderTop: `1px solid ${styles.borderColor}`,
						borderLeft: "none",
						borderRight: "none",
						borderBottom: "none",
						padding: "4px"
					},
					content: {
						margin: 0,
					}
				}}>
					{content}
				</Accordeon>
			))}
    </div>
  );
};

export default PeriodCard;
