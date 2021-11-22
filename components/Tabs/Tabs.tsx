import { FC, HTMLAttributes, ReactElement } from 'react';
import styles from './Tabs.module.scss';

export interface TabsProps {
	tabs: { header: string, content: string | ReactElement }[];
} 

const Tabs: FC<TabsProps & HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div>
			<div className={styles["tabs-container"]}>
				<div className={styles.tabs}>
					<button>One</button>
					<button>Two</button>
					<button>Three</button>
				</div>
				<div className={styles.highlight} />
			</div>
			<div>Tab content</div>
		</div>
	);
}

export default Tabs;
