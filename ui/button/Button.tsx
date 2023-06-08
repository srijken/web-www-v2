import * as React from "react";
import { Button as AriaButton, ButtonProps as AriaButtonProps } from "@ariakit/react";
import styles from "./button.module.scss";
export interface ButtonProps extends AriaButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <AriaButton className={styles.button} {...props}>
      {props.children}
    </AriaButton>
  );
}
