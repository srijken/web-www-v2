import * as React from "react";
import styles from "./card.module.scss";
import ExportedImage from "next-image-export-optimizer";

export interface CardProps {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
  tag?: string;
}

export function Card({ imgSrc, imgAlt, children, tag }: CardProps) {
  return (
    <section className={styles.card}>
      <figure>
        <ExportedImage src={imgSrc} alt={imgAlt} fill priority style={{ objectFit: "cover" }} />
        {tag && <figcaption>{tag}</figcaption>}
      </figure>
      <header>{children}</header>
    </section>
  );
}
