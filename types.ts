export type MarkdownImport<T> = {
  attributes: T;
  react: React.VFC;
  slug: string;
};

export type MarkdownArticle = MarkdownImport<{
  title: string;
  data: string;
}>;
