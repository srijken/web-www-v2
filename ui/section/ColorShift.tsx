import * as React from "react";
import styles from "./colorshift.module.scss";

export interface ColorShiftProps {
  overlap: number;
  children: React.ReactNode;
}

export function ColorShift({ overlap, children }: ColorShiftProps) {
  return (
    <article className={styles.colorshift} style={{ marginTop: `${-1 * overlap}px` }}>
      {children}
    </article>
  );
}
