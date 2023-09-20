import * as React from "react";
import cx from "classnames";

import { IconExternalLink } from "../../ui/icons";
//import { Toggle } from "../../ui/toggle";
import { Lang } from "types";
import Link from "next/link";
//import { usePathname, useRouter } from "next/navigation";

export interface SubNavProps {
  lang: Lang;
}

export function SubNav({ lang }: SubNavProps) {
  // const p = usePathname();
  // const router = useRouter();

  // const switchLanguage = (l: Lang) => {
  //   if (l !== lang) {
  //     if (!p.startsWith("/nl") && !p.startsWith("/en")) {
  //       router.push(`/${l}${p}`);
  //       return;
  //     }
  //     let base = p.substring(3);
  //     router.push(`/${l}${base}`);
  //   }
  // };

  return (
    <nav
      id="divd-sub-nav"
      className={cx({
        sub: true,
        active: false
      })}
    >
      <article>
        <section>
          <div>
            <h3>About DIVD</h3>

            <ul>
              <li>
                <a href={`/${lang}/whoweare`}>Who we are</a>
              </li>
              <li>
                <a href={`/${lang}/whatwedo`}>What we do</a>
              </li>
              <li>
                <a href={`/${lang}/team`}>The team</a>
              </li>
              <li>
                <a href={`/${lang}/contact`}>Contact</a>
              </li>
              <li>
                <Link href={`/${lang}/faq`}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>DIVD Community</h3>
            <ul>
              <li>
                <a href={`/${lang}/contribute`}>Contribute</a>
              </li>
              <li>
                <a href={`/${lang}/volunteer`}>Become a volunteer</a>
              </li>
              <li>
                <a href={`/${lang}/parnters`}>Become a partner</a>
              </li>
              <li>
                <a href={`/${lang}/contribute`}>Donate</a>
              </li>
              <li>
                <a href={`/${lang}/newsroom`}>Newsroom</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Security</h3>
            <ul>
              <li>
                <a href="#whoweare">Code of conduct</a>
              </li>
              <li>
                <a href="#whatwedo">Security policy</a>
              </li>
              <li>
                <a href="#whoweare">ANBI</a>
              </li>
              <li>
                <a href="#whatwedo">
                  CSIRT <IconExternalLink />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          {/* <Toggle
            label="Language"
            value={lang}
            onChange={(v) => switchLanguage(v as Lang)}
            items={[
              { label: "English", value: "en" },
              { label: "Dutch", value: "nl" }
            ]}
          /> */}
          {/* <Toggle
            dir="vertical"
            label="Screenmode"
            value="Lightmode"
            onChange={(v) => console.log(v)}
            items={["Lightmode", "Darkmode", "Terminal"]}
          /> */}
        </section>
      </article>
    </nav>
  );
}
