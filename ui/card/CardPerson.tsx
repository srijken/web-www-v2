import * as React from "react";
import "./card.scss";
import ExportedImage from "next-image-export-optimizer";
import cx from "classnames";

export interface CardPersonProps {
  children: React.ReactNode;
  name: string;
  title: string;
  imgSrc: string;
}

export function CardPerson({ children, name, title, imgSrc }: CardPersonProps) {
  return (
    <section
      className={cx({
        card: true,
        "card-person": true
      })}
    >
      <figure>
        <aside>
          <ExportedImage
            src={imgSrc}
            alt={name}
            fill
            priority
            placeholder="empty"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </aside>
        <div>
          <h3>{name}</h3>
          <h6>{title}</h6>
        </div>
      </figure>
      <header>{children}</header>
    </section>
  );
}
