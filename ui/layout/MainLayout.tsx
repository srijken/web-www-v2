import * as React from "react";
import styles from "./mainlayout.module.css";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.mainlayout}>
      <h1>Main Layouts</h1>
      {children}
    </div>
  );
}
