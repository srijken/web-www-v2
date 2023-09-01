import { FaqHome } from "components/faq/FaqHome";
import { importPageMarkdownFile } from "lib/utils";
import { FaqAttributes } from "types";
import { PageLayout } from "ui/page/PageLayout";
import { PageSection } from "ui/page/PageSection";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default async function FaqPage({ params }: { params: any }) {
  const { lang } = params;
  const faq = await importPageMarkdownFile<FaqAttributes>(`faq`, lang);

  return (
    <div className="article-layout">
      <PageSection>
        <PageLayout layout="left" type="article">
          <FaqHome lang={lang} faq={faq.attributes} />
          <div />
        </PageLayout>
      </PageSection>
    </div>
  );
}
