import { WhatWeDoHome } from "components/whatwedo/WhatWeDoHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ContributePage({ params }: { params: any }) {
  const { lang } = params;
  return <WhatWeDoHome lang={lang} />;
}
