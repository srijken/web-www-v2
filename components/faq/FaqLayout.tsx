import * as React from "react";
import { PageLayout } from "../../ui/page/PageLayout";
import { CtaLink } from "../../ui/button/CtaLink";
import { attributes } from "../../content/faq.md";
import { i18nContentFromAttributes } from "lib/utils";
import { FaqAttributes, Lang, MarkdownPage } from "types";
import { Accordion, AccordionItem } from "ui/accordion/Accordion";

export function FaqLayout({ lang = "en", skipContact = false }: { lang: Lang; skipContact?: boolean }) {
  let content = i18nContentFromAttributes(lang, attributes as MarkdownPage<FaqAttributes>);
  if (!content) return null;

  let homeFaq = content.faqgroups.find((g) => g.heading === "Home" || g.heading === "Thuis");
  if (!homeFaq) return null;

  return (
    <PageLayout columns={2}>
      <div>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>

        {!skipContact && <CtaLink href={`/${lang}/contact`}>Contact</CtaLink>}
        <CtaLink href={`/${lang}/faq`} isInverse>
          All faq
        </CtaLink>
      </div>
      <div>
        <Accordion>
          {homeFaq.faqs.map((faq, n) => (
            <AccordionItem key={n} title={faq.title} active={n === 0}>
              {faq.description}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageLayout>
  );
}
