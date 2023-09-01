import { ArticleHome } from "components/article/ArticleHome";
import { Person } from "components/people/Person";
import { importMultiMarkdownFile } from "lib/utils";
import { Lang, PeopleAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function PersonPage({ params }: { params: { lang: Lang; slug: string } }) {
  const { lang, slug } = params;
  const person = await importMultiMarkdownFile<PeopleAttributes>(`people`, slug, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout type="article">
          <Person lang={lang} person={person} />
        </PageLayout>
      </PageSection>
    </div>
  );
}
