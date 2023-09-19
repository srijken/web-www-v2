import * as React from "react";
import "./card.scss";
import ExportedImage from "next-image-export-optimizer";
import cx from "classnames";

export interface CardProps {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
  fit?: "cover" | "contain";
  tag?: string;
  article?: boolean;
  cta?: boolean;
  info?: boolean;
}

export function Card({ imgSrc, imgAlt, children, tag, fit = "cover", article, cta, info }: CardProps) {
  if (!cta && !info) article = true;
  return (
    <section
      className={cx({
        card: true,
        "card-article": article,
        "card-cta": cta,
        "card-info": info
      })}
    >
      <figure>
        {imgSrc && (
          <ExportedImage
            src={imgSrc}
            alt={imgAlt}
            placeholder="empty"
            className="test"
            width={300}
            height={300}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          />
        )}
        {tag && <figcaption>{tag}</figcaption>}
      </figure>
      <header>{children}</header>
    </section>
  );
}
