import { CaseAttributes, MarkdownImport } from "types";
import * as React from "react";

export interface CaseProps {
  lang: "en" | "nl";
  caseObj: MarkdownImport<CaseAttributes>;
}

export function Case({ lang, caseObj }: CaseProps) {
  return (
    <div>
      <h1>{caseObj.attributes.title}</h1>
      <h3>{caseObj.attributes.date}</h3>
      <h3>{caseObj.attributes.caseid}</h3>
      <h3>{caseObj.attributes.closed}</h3>
      <h3>{caseObj.attributes.link}</h3>
      <h3>{caseObj.attributes.caselead}</h3>
      <h3>{caseObj.attributes.image}</h3>

      <caseObj.react />
    </div>
  );
}
