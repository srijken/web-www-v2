import i18n from "i18n/i18n";
import { i18nContentFromAttributes } from "lib/utils";
import * as React from "react";
import { ContactAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/contact.md";
import { PageSection } from "ui/page/PageSection";
import { FaqLayout } from "components/faq/FaqLayout";
import { PageLayout } from "ui/page/PageLayout";

export interface ContactHomeProps {
  lang: Lang;
}

export function ContactHome({ lang }: ContactHomeProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes<ContactAttributes>(lang, attributes as MarkdownPage<ContactAttributes>);

  if (!content) return null;
  return (
    <div className="topic-layout contact">
      <div className="topic-intro reverse">
        <PageLayout columns={2} vcenter>
          <div>
            <h1>{content.title}</h1>
          </div>
          <div>
            <p>{content.intro}</p>
          </div>
        </PageLayout>
      </div>
      <PageSection type="gradient">
        <FaqLayout lang={lang} skipContact />
        <PageLayout columns={2}>
          <div>
            <h2>{content.form.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{content.form.description}</p>
          </div>
          <div>Form</div>
        </PageLayout>
      </PageSection>
    </div>
  );
}
