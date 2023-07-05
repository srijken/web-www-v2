import { attributes, react as HomeContent } from "../content/home.md";
import { CtaLink } from "../ui/button/CtaLink";
import { Card } from "../ui/card/Card";
import { Opener } from "../ui/opener/Opener";
import { PageSection } from "../ui/page/PageSection";

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
      <PageSection overlap>
        <div className="card-layout">
          <div className="content">
            <Card imgSrc="/static/test.png" imgAlt="Test">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
            <Card imgSrc="/static/test.png" imgAlt="Test">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
            <Card imgSrc="/static/test.png" imgAlt="Test">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
          </div>
        </div>

        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </PageSection>

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
