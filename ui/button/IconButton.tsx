import * as React from "react";

import "./button.scss";
import cx from "classnames";

export interface IconButtonProps {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  isInverse?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isRound?: boolean;
}

export function IconButton({ icon, size = "md", isInverse, isPrimary, isSecondary, isRound }: IconButtonProps) {
  return (
    <button
      className={cx({
        "button-base": true,
        "icon-button": true,
        inverse: isInverse,
        primary: isPrimary,
        secondary: isSecondary,
        round: isRound
      })}
    >
      <>{icon}</>
    </button>
  );
}
