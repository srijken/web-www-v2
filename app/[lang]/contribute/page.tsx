import { ContributeHome } from "components/contribute/ContributeHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ContributePage({ params }: { params: any }) {
  const { lang } = params;
  return <ContributeHome lang={lang} />;
}
