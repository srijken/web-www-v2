import * as React from "react";
import "./stats.scss";
import cx from "classnames";

export interface StatsProps {
  children: React.ReactNode;
}
export interface StatsItemProps {
  children: [React.ReactElement<HTMLHeadingElement>, React.ReactElement<HTMLHeadingElement>];
}

export function Stats({ children }: StatsProps) {
  return (
    <div
      className={cx({
        stats: true
      })}
    >
      {children}
    </div>
  );
}

export function StatsItem({ children }: StatsItemProps) {
  return (
    <div
      className={cx({
        "stats-item": true
      })}
    >
      {children}
    </div>
  );
}
