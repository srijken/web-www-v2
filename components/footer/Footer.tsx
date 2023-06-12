import * as React from "react";
import styles from "./footer.module.scss";

export interface FooterProps {}

export function Footer({}: FooterProps) {
  return <footer className={styles.footer}>Footer</footer>;
}
