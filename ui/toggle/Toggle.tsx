import * as React from "react";
import "./toggle.scss";

import cx from "classnames";
import { OptionItem } from "types";

export interface ToggleProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: OptionItem[];
  dir?: "horizontal" | "vertical";
}

export function Toggle({ label, value, onChange, items, dir = "horizontal" }: ToggleProps) {
  return (
    <div>
      <h4>{label}</h4>

      <div
        className={cx({
          toggle: true,
          vertical: dir !== "horizontal"
        })}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
      >
        {items.map((item, index) => (
          <label key={item.value}>
            <input type="radio" className="radio" value={item.value} />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
}
