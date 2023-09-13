import { FaqHome } from "components/faq/FaqHome";
import ExportedImage from "next-image-export-optimizer";
import * as React from "react";
import { CtaLink } from "ui/button/CtaLink";
import { Card } from "ui/card/Card";
import { CardPerson } from "ui/card/CardPerson";
import { Carousel } from "ui/carousel/Carousel";
import { CarouselSmall } from "ui/carousel/CarouselSmall";
import { Opener } from "ui/opener/Opener";
import { SubOpener } from "ui/opener/SubOpener";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

import i18n from "i18n/i18n";
import { attributes } from "content/home.md";
import { HomeAttributes, Lang, MarkdownPage } from "types";
import { CaseCard } from "components/case/CaseCard";

import { i18nContentFromAttributes, workingImageURL } from "lib/utils";
import { MissionSection } from "components/mission/MissionSection";
import { TestimonialLayout } from "components/testimonial/TestimonialLayout";
import { ProudestWorkLayout } from "components/case/ProudestWorkLayout";

export interface HomeProps {
  lang: Lang;
}

export function Home({ lang = "en" }: HomeProps) {
  let t = i18n(lang);
  const content = i18nContentFromAttributes<HomeAttributes>(lang, attributes as MarkdownPage<HomeAttributes>);
  if (!content) return null;
  return (
    <div className="home-layout">
      <Opener imgSrc="/static/test.png" imgAlt="Test">
        <h1>{content.title}</h1>
        <p className="opener">{content.intro}</p>
        <CtaLink href={`/${lang}/who-we-are`}>{t("whoweare")}</CtaLink>
      </Opener>
      <PageSection type="inverse" overlap="top">
        <PageLayout columns={3}>
          <CaseCard str={content.fold.showcase} cta={t("readmore")} />
          <Card imgSrc="/static/received_email.png" imgAlt="Test">
            <h2>{content.fold.received}</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
          <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
            <h2>{content.fold.family}</h2>
            <CtaLink href="/temp">Read more</CtaLink>
          </Card>
        </PageLayout>
        <PageLayout layout="left" extend>
          <div className="reverse">
            <h2>{content.whatwedo.title}</h2>
            <p>{content.whatwedo.description}</p>
            <CtaLink href="/temp" isSecondary>
              {t("learnmore")}
            </CtaLink>
          </div>

          <Carousel>
            <Card imgSrc="/assets/scout.png" imgAlt="Scout" cta>
              <h2>{content.whatwedo.t1}</h2>
            </Card>
            <Card imgSrc="/static/test.png" imgAlt="Test">
              <h2>{content.whatwedo.t2}</h2>
            </Card>
            <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
              <h2>{content.whatwedo.t3}</h2>
            </Card>
          </Carousel>
        </PageLayout>
      </PageSection>

      <PageSection type="gradient-reverse">
        <ProudestWorkLayout lang={lang} />
      </PageSection>
      <MissionSection lang={lang} />

      <PageSection>
        <TestimonialLayout lang={lang} />
        <PageLayout columns={2}>
          <div>
            <h2>{content.helpushelpyou.title}</h2>
            <p>{content.helpushelpyou.description}</p>
            <p>&nbsp;</p>
            <CtaLink href="/temp">Download Security.txt</CtaLink>
            <p>&nbsp;</p>
          </div>
          <div style={{ position: "relative" }}>
            <ExportedImage
              src="/static/csirt_team.png"
              alt="Security.txt"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="primary" round={["topleft"]}>
        <PageLayout columns={2}>
          <div>
            <h2>{content.volunteer.title}</h2>
            {content.volunteer.checklist.map((o, i) => (
              <p key={`volunteer${i}`}>{o.item}</p>
            ))}

            <CtaLink href={`/${lang}/volunteer`}>{t("becomeavolunteer")}</CtaLink>
            <CtaLink href="/temp" isInverse isExternal>
              {t("openroles")}
            </CtaLink>
          </div>
          <div style={{ position: "relative" }}>
            <ExportedImage
              src="/static/volunteers.png"
              alt="Become a volunteer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="inverse" round={["bottomright"]}>
        <PageLayout>
          <div className="reverse">
            <h2>Our partners</h2>

            <CarouselSmall>
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
            </CarouselSmall>

            <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis volutpat risus euismod venenatis gravida purus non.
              Maecenas tortor tempor nulla bibendum. A sem velit tellus tortor risus.
            </p>

            <CtaLink isSecondary href="/temp">
              Become a partner
            </CtaLink>
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="gradient-reverse">{/* <FaqHome lang={lang} /> */}</PageSection>
    </div>
  );
}
