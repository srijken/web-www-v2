import * as React from "react";
import { Lang, MarkdownPage, MissionAttributes } from "types";
import { attributes } from "content/mission.md";
import { PageSection } from "ui/page/PageSection";
import { PageLayout } from "ui/page/PageLayout";
import { SubOpener } from "ui/opener/SubOpener";
import { Stats, StatsItem } from "ui/stats/Stats";
import i18n from "i18n/i18n";
import { i18nContentFromAttributes, mergeI18Attributes } from "lib/utils";

export interface MissionSectionProps {
  lang: Lang;
}

export function MissionSection({ lang }: MissionSectionProps) {
  const t = i18n(lang);
  const content = i18nContentFromAttributes<MissionAttributes>(lang, attributes as MarkdownPage<MissionAttributes>);

  return (
    <PageSection type="inverse" overlap="bottom" round={["topright"]}>
      <PageLayout>
        <SubOpener>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </SubOpener>
      </PageLayout>
      <PageLayout>
        <Stats>
          <StatsItem>
            <h2>{content.members}</h2>
            <h6>{t("members")}</h6>
          </StatsItem>
          <StatsItem>
            <h2>{content.totalcases}</h2>
            <h6>{t("totalcases")}</h6>
          </StatsItem>
          <StatsItem>
            <h2>{content.ips}</h2>
            <h6>{t("ipsnotified")}</h6>
          </StatsItem>
        </Stats>
      </PageLayout>
    </PageSection>
  );
}
