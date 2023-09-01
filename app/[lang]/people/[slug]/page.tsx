import { Person } from "components/people/Person";
import { _DEFAULT_LANG, importMultiMarkdownFile, staticParams } from "lib/utils";
import { Lang, PeopleAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return staticParams("people");
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
