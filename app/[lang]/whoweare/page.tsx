import { WhoWeAreHome } from "components/whoweare/WhoWeAreHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ContributePage({ params }: { params: any }) {
  const { lang } = params;
  return <WhoWeAreHome lang={lang} />;
}
