import * as React from "react";
import { DIVDFamilyAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/divdfamily.md";
import { PageLayout } from "ui/page/PageLayout";

import { i18nContentFromAttributes, workingImageURL } from "lib/utils";
import ExportedImage from "next-image-export-optimizer";
import { CtaLink } from "ui/button/CtaLink";

export interface DIVDFamilyLayoutProps {
  lang: Lang;
}

export function DIVDFamilyLayout({ lang }: DIVDFamilyLayoutProps) {
  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<DIVDFamilyAttributes>);
  return (
    <PageLayout>
      <div>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <div className="divd-family-list">
        {content.members.map((m, i) => (
          <div key={`member-${i}`} className="divd-family-item">
            <h3>{m.name}</h3>
            <p>{m.description}</p>
            <CtaLink href={m.link} isExternal>
              Visit site
            </CtaLink>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
