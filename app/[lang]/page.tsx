import { Home } from "components/home/Home";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default function HomePage({ params }: { params: any }) {
  const { lang } = params;
  return <Home lang={lang} />;
}
