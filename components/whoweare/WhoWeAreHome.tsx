import i18n from "i18n/i18n";
import { i18nContentFromAttributes, workingImageURL } from "lib/utils";
import * as React from "react";
import { WhoWeAreAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/whoweare.md";
import { PageSection } from "ui/page/PageSection";
import { PageLayout } from "ui/page/PageLayout";
import { ProudestWorkLayout } from "components/case/ProudestWorkLayout";
import { TestimonialLayout } from "components/testimonial/TestimonialLayout";
import { CtaLink } from "ui/button/CtaLink";
import ExportedImage from "next-image-export-optimizer";
import { DIVDFamilyLayout } from "components/blocks/DIVDFamilyLayout";
import { FamilyCTALayout } from "components/blocks/FamilyCTALayout";
import { CSIRTLayout } from "components/blocks/CSIRTLayout";

export interface WhoWeAreProps {
  lang: Lang;
}

export function WhoWeAreHome({ lang }: WhoWeAreProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<WhoWeAreAttributes>);

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
            <CtaLink href="#mission">{t("learnmore")}</CtaLink>
          </div>
        </PageLayout>
      </div>
      <PageSection type="gradient">
        <PageLayout columns={2}>
          <div id="mission">
            <h2>{content.missionandhistory.title}</h2>
            <p className="pre">{content.missionandhistory.intro}</p>
          </div>
          <div>
            <p className="pre">{content.missionandhistory.description}</p>
          </div>
        </PageLayout>
        <PageLayout>
          <div>
            <ExportedImage
              alt={content.communicationmanager.name}
              src={workingImageURL(content.communicationmanager.image)}
              width={300}
              height={300}
            />
            <h3>{content.communicationmanager.name}</h3>
            <h3>{content.communicationmanager.role}</h3>
            <p>{content.communicationmanager.description}</p>
            <CtaLink href={`/${lang}/team`}>Meet the whole team</CtaLink>
          </div>
        </PageLayout>
        <DIVDFamilyLayout lang={lang} />
        <FamilyCTALayout lang={lang} />
        <CSIRTLayout lang={lang} />
      </PageSection>
    </div>
  );
}
