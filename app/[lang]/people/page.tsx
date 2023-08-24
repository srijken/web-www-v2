import { ArticleHome } from "components/article/ArticleHome";
import { importMarkdownFiles } from "lib/utils";

export default async function ArticlePage({ params }: { params: any }) {
  const { lang } = params;
  const articles = await importMarkdownFiles(`people/${lang}`);

  return <ArticleHome lang={lang} articles={articles} />;
}
