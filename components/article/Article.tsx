import { ArticleAttributes, MarkdownImport } from "types";
import * as React from "react";

export interface ArticleProps {
  lang: "en" | "nl";
  article: MarkdownImport<ArticleAttributes>;
}

export function Article({ lang, article }: ArticleProps) {
  return (
    <div>
      <h1>{article.attributes.title}</h1>
      <h3>{article.attributes.date}</h3>
      <h3>{article.attributes.author}</h3>

      <article.react />
    </div>
  );
}
