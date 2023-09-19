import * as React from "react";

import ExportedImage from "next-image-export-optimizer";
import "./opener.scss";
import cx from "classnames";

export interface OpenerProps {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
}

export function Opener({ imgSrc, imgAlt, children }: OpenerProps) {
  return (
    <div className={"opener"}>
      <article>
        <section>{children}</section>
      </article>
      <aside>
        <ExportedImage
          src={imgSrc}
          alt={imgAlt}
          placeholder="empty"
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </aside>
    </div>
  );
}
