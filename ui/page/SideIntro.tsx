import * as React from "react";
import styles from "./sideintro.module.scss";

export interface SideIntroProps {
  children: [React.ReactElement, React.ReactElement];
}

export function SideIntro({ children }: SideIntroProps) {
  return (
    <div className={styles.sideintro}>
      <section className={styles.intro}>{children[0]}</section>
      <section className={styles.content}>{children[1]}</section>
    </div>
  );
}
