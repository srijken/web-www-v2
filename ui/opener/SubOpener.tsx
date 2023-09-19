import * as React from "react";
import "./opener.scss";
import cx from "classnames";

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
