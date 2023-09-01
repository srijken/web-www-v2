import { readdirSync } from "fs";
import { join } from "path";
import { MarkdownImport, MarkdownPage } from "types";

const _PATH = join(process.cwd(), "content");

const _DEFAULT_LANG = "en";

export async function importMultiMarkdownFileList<T>(path: string, lang: string): Promise<MarkdownImport<T>[]> {
  let src = `${_PATH}/${path}/${lang}`;

  const filePaths = readdirSync(src);

  return Promise.all(
    filePaths.map(async (filePath) => {
      return importMultiMarkdownFile<T>(path, filePath.substring(0, filePath.length - 3), lang);
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
  return { ...markdown, slug };
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

  return { ...newMarkdown, slug: page };
}

export function mergeI18Attributes<T>(primary: T, target: Partial<T>) {
  Object.entries(primary).forEach(([key, value]) => {
    if (!target[key]) {
      target[key] = value;
    }
  });
}

export function workingImageURL(src: string) {
  return src.replace("/public", "");
}
