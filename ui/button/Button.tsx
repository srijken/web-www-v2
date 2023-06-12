import * as React from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "@ariakit/react";
import styles from "./button.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface ButtonProps extends AriaButtonProps {
  size: "sm" | "md" | "lg";
  isInverse?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  leftIcon?: React.ReactNode;
}

export function Button({ size, isInverse, isPrimary, isSecondary, leftIcon, children, ...props }: ButtonProps) {
  return (
    <AriaButton
      className={cx({
        button: true,
        inverse: isInverse,
        primary: isPrimary,
        secondary: isSecondary
      })}
      {...props}
    >
      <>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        {children}
      </>
    </AriaButton>
  );
}
