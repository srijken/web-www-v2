import { MarkdownArticle } from "types";
import * as React from "react";

export interface ArticleHomeProps {
  lang: "en" | "nl";
  articles: MarkdownArticle[];
}

export function ArticleHome({ lang, articles }: ArticleHomeProps) {
  return (
    <div>
      <h1>Article Home</h1>

      {articles.map((article) => (
        <div key={article.slug}>
          <h1>{article.attributes.title}</h1>
          <div>
            <article.react />
          </div>
        </div>
      ))}
    </div>
  );
}
