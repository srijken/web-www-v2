import * as React from "react";

import ExportedImage from "next-image-export-optimizer";
import styles from "./opener.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface OpenerProps {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
}

export function Opener({ imgSrc, imgAlt, children }: OpenerProps) {
  return (
    <div className={styles.opener}>
      <article>
        <section>{children}</section>
      </article>
      <aside>
        <ExportedImage
          src={imgSrc}
          alt={imgAlt}
          fill
          priority
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </aside>
    </div>
  );
}
