import { PeopleAttributes, MarkdownImport } from "types";
import * as React from "react";
import { workingImageURL } from "lib/utils";
import ExportedImage from "next-image-export-optimizer";
import styles from "./person.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export interface PersonProps {
  lang: "en" | "nl";
  person: MarkdownImport<PeopleAttributes>;
}

export function Person({ lang, person }: PersonProps) {
  let imgSrc = workingImageURL(person.attributes.image);
  let imgAlt = person.attributes.name;
  return (
    <div
      className={cx({
        person: true
      })}
    >
      <section>
        <h2>{person.attributes.name}</h2>
        <h5>{person.attributes.role}</h5>
        <p>{person.attributes.bio}</p>

        {person.attributes.links.map((l) => (
          <div key={l.link}>
            <a href={l.link}>{l.link}</a>
          </div>
        ))}

        {person.attributes.articles.map((l) => (
          <div key={l}>
            <a href={l}>{l}</a>
          </div>
        ))}
        {person.attributes.cases.map((l) => (
          <div key={l}>
            <a href={l}>{l}</a>
          </div>
        ))}
      </section>
      <section>
        <div className={cx({ "person-image": true })}>
          <ExportedImage
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>
    </div>
  );
}
