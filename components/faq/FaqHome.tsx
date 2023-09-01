import * as React from "react";
import { FaqAttributes, Lang } from "types";

export interface FaqHomeProps {
  lang: Lang;
  faq: FaqAttributes;
}

export function FaqHome({ faq }: FaqHomeProps) {
  if (!faq) {
    console.log("faq is undefined");
    return null;
  }
  return (
    <div>
      {faq.faqgroups.map((faqgroup, n) => (
        <div key={n}>
          <h2>{faqgroup.heading}</h2>
          <div>
            {faqgroup.faqs.map((faq, ni) => (
              <div key={ni}>
                <h3>{faq.title}</h3>
                <p>{faq.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
