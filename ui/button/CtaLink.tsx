import Link, { LinkProps } from "next/link";
import styles from "./button.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

import * as React from "react";

export interface CtaLinkProps extends LinkProps {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isInverse?: boolean;
  children: React.ReactNode;
}

export function CtaLink({ isPrimary, isSecondary, isInverse, children, ...props }: CtaLinkProps) {
  return (
    <Link
      {...props}
      className={cx({
        "cta-link": true,
        "button-base": true,
        inverse: isInverse,
        primary: isPrimary,
        secondary: isSecondary
      })}
    >
      {children}
    </Link>
  );
}
