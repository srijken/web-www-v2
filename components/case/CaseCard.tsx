import { workingImageURL } from "lib/utils";
import * as React from "react";
import { CtaLink } from "ui/button/CtaLink";
import { Card } from "ui/card/Card";

export interface CaseCardProps {
  str: string;
  cta: string;
}

export function CaseCard({ str, cta }: CaseCardProps) {
  const [slug, title, imgSrc] = str.split("|");
  return (
    <Card imgSrc={workingImageURL(imgSrc)} imgAlt="Test" tag="Case">
      <h2>{title}</h2>
      <CtaLink href={`/case/${slug}`}>{cta}</CtaLink>
    </Card>
  );
}
