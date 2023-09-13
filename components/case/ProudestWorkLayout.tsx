import { i18nContentFromAttributes } from "lib/utils";
import * as React from "react";
import { Lang, MarkdownPage, ProudestworkAttributes } from "types";
import { attributes } from "content/proudestwork.md";
import { PageSection } from "ui/page/PageSection";
import { PageLayout } from "ui/page/PageLayout";
import { CaseCard } from "./CaseCard";
import i18n from "i18n/i18n";

export interface ProudestWorkLayoutProps {
  lang: Lang;
}

export function ProudestWorkLayout({ lang }: ProudestWorkLayoutProps) {
  const t = i18n(lang);
  const content = i18nContentFromAttributes<ProudestworkAttributes>(
    lang,
    attributes as MarkdownPage<ProudestworkAttributes>
  );

  if (!content) return null;

  return (
    <PageLayout columns={3}>
      <h2>{content.title}</h2>
      {content.ourproudestwork.map((o, i) => (
        <CaseCard key={`casecard${i}`} str={o} cta={t("readmore")} />
      ))}
    </PageLayout>
  );
}
