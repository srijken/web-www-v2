import ExportedImage from "next-image-export-optimizer";
import { CtaLink } from "../ui/button/CtaLink";
import { Card } from "../ui/card/Card";
import { CardPerson } from "../ui/card/CardPerson";
import { Carousel } from "../ui/carousel/Carousel";
import { Opener } from "../ui/opener/Opener";
import { SubOpener } from "../ui/opener/SubOpener";
import { PageLayout } from "../ui/page/PageLayout";
import { PageSection } from "../ui/page/PageSection";
import { Stats, StatsItem } from "../ui/stats/Stats";

export default function Home() {
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
      <PageSection type="inverse" overlap="top">
        <PageLayout columns={3}>
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
        </PageLayout>
        <PageLayout layout="left" extend>
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
        </PageLayout>
      </PageSection>

      <PageSection type="gradient">
        <PageLayout columns={3}>
          <h2>Our proudest work</h2>
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
        </PageLayout>
      </PageSection>

      <PageSection type="inverse" overlap="bottom" round={["topright"]}>
        <PageLayout>
          <SubOpener>
            <h2>Our Mission</h2>
            <p>
              We aim to make the digital world safer by reporting vulnerabilities we find in digital systems to the
              people who can fix them. We have a global reach, but do it Dutch style: open, honest, collaborative and
              for free.
            </p>
          </SubOpener>
        </PageLayout>
        <PageLayout>
          <Stats>
            <StatsItem>
              <h2>100+</h2>
              <h6>members</h6>
            </StatsItem>
            <StatsItem>
              <h2>86</h2>
              <h6>total cases</h6>
            </StatsItem>
            <StatsItem>
              <h2>356.781</h2>
              <h6>vulnerable ip's notified</h6>
            </StatsItem>
          </Stats>
        </PageLayout>
      </PageSection>

      <PageSection>
        <PageLayout extend>
          <h2>Testemonials</h2>
          <Carousel>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
            <CardPerson name="John Doe" title="CEO" imgSrc="/static/deckard.webp">
              <p>Lorem ipsum</p>
            </CardPerson>
          </Carousel>
        </PageLayout>
        <PageLayout columns={2}>
          <div>
            <h2>Help us, help you!</h2>
            <p>
              Make our work easier by putting our security.txt in the code of your website and our IP 194.5.73.0-255 on
              your allow list. This way you make sure that our research team can look for vulnerabilities without
              alarming your cyber security systems. And we know who to talk to when we find vulnerabilities.
            </p>
            <p>&nbsp;</p>
            <CtaLink href="/temp">Download Security.txt</CtaLink>
            <p>&nbsp;</p>
          </div>
          <div style={{ position: "relative" }}>
            <ExportedImage
              src="/static/csirt_team.png"
              alt="Security.txt"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </PageLayout>
      </PageSection>

      <PageSection type="primary" round={["topleft"]}>
        <PageLayout>
          <h2>Want to become a volunteer?</h2>
        </PageLayout>
      </PageSection>

      <PageSection type="inverse" round={["bottomright"]}>
        <PageLayout>
          <h2>Our partners</h2>
        </PageLayout>
      </PageSection>

      <PageSection type="gradient-reverse">
        <PageLayout>
          <h2>Frequently asked questions</h2>
        </PageLayout>
      </PageSection>
    </div>
  );
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
