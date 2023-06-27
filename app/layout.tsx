import { MainLayout } from "../components/layout/MainLayout";
import "../ui/css/reset.scss";
import "../ui/css/variables.scss";
import "../ui/css/global.scss";
import "../ui/css/typography.scss";

import { Source_Sans_3 } from "next/font/google";

const headerFont = Source_Sans_3({
  weight: ["900", "400"],
  variable: "--font-header",
  subsets: ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${headerFont.variable}`}>
      <head></head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
