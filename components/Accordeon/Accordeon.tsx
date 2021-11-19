/* eslint-disable @next/next/no-img-element */
import { CSSProperties, FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Accordeon.module.scss";

type AllOrNone<T> = T | { [K in keyof T]?: never };

export type AccordeonProps = {
  headerText: string;
  initialCollapsed?: boolean;
  styles?: {
    root?: CSSProperties;
    header?: CSSProperties;
    content?: CSSProperties;
  };
} & AllOrNone<{
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}>;

const Accordeon: FC<AccordeonProps> = (props) => {
  const content = useRef<HTMLDivElement>(null);
  const controled = props.collapsed !== undefined;
  const [collapsed, setCollapsed] = useState(
    controled ? props.collapsed : Boolean(props.initialCollapsed)
  );
  const [maxHeight, setMaxHeight] = useState("100%");

  const handleClick = () => {
    if (controled) {
      props.setCollapsed!(!props.collapsed);
      setCollapsed((val) => !val);
    } else {
      setCollapsed((val) => !val);
    }
  };

  const getMaxHeight = () => {
    if (controled) {
      return props.collapsed ? "0" : maxHeight;
    }
    return collapsed ? "0" : maxHeight;
  };

  useEffect(() => {
    if (content.current) {
      const clone = content.current.cloneNode(true) as HTMLElement;
      clone.style.maxHeight = "100%";
      content.current.parentElement?.appendChild(clone);
      setMaxHeight(`${clone.clientHeight}px`);
      content.current.parentElement?.removeChild(clone);
    }
  }, [content, props.children]);

  return (
    <div className={styles.root} style={props.styles?.root}>
      <div
        className={styles.header}
        onClick={handleClick}
        role="button"
        style={props.styles?.header}
      >
				<img src={`${collapsed ? "/right.png" : "/down.png"}`} alt="collapse icon" className={styles.img} />
        {props.headerText}
      </div>
      <div
        className={styles.content}
        ref={content}
        style={{
          ...props.styles?.content,
          maxHeight: getMaxHeight(),
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordeon;
