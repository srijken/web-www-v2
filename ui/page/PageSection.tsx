import * as React from "react";
import "./pagesection.scss";
import cx from "classnames";

type Corners = "topleft" | "topright" | "bottomleft" | "bottomright";

export interface PageSectionProps {
  children: React.ReactNode;
  type?: "gradient" | "gradient-reverse" | "inverse" | "primary" | "article";
  overlap?: "top" | "bottom";
  round?: Corners[];
  hide?: boolean;
}

export function PageSection({ children, type, overlap, round, hide }: PageSectionProps) {
  return (
    <article
      className={cx({
        "page-section": true,
        "page-section-gradient": type === "gradient",
        "page-section-gradient-reverse": type === "gradient-reverse",
        "page-section-inverse": type === "inverse",
        "page-section-primary": type === "primary",
        "page-section-overlap-top": overlap === "top",
        "page-section-overlap-bottom": overlap === "bottom",
        "page-section-round": round && round.length > 0,
        "page-section-round-topleft": round && round.includes("topleft"),
        "page-section-round-topright": round && round.includes("topright"),
        "page-section-round-bottomleft": round && round.includes("bottomleft"),
        "page-section-round-bottomright": round && round.includes("bottomright"),
        "page-section-hide": hide,
        "page-section-article": type === "article"
      })}
    >
      <div className="page-section-container">{children}</div>
    </article>
  );
}
