import * as React from "react";
import { EthicsAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/ethics.md";
import { PageLayout } from "ui/page/PageLayout";

import { i18nContentFromAttributes, workingImageURL } from "lib/utils";
import ExportedImage from "next-image-export-optimizer";

export interface EthicsLayoutProps {
  lang: Lang;
}

export function EthicsLayout({ lang }: EthicsLayoutProps) {
  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<EthicsAttributes>);
  return (
    <PageLayout columns={2}>
      <div>
        <ExportedImage src="/static/ethics.png" placeholder="empty" alt="Ethics" width={300} height={300} />
      </div>
      <div>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
      </div>
    </PageLayout>
  );
}
