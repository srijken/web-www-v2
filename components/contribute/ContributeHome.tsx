import i18n from "i18n/i18n";
import { i18nContentFromAttributes } from "lib/utils";
import * as React from "react";
import { ContributeAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/contribute.md";
import { PageSection } from "ui/page/PageSection";
import { PageLayout } from "ui/page/PageLayout";
import { CtaLink } from "ui/button/CtaLink";
import { Card } from "ui/card/Card";

export interface ContributeHomeProps {
  lang: Lang;
}

export function ContributeHome({ lang }: ContributeHomeProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes<ContributeAttributes>(
    lang,
    attributes as MarkdownPage<ContributeAttributes>
  );

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
            <CtaLink href="#dontate">Donate</CtaLink>
          </div>
        </PageLayout>
      </div>
      <PageSection type="gradient">
        <PageLayout columns={2}>
          <Card imgSrc="/static/becomevolunteer.png" imgAlt={content.becomevolunteer.title} cta>
            <h2>{content.becomevolunteer.title}</h2>
            <p className="pre">{content.becomevolunteer.description}</p>
          </Card>
          <Card imgSrc="/static/becomepartner.png" imgAlt={content.becomepartner.title} cta>
            <h2>{content.becomepartner.title}</h2>
            <p className="pre">{content.becomepartner.description}</p>
          </Card>
        </PageLayout>

        <PageLayout columns={2}>
          <div>
            <h2>{content.appreciate.title}</h2>
            <p className="pre">{content.appreciate.description}</p>
          </div>

          <div>
            <div className="block">
              <h3>{content.donatesupp.title}</h3>
              <p className="pre">{content.donatesupp.description}</p>
              {content.donatesupp.links.map((link) => (
                <CtaLink href={link.link} isSecondary>
                  {link.label}
                </CtaLink>
              ))}
              <CtaLink href={content.donatesupp.customlink} isSecondary>
                Donate custom amount
              </CtaLink>
            </div>

            <div className="block">
              <h3>{content.donatepaypal.label}</h3>
              <CtaLink href={content.donatepaypal.link}>{content.donatepaypal.label}</CtaLink>
            </div>

            <div className="block">
              <h3>{content.donatebanktransfer.label}</h3>
              <CtaLink href={content.donatebanktransfer.link}>{content.donatebanktransfer.label}</CtaLink>
            </div>
          </div>
        </PageLayout>
      </PageSection>
    </div>
  );
}
