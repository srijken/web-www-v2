import { ContactHome } from "components/contact/ContactHome";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function ContactPage({ params }: { params: any }) {
  const { lang } = params;
  return <ContactHome lang={lang} />;
}
