import * as React from "react";
import { FamilyCTAAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/familycta.md";
import { PageLayout } from "ui/page/PageLayout";

import { i18nContentFromAttributes, workingImageURL } from "lib/utils";
import ExportedImage from "next-image-export-optimizer";

export interface FamilyCTALayoutProps {
  lang: Lang;
}

export function FamilyCTALayout({ lang }: FamilyCTALayoutProps) {
  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<FamilyCTAAttributes>);
  return (
    <PageLayout columns={2}>
      <div>
        <ExportedImage src="/static/familycta.png" placeholder="empty" alt="Ethics" width={300} height={300} />
      </div>
      <div>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
      </div>
    </PageLayout>
  );
}
