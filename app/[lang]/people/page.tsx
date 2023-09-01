import { ArticleHome } from "components/article/ArticleHome";
import { PeopleHome } from "components/people/PeopleHome";
import { importMultiMarkdownFileList } from "lib/utils";
import { PeopleAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function PeoplePage({ params }: { params: any }) {
  const { lang } = params;
  const peoples = await importMultiMarkdownFileList<PeopleAttributes>(`people`, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <PeopleHome lang={lang} peoples={peoples} />
        </PageLayout>
      </PageSection>
    </div>
  );
}
