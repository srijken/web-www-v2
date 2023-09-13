import { PartnersHome } from "components/partners/PartnersHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function PartnersPage({ params }: { params: any }) {
  const { lang } = params;
  return <PartnersHome lang={lang} />;
}
