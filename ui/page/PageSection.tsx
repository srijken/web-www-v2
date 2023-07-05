import * as React from "react";
import styles from "./pagesection.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface PageSectionProps {
  overlap?: boolean;
  children: React.ReactNode;
}

export function PageSection({ overlap, children }: PageSectionProps) {
  return (
    <article
      className={cx({
        overlap: !!overlap
      })}
    >
      <div className={styles["overlap-container"]}>{children}</div>
    </article>
  );
}
