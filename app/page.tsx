import { attributes, react as HomeContent } from "../content/home.md";
import { CtaLink } from "../ui/button/CtaLink";
import { Opener } from "../ui/opener/Opener";
import { ColorShift } from "../ui/section/ColorShift";

export default function Home() {
  let { title, cats } = attributes as any;
  return (
    <div>
      <Opener imgSrc="/static/test.png" imgAlt="Test">
        <h1>A watchful eye in the digital world</h1>
        <p className="opener">
          We aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the people
          who can fix them.
        </p>
        <CtaLink href={"/who-we-are"}>Who we are</CtaLink>
      </Opener>
      <ColorShift overlap={64}>
        <div style={{ width: 100, height: 100, backgroundColor: "red" }}>bla</div>
        <h2>Our mission</h2>
        <p>bla bla </p>
        <p>bla bla </p>
        <p>bla bla </p>
      </ColorShift>

      <HomeContent />
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
