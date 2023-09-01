import { ArticleAttributes, MarkdownImport } from "types";
import * as React from "react";
import Link from "next/link";

export interface ArticleHomeProps {
  lang: "en" | "nl";
  articles: MarkdownImport<ArticleAttributes>[];
}

export function ArticleHome({ lang, articles }: ArticleHomeProps) {
  return (
    <div>
      <h1>Article Home</h1>

      {articles.map((article) => (
        <div key={article.slug}>
          <h3>
            <Link href={`/${lang}/article/${article.slug}`}>{article.attributes.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}
