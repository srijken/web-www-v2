import * as React from "react";
import styles from "./card.module.scss";
import ExportedImage from "next-image-export-optimizer";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

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
        <ExportedImage
          src={imgSrc}
          alt={imgAlt}
          fill
          priority
          style={{ objectFit: fit }}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
        />
        {tag && <figcaption>{tag}</figcaption>}
      </figure>
      <header>{children}</header>
    </section>
  );
}
