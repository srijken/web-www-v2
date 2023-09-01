import { Home } from "components/home/Home";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

export default function HomePage() {
  return <Home lang={"en"} />;
}

// import { attributes, react as HomeContent } from "../content/home.md";
// let { title, cats } = attributes as any;
// <HomeContent />
// <ul>
//   {cats.map((cat, k) => (
//     <li key={k}>
//       <h2>{cat.name}</h2>
//       <p>{cat.description}</p>
//     </li>
//   ))}
// </ul>
