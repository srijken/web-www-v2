import i18n from "i18n/i18n";
import { i18nContentFromAttributes, workingImageURL } from "lib/utils";
import * as React from "react";
import { TeamAttributes, Lang, MarkdownPage } from "types";
import { attributes } from "content/team.md";
import { PageSection } from "ui/page/PageSection";
import { PageLayout } from "ui/page/PageLayout";

export interface TeamHomeProps {
  lang: Lang;
}

export function TeamHome({ lang }: TeamHomeProps) {
  let t = i18n(lang);

  const content = i18nContentFromAttributes(lang, attributes as MarkdownPage<TeamAttributes>);

  if (!content) return null;

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <div>
            {content.teams.map((team, i) => (
              <div key={`team-${i}`}>
                <h3>{team.title}</h3>
                <p>{team.description}</p>
                <div>
                  {team.members.map((member, j) => (
                    <div key={`member-${j}`}>{member}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageLayout>
      </PageSection>
    </div>
  );
}
