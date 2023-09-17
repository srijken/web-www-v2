import i18n from "i18n/i18n";
import { i18nContentFromAttributes } from "lib/utils";
import * as React from "react";
import { WhatwedoAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/whatwedo.md";
import { PageSection } from "ui/page/PageSection";
import { FaqLayout } from "components/faq/FaqLayout";
import { PageLayout } from "ui/page/PageLayout";
import { ProudestWorkLayout } from "components/case/ProudestWorkLayout";
import { TestimonialLayout } from "components/testimonial/TestimonialLayout";
import { EthicsLayout } from "components/ethics/EthicsLayout";

export interface WhatWeDoHomeProps {
  lang: Lang;
}

export function WhatWeDoHome({ lang }: WhatWeDoHomeProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<WhatwedoAttributes>);

  if (!content) return null;
  return (
    <div className="topic-layout contact">
      <div className="topic-intro reverse">
        <PageLayout layout="right" vcenter>
          <div>
            <h1>{content.title}</h1>
          </div>
          <div>
            <p>{content.intro}</p>
          </div>
        </PageLayout>
      </div>
      <PageSection type="gradient">
        <PageLayout columns={2}>
          <div>
            <h2>{content.whatwedocontent.title}</h2>
            <p className="pre">{content.whatwedocontent.description}</p>
          </div>
          <div>
            <div>
              <h3>{content.scouting.title}</h3>
              <p>{content.scouting.description}</p>
            </div>
            <div>
              <h3>{content.assessing.title}</h3>
              <p>{content.assessing.description}</p>
            </div>
            <div>
              <h3>{content.reporting.title}</h3>
              <p>{content.reporting.description}</p>
            </div>
          </div>
        </PageLayout>
        <EthicsLayout lang={lang} />
        <ProudestWorkLayout lang={lang} />
      </PageSection>

      <PageSection>
        <TestimonialLayout lang={lang} />
      </PageSection>
    </div>
  );
}
