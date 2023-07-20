import * as React from "react";
import styles from "./footer.module.scss";
import { PageLayout } from "../../ui/page/PageLayout";

export interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <PageLayout>
        <div>Footer</div>
      </PageLayout>
    </footer>
  );
}
