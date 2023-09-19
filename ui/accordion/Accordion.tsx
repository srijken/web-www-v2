import * as React from "react";
import "./accordion.scss";

export interface AccordionProps {
  children: React.ReactNode;
}

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  active?: boolean;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="accordion">{children}</div>;
}

export function AccordionItem({ title, active, children }: AccordionItemProps) {
  return (
    <div className={active ? "accordion-item active" : "accordion-item"}>
      <h3>
        {title} <span />
      </h3>
      <div className="accordion-content">{children}</div>
    </div>
  );
}
