import * as React from "react";
import styles from "./toggle.module.scss";
import * as Ariakit from "@ariakit/react";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface ToggleProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: string[];
  dir?: "horizontal" | "vertical";
}

export function Toggle({ label, value, onChange, items, dir = "horizontal" }: ToggleProps) {
  const radio = Ariakit.useRadioStore({
    defaultValue: value
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
          <label key={item}>
            <Ariakit.Radio className="radio" value={item} />
            {item}
          </label>
        ))}
      </Ariakit.RadioGroup>
    </div>
  );
}
