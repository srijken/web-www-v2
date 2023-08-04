import { Home } from "components/home/Home";

export default function HomePage({ params }: { params: any }) {
  const { lang } = params;
  return <Home lang={lang} />;
}
