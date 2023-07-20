import * as React from "react";
import styles from "./opener.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface SubOpenerProps {
  children: React.ReactNode;
}

export function SubOpener({ children }: SubOpenerProps) {
  return (
    <div
      className={cx({
        "sub-opener": true
      })}
    >
      <article>{children}</article>
    </div>
  );
}
