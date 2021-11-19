/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./Rating.module.scss";
import Star from "./star-empty.svg";
import FullStar from "./star-full.svg";
import HalfStar from "./half-star.svg";

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type RatingProps = {
  text: string;
  value: number;
  maxValue?: number;
  color?: string;
  additionlText?: string;
} & AllOrNone<{
  EmptySVGComponent: any;
  HalfSVGComponent: any;
  FullSVGComponent: any;
}>;

const Rating: FC<RatingProps> = ({
  text,
  value,
  maxValue = 5,
  additionlText,
  color = "#ffee00",
  EmptySVGComponent,
  HalfSVGComponent,
  FullSVGComponent,
}: RatingProps) => {
  const FullComponent = FullSVGComponent || FullStar;
  const HalfComponent = HalfSVGComponent || HalfStar;
  const EmptyComponent = EmptySVGComponent || Star;

  const items = [];

  for (let i = 0, l = Math.floor(value); i < l; i += 1) {
    items.push(FullComponent);
  }

  if (value % 1 !== 0) {
    items.push(HalfComponent);
  }

  for (let i = 0, l = maxValue - Math.ceil(value); i < l; i += 1) {
    items.push(EmptyComponent);
  }

  return (
    <span className={styles.container}>
      <span className={styles.rating_row}>
        <span className={styles.text}>{text}:</span>
        <span className={styles.text_score}>{`(${value}/${maxValue})`}</span>
        <span>
          {items.map(
            (Item, idx) =>
              idx < maxValue && (
                <Item
                  style={{ fill: color }}
                  key={`${text}-item-${idx}`}
                  className={styles.item}
                />
              )
          )}
        </span>
      </span>
      <span className={styles.text_additional}>{additionlText}</span>
    </span>
  );
};

export default Rating;
