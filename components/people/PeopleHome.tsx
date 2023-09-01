import { MarkdownImport, PeopleAttributes } from "types";
import * as React from "react";
import Link from "next/link";

export interface PeopleHomeProps {
  lang: "en" | "nl";
  peoples: MarkdownImport<PeopleAttributes>[];
}

export function PeopleHome({ lang, peoples }: PeopleHomeProps) {
  return (
    <div>
      <h1>People Home</h1>

      {peoples.map((p) => (
        <div key={p.slug}>
          <h3>
            <Link href={`/${lang}/peoples/${p.slug}`}>{p.attributes.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
