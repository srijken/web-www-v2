import { attributes, react as HomeContent } from "../content/home.md";
import { CtaLink } from "../ui/button/CtaLink";
import { Card } from "../ui/card/Card";
import { Carousel } from "../ui/carousel/Carousel";
import { Opener } from "../ui/opener/Opener";
import { PageSection } from "../ui/page/PageSection";
import { SideIntro } from "../ui/page/SideIntro";

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
            <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
              <h2>A race between Russion criminals and Dutch hackers.</h2>
              <CtaLink href="/temp">Read more</CtaLink>
            </Card>
          </div>
        </div>
        <div className="layout-left">
          <SideIntro>
            <div className="reverse">
              <h2>What we do</h2>
              <p>
                We aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the
                people who can fix them.
              </p>
              <CtaLink href="/temp" isSecondary>
                Learn more
              </CtaLink>
            </div>
            <div>
              <Carousel>
                <Card imgSrc="/static/test.png" imgAlt="Test">
                  <h2>A race between Russion criminals and Dutch hackers.</h2>
                  <CtaLink href="/temp">Read more</CtaLink>
                </Card>
                <Card imgSrc="/static/test.png" imgAlt="Test">
                  <h2>A race between Russion criminals and Dutch hackers.</h2>
                  <CtaLink href="/temp">Read more</CtaLink>
                </Card>
                <Card imgSrc="/static/divd_family.png" imgAlt="Test" cta fit="contain">
                  <h2>A race between Russion criminals and Dutch hackers.</h2>
                  <CtaLink href="/temp">Read more</CtaLink>
                </Card>
              </Carousel>
            </div>
          </SideIntro>
        </div>
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
