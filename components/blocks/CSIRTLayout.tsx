import * as React from "react";
import { CSIRTAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/csirt.md";
import { PageLayout } from "ui/page/PageLayout";

import { i18nContentFromAttributes } from "lib/utils";
import ExportedImage from "next-image-export-optimizer";
import { CtaLink } from "ui/button/CtaLink";

export interface CSIRTLayoutProps {
  lang: Lang;
}

export function CSIRTLayout({ lang }: CSIRTLayoutProps) {
  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<CSIRTAttributes>);
  return (
    <PageLayout columns={2}>
      <div>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
        <CtaLink href={content.link} isExternal>
          CSIRT site
        </CtaLink>
      </div>
      <div>
        <ExportedImage src="/static/csirt.png" placeholder="empty" alt="CSIRT" width={300} height={300} />
      </div>
    </PageLayout>
  );
}
