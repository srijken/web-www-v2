import { CaseAttributes, MarkdownImport } from "types";
import * as React from "react";
import Link from "next/link";

export interface CaseHomeProps {
  lang: "en" | "nl";
  cases: MarkdownImport<CaseAttributes>[];
}

export function CaseHome({ lang, cases }: CaseHomeProps) {
  return (
    <div>
      <h1>Case Home</h1>

      {cases.map((c) => (
        <div key={c.slug}>
          <h3>
            <Link href={`/${lang}/case/${c.slug}`}>{c.attributes.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
