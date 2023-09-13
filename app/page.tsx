import { Home } from "components/home/Home";
import { importPageMarkdownFile } from "lib/utils";
import { HomeAttributes } from "types";

export default async function HomePage() {
  const home = await importPageMarkdownFile<HomeAttributes>(`home`, "en");
  return <Home lang={"en"} content={home.attributes} />;
}
