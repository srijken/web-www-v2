import * as React from "react";
import styles from "./button.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface ButtonProps {
  size: "sm" | "md" | "lg";
  isInverse?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({ size, isInverse, isPrimary, isSecondary, leftIcon, children }: ButtonProps) {
  return (
    <button
      className={cx({
        "button-base": true,
        button: true,
        inverse: isInverse,
        primary: isPrimary,
        secondary: isSecondary
      })}
    >
      <>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        {children}
      </>
    </button>
  );
}
