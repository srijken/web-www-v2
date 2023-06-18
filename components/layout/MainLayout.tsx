"use client";

import * as React from "react";
import styles from "./mainlayout.module.scss";
import { MainNav } from "../nav/MainNav";
import { Footer } from "../footer/Footer";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <html>
      <head></head>
      <body>
        <main className={styles.mainlayout}>
          <MainNav />
          <div className={styles.content}>{children}</div>=
          <Footer />
        </main>
      </body>
    </html>
  );
}
