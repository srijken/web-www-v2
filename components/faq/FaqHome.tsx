import * as React from "react";
import { PageLayout } from "../../ui/page/PageLayout";
import { CtaLink } from "../../ui/button/CtaLink";
import { attributes } from "../../content/faq.md";
let { en, nl } = attributes as any;

export function FaqHome({ lang = "en" }: { lang?: string }) {
  let content = lang === "en" ? en : nl;
  return (
    <PageLayout columns={2}>
      <div>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>

        <CtaLink href={`mailto:${content.contact}`}>Contact</CtaLink>
        <CtaLink href="/temp" isInverse>
          All faq
        </CtaLink>
      </div>
      <div>
        {content.faqs.map((faq, n) => (
          <div key={n}>
            <h3>{faq.title}</h3>
            <div>{faq.description}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
