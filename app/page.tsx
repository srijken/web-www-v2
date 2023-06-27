import { attributes, react as HomeContent } from "../content/home.md";
import { CtaLink } from "../ui/button/CtaLink";
import ExportedImage from "next-image-export-optimizer";
import testPictureStatic from "../public/static/test.png";

export default function Home() {
  let { title, cats } = attributes as any;
  return (
    <article>
      <div>
        <h1>A watchful eye in the digital world</h1>
        <p className="opener">
          We aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the people
          who can fix them.
        </p>
        <CtaLink href={"/who-we-are"}>Who we are</CtaLink>
        <ExportedImage src={testPictureStatic} alt="Static Image" width={500} height={500} />
      </div>

      <HomeContent />
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
