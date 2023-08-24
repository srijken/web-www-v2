import { readdirSync } from "fs";
import { join } from "path";

const _PATH = join(process.cwd(), "content");

export const importMarkdownFiles = async (path: string) => {
  let src = `${_PATH}/${path}`;

  const filePaths = readdirSync(src);
  return Promise.all(
    filePaths.map(async (filePath) => {
      const markdown = await import(`../content/${path}/${filePath}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
