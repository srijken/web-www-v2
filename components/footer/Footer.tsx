import * as React from "react";
import "./footer.scss";
import { PageLayout } from "../../ui/page/PageLayout";

export interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className="footer">
      <PageLayout>
        <div>Footer</div>
      </PageLayout>
    </footer>
  );
}
