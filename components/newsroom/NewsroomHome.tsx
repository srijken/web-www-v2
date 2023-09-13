import * as React from "react";
import i18n from "i18n/i18n";

import { ArticleAttributes, Lang, MarkdownImport, MarkdownPage, NewsroomAttributes } from "types";
import { CtaLink } from "ui/button/CtaLink";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";
import { attributes } from "content/newsroom.md";
import { i18nContentFromAttributes } from "lib/utils";
import "./newsroom.scss";

export interface NewsroomHomeProps {
  lang: Lang;
  content: NewsroomAttributes;
  highlightArticle: MarkdownImport<ArticleAttributes>;
  articles: MarkdownImport<ArticleAttributes>[];
}

export function NewsroomHome({ lang, content, highlightArticle, articles }: NewsroomHomeProps) {
  let t = i18n(lang);

  if (!content) return null;

  return (
    <div className="topic-layout newsroom">
      <div className="topic-intro reverse">
        <PageLayout layout="right" vcenter>
          <div>
            <h1>{content.title}</h1>
          </div>
          <div>
            <p>{content.intro}</p>
            <CtaLink href={content.newsletter} isSecondary>
              Newsletter
            </CtaLink>
          </div>
        </PageLayout>
      </div>
      <PageSection>
        <PageLayout>
          <div>
            <h2>{content.opener.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{content.opener.description}</p>
          </div>
          <div className="newsroom-article-list">
            <div className="highlight">
              <h4>{highlightArticle.attributes.tag}</h4>
              <h3>{highlightArticle.attributes.title}</h3>
              <p>{highlightArticle.attributes.intro}</p>
              <CtaLink href={`/${lang}/article/${highlightArticle.slug}`} isInverse>
                {t("readmore")}
              </CtaLink>
            </div>

            {articles.map((a) => (
              <div key={a.slug} className="article">
                <h4>{a.attributes.tag}</h4>
                <h3>{a.attributes.title}</h3>
                <p>{a.attributes.intro}</p>
                <CtaLink href={`/${lang}/article/${a.slug}`} isPrimary>
                  {t("readmore")}
                </CtaLink>
              </div>
            ))}
          </div>
        </PageLayout>
      </PageSection>
    </div>
  );
}
