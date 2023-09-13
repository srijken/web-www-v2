import * as React from "react";
import { Lang, MarkdownPage, TestimonialAttributes } from "types";
import { attributes } from "content/testimonials.md";
import { PageLayout } from "ui/page/PageLayout";
import { Carousel } from "ui/carousel/Carousel";
import { CardPerson } from "ui/card/CardPerson";
import { i18nContentFromAttributes, workingImageURL } from "lib/utils";

export interface TestimonialLayoutProps {
  lang: Lang;
}

export function TestimonialLayout({ lang }: TestimonialLayoutProps) {
  const content = i18nContentFromAttributes<TestimonialAttributes>(
    lang,
    attributes as MarkdownPage<TestimonialAttributes>
  );
  return (
    <PageLayout extend>
      <h2>{content.title}</h2>
      <Carousel>
        {content.testimonials.map((t, i) => (
          <CardPerson name={t.name} title={t.role} imgSrc={workingImageURL(t.image)}>
            <p>{t.quote}</p>
          </CardPerson>
        ))}
      </Carousel>
    </PageLayout>
  );
}
