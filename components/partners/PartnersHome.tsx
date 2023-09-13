import i18n from "i18n/i18n";
import * as React from "react";
import { Lang, MarkdownPage, PartnerAttributes } from "types";
import { CtaLink } from "ui/button/CtaLink";
import { Opener } from "ui/opener/Opener";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";
import { attributes } from "content/partners.md";
import { i18nContentFromAttributes } from "lib/utils";
import { FaqLayout } from "components/faq/FaqLayout";
import { ProudestWorkLayout } from "components/case/ProudestWorkLayout";
import { PartnerCard } from "./PartnerCard";
import "./partners.scss";

export interface PartnersHomeProps {
  lang: Lang;
}

export function PartnersHome({ lang }: PartnersHomeProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes<PartnerAttributes>(lang, attributes as MarkdownPage<PartnerAttributes>);

  if (!content) return null;

  return (
    <div className="home-layout volunteer">
      <Opener imgSrc="/static/test.png" imgAlt="Test">
        <h1>{content.title}</h1>
        <p className="opener">{content.intro}</p>
        <CtaLink href={`https://divd.nl`} isExternal>
          {t("openroles")}
        </CtaLink>
      </Opener>
      <PageSection type="inverse" overlap="top">
        <PageLayout>
          <div className="reverse">
            <h2>{content.partnerstitle}</h2>
            <p>{content.partnersintro}</p>
            <div className="partner-list">
              {content.partnerlist.map((p, i) => (
                <PartnerCard key={`partner${i}`} p={p} cta={t("visitsite")} />
              ))}
            </div>

            <div>
              <p>{content.partnerquote.name}</p>
              <p>{content.partnerquote.role}</p>
              <p>{content.partnerquote.website}</p>
              <p>{content.partnerquote.quote}</p>
              <p>{content.partnerquote.image}</p>
            </div>
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="gradient-reverse">
        <ProudestWorkLayout lang={lang} />
        <FaqLayout lang={lang} />
      </PageSection>
    </div>
  );
}
