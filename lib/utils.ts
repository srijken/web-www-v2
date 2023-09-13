import { readdirSync } from "fs";
import { join } from "path";
import { Lang, MarkdownImport, MarkdownPage } from "types";

const _PATH = join(process.cwd(), "content");

export const _DEFAULT_LANG = "en";

export async function getSlugs(path: string, lang: string) {
  let src = `${_PATH}/${path}/${lang}`;

  const filePaths = readdirSync(src);
  return filePaths.map((p) => p.substring(0, p.length - 3));
}

export async function importMultiMarkdownFileList<T>(path: string, lang: string): Promise<MarkdownImport<T>[]> {
  let slugs = await getSlugs(path, lang);
  return Promise.all(
    slugs.map(async (slug) => {
      return importMultiMarkdownFile<T>(path, slug, lang);
    })
  );
}

export async function importMultiMarkdownFile<T>(path: string, slug: string, lang: string): Promise<MarkdownImport<T>> {
  const copyAttributes = lang !== _DEFAULT_LANG;

  const markdown: MarkdownImport<T> = await import(`../content/${path}/${lang}/${slug}.md`);
  if (copyAttributes) {
    const defaultMarkdown: MarkdownImport<T> = await import(`../content/${path}/${_DEFAULT_LANG}/${slug}.md`);
    mergeI18Attributes(defaultMarkdown.attributes, markdown.attributes);
  }
  return { ...markdown, slug } as MarkdownImport<T>;
}

export async function importPageMarkdownFile<T>(page: string, lang: string) {
  const copyAttributes = lang !== _DEFAULT_LANG;
  const markdown: MarkdownImport<MarkdownPage<T>> = await import(`../content/${page}.md`);

  if (copyAttributes) {
    mergeI18Attributes(markdown.attributes.en, markdown.attributes.nl);
  }

  let newMarkdown = {
    ...markdown,
    attributes: markdown.attributes[lang]
  };

  return { ...newMarkdown, slug: page } as MarkdownImport<T>;
}

export function mergeI18Attributes<T>(primary: T, target: Partial<T>) {
  Object.entries(primary).forEach(([key, value]) => {
    if (!target[key]) {
      target[key] = value;
    }
  });
}

export function i18nContentFromAttributes<T>(lang: Lang, attributes: MarkdownPage<T>) {
  if (!languageGuard(lang)) return null;

  let content = lang === "en" ? (attributes.en as T) : (attributes.nl as T);

  if (lang === "nl") {
    mergeI18Attributes(attributes.en, content);
  }
  return content;
}

export async function staticParams(path: string) {
  let slugs = await getSlugs(path, _DEFAULT_LANG);
  let results = [...slugs.map((slug) => ({ lang: "en", slug })), ...slugs.map((slug) => ({ lang: "nl", slug }))];
  return results;
}

export function workingImageURL(src: string | null | undefined) {
  if (src) return src.replace("/public", "");
  return null;
}

export function languageGuard(lang: any) {
  if (lang !== "en" && lang !== "nl") return false;
  return true;
}
