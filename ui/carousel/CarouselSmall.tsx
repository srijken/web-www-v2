import * as React from "react";
import styles from "./carousel.module.scss";

export interface CarouselSmallProps {
  children: React.ReactNode;
}

export function CarouselSmall({ children }: CarouselSmallProps) {
  return (
    <div className={styles.smallousel}>
      <div className={styles.smallouselnav}>L</div>
      <div className={styles.smallouselcontent}>{children}</div>
      <div className={styles.smallouselnav}>R</div>
    </div>
  );
}
