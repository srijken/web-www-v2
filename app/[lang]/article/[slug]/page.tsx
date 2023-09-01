import { Article } from "components/article/Article";
import { importMultiMarkdownFile } from "lib/utils";
import { ArticleAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ArticlePage({ params }: { params: { lang: "en" | "nl"; slug: string } }) {
  const { lang, slug } = params;
  const article = await importMultiMarkdownFile<ArticleAttributes>(`articles`, slug, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <Article lang={lang} article={article} />
        </PageLayout>
      </PageSection>
    </div>
  );
}
