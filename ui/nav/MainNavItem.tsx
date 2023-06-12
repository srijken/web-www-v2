import * as React from "react";
import styles from "./mainnavitem.module.scss";
import Link from "next/link";
import { IconChevronDown } from "../icons";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface MainNavItemProps {
  isActive: boolean;
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function MainNavItem({ isActive, href, onClick, children }: MainNavItemProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cx({
        item: true,
        active: isActive
      })}
    >
      {children}
      <IconChevronDown />
    </Link>
  );
}
