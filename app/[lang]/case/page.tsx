import { CaseHome } from "components/case/CaseHome";
import { importMultiMarkdownFileList } from "lib/utils";
import { CaseAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function CaseHomePage({ params }: { params: any }) {
  const { lang } = params;
  const cases = await importMultiMarkdownFileList<CaseAttributes>(`cases`, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <CaseHome lang={lang} cases={cases} />
        </PageLayout>
      </PageSection>
    </div>
  );
}
