import i18n from "i18n/i18n";
import * as React from "react";
import { Lang, MarkdownPage, VolunteersAttributes } from "types";
import { CtaLink } from "ui/button/CtaLink";
import { Opener } from "ui/opener/Opener";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";
import { attributes } from "content/volunteers.md";
import { i18nContentFromAttributes } from "lib/utils";
import { FaqLayout } from "components/faq/FaqLayout";
import { ProudestWorkLayout } from "components/case/ProudestWorkLayout";
import "./volunteer.scss";

export interface VolunteerHomeProps {
  lang: Lang;
}

export function VolunteerHome({ lang }: VolunteerHomeProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes<VolunteersAttributes>(
    lang,
    attributes as MarkdownPage<VolunteersAttributes>
  );

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
          <div className="core-values">
            <h2>{content.corevaluestitle}</h2>
            <article>
              {content.corevalues.map((o, i) => (
                <section key={i}>
                  <h3>
                    <span>{i + 1}</span>
                    {o.title}
                  </h3>
                  <p>{o.description}</p>
                </section>
              ))}
            </article>
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
