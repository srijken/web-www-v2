import * as React from "react";
import styles from "./toggle.module.scss";
import * as Ariakit from "@ariakit/react";
import classnames from "classnames/bind";
import { OptionItem } from "types";

const cx = classnames.bind(styles);

export interface ToggleProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: OptionItem[];
  dir?: "horizontal" | "vertical";
}

export function Toggle({ label, value, onChange, items, dir = "horizontal" }: ToggleProps) {
  const radio = Ariakit.useRadioStore({
    value: value
  });
  return (
    <div>
      <h4>{label}</h4>

      <Ariakit.RadioGroup
        store={radio}
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
            <Ariakit.Radio className="radio" value={item.value} />
            {item.label}
          </label>
        ))}
      </Ariakit.RadioGroup>
    </div>
  );
}
