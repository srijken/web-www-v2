import { NewsroomHome } from "components/newsroom/NewsroomHome";
import { importMultiMarkdownFile, importMultiMarkdownFileList, importPageMarkdownFile } from "lib/utils";
import { ArticleAttributes, NewsroomAttributes } from "types";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function NewsroomPage({ params }: { params: any }) {
  const { lang } = params;

  const content = await importPageMarkdownFile<NewsroomAttributes>("newsroom", lang);

  let highlight = content.attributes.highlight.split("|");

  const highlightArticle = await importMultiMarkdownFile<ArticleAttributes>("articles", highlight[0], lang);
  let articles = await importMultiMarkdownFileList<ArticleAttributes>("articles", lang);

  //remove highlight article
  articles = articles.filter((article) => article.slug !== highlight[0]);
  //sort by date
  articles.sort((a, b) => (a.attributes.date > b.attributes.date ? -1 : 1));

  //reduce to 6
  articles = articles.slice(0, 6);

  return (
    <NewsroomHome lang={lang} content={content.attributes} highlightArticle={highlightArticle} articles={articles} />
  );
}
