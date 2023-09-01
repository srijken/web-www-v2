import { Case } from "components/case/Case";
import { importMultiMarkdownFile } from "lib/utils";
import { CaseAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function CasePage({ params }: { params: { lang: "en" | "nl"; slug: string } }) {
  const { lang, slug } = params;
  const caseObj = await importMultiMarkdownFile<CaseAttributes>(`cases`, slug, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <Case lang={lang} caseObj={caseObj} />
        </PageLayout>
      </PageSection>
    </div>
  );
}
