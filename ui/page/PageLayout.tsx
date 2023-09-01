import * as React from "react";
import "./pagelayout.scss";
import cx from "classnames";

export interface PageLayoutProps {
  children: React.ReactNode;
  columns?: number;
  layout?: "default" | "left" | "right";
  extend?: boolean;
  type?: "article";
}

export function PageLayout({ children, columns = 0, layout = "default", extend, type }: PageLayoutProps) {
  return (
    <article className="page-layout">
      <div className="page-layout-filler"></div>
      <div
        className={cx({
          "page-layout-content": true,
          "page-layout-columns": columns > 0,
          "page-layout-columns-2": columns === 2,
          "page-layout-columns-3": columns === 3,
          "page-layout-columns-4": columns === 4,
          "page-layout-left": layout === "left",
          "page-layout-right": layout === "right",
          "page-layout-extend": extend,
          "page-layout-article": type === "article"
        })}
      >
        {children}
      </div>
    </article>
  );
}
