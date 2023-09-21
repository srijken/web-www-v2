import { RootLayout as Layout } from "../ui/layout/RootLayout";
import "../ui/css/reset.scss";
import "../ui/css/variables.scss";
import "../ui/css/global.scss";
import "../ui/css/typography.scss";

import { Source_Sans_3 } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Script from "next/script";

const headerFont = Source_Sans_3({
  weight: ["900", "400"],
  variable: "--font-header",
  subsets: ["latin"]
});

const textFont = Open_Sans({
  weight: ["400", "700"],
  variable: "--font-text",
  subsets: ["latin"]
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${headerFont.variable} ${textFont.variable}`}>
      <head></head>
      <body>
        <Layout>{children}</Layout>

        <Script src="/js/nav.js" />
        <Script src="/js/ui.js" />
      </body>
    </html>
  );
}
