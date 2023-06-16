import { MainLayout } from "../components/layout/MainLayout";
import "../ui/css/reset.scss";
import "../ui/css/variables.scss";
import "../ui/css/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
