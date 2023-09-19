import { PeopleAttributes, MarkdownImport } from "types";
import * as React from "react";
import { workingImageURL } from "lib/utils";
import ExportedImage from "next-image-export-optimizer";
import "./person.scss";
import cx from "classnames";

export interface PersonProps {
  lang: "en" | "nl";
  person: MarkdownImport<PeopleAttributes>;
}

export function Person({ lang, person }: PersonProps) {
  let imgSrc = workingImageURL(person.attributes.image);
  let imgAlt = person.attributes.name;

  let links = person.attributes.links || [];
  let articles = person.attributes.articles || [];
  let cases = person.attributes.cases || [];

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

        {links.map((l) => (
          <div key={l.link}>
            <a href={l.link}>{l.link}</a>
          </div>
        ))}

        {articles.map((l) => (
          <div key={l}>
            <a href={l}>{l}</a>
          </div>
        ))}
        {cases.map((l) => (
          <div key={l}>
            <a href={l}>{l}</a>
          </div>
        ))}
      </section>
      <section>
        <div className={cx({ "person-image": true })}>
          {imgSrc && (
            <ExportedImage
              src={imgSrc}
              alt={imgAlt}
              placeholder="empty"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </section>
    </div>
  );
}
