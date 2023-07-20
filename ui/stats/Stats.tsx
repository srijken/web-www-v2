import * as React from "react";
import styles from "./stats.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

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
