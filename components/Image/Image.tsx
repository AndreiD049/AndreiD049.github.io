/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import SCSSstyles from "./Image.module.scss";
import { CSSProperties, FC, HTMLAttributes } from "react";

export interface ImageProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  styles?: {
    root?: CSSProperties;
    img?: CSSProperties;
  };
}

const Image: FC<ImageProps & HTMLAttributes<HTMLDivElement>> = ({
  src,
  alt,
  title,
  caption,
  styles,
  ...rest
}) => {
  return (
    <div className={`${SCSSstyles.container} ${rest.className}`} style={styles?.root}>
      <img src={src} alt={alt} title={title ?? alt} style={styles?.img} />
      {caption ? <span className={SCSSstyles.caption}>{caption}</span> : null}
    </div>
  );
};

export default Image;
