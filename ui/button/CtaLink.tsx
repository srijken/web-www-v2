import Link, { LinkProps } from "next/link";
import styles from "./ctalink.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

import * as React from "react";

export interface CtaLinkProps extends LinkProps {
  isPrimary?: boolean;
  isSecondary?: boolean;
  children: React.ReactNode;
}

export function CtaLink({ isPrimary, isSecondary, children, ...props }: CtaLinkProps) {
  return (
    <Link
      {...props}
      className={cx({
        "cta-link": true
      })}
    >
      {children}
    </Link>
  );
}
