import { TeamHome } from "components/people/TeamHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function TeamPage({ params }: { params: any }) {
  const { lang } = params;
  return <TeamHome lang={lang} />;
}
