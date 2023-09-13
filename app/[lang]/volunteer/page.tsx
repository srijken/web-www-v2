import { VolunteerHome } from "components/volunteer/VolunteerHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function VolunteerPage({ params }: { params: any }) {
  const { lang } = params;
  return <VolunteerHome lang={lang} />;
}
