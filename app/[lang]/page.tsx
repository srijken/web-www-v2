import { Home } from "components/home/Home";
import { importPageMarkdownFile } from "lib/utils";
import { HomeAttributes } from "types";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function HomePage({ params }: { params: any }) {
  const { lang } = params;
  const home = await importPageMarkdownFile<HomeAttributes>(`home`, lang);
  return <Home lang={lang} content={home.attributes} />;
}
