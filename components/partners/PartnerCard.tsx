import * as React from "react";
import { PartnerItem } from "types";
import "./partners.scss";
import { CtaLink } from "ui/button/CtaLink";
import ExportedImage from "next-image-export-optimizer";
import { workingImageURL } from "lib/utils";

export interface PartnerCardProps {
  p: PartnerItem;
  cta: string;
}

export function PartnerCard({ p, cta }: PartnerCardProps) {
  let imgSrc = p.image ? workingImageURL(p.image) : null;
  let imgAlt = p.name;

  return (
    <div className="partner-card">
      <figure>
        {imgSrc && (
          <ExportedImage
            src={imgSrc}
            alt={imgAlt}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 30vw, 20vw"
          />
        )}
      </figure>
      <section>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <CtaLink href={p.website} isExternal isInverse>
          {cta}
        </CtaLink>
      </section>
    </div>
  );
}
