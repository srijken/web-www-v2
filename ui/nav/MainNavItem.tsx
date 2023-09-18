import * as React from "react";

import Link from "next/link";
import { IconChevronDown } from "../icons";
import cx from "classnames";
import "./mainnavitem.scss";

export interface MainNavItemProps {
  isActive: boolean;
  href: string;
  children: React.ReactNode;
}

export function MainNavItem({ isActive, href, children }: MainNavItemProps) {
  return (
    <Link
      href={href}
      className={cx({
        "main-nav-item": true,
        active: isActive
      })}
    >
      {children}
      <IconChevronDown />
    </Link>
  );
}
