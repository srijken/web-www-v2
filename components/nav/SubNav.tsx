import * as React from "react";
import classnames from "classnames/bind";
import styles from "./nav.module.scss";
import { IconExternalLink } from "../../ui/icons";
import { Toggle } from "../../ui/toggle";
const cx = classnames.bind(styles);

export interface SubNavProps {
  isOpen: boolean;
}

export function SubNav({ isOpen }: SubNavProps) {
  return (
    <nav
      className={cx({
        sub: true,
        active: isOpen
      })}
    >
      <article>
        <section>
          <div>
            <h3>About DIVD</h3>

            <ul>
              <li>
                <a href="#whoweare">Who we are</a>
              </li>
              <li>
                <a href="#whatwedo">What we do</a>
              </li>
              <li>
                <a href="#theteam">The team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>DIVD Community</h3>
            <ul>
              <li>
                <a href="#whoweare">Contribute</a>
              </li>
              <li>
                <a href="#whatwedo">Become a volunteer</a>
              </li>
              <li>
                <a href="#whoweare">Become a partner</a>
              </li>
              <li>
                <a href="#whatwedo">Donate</a>
              </li>
              <li>
                <a href="#whatwedo">Newsroom</a>
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
          <h3>Language</h3>
          <p>switch</p>

          <Toggle label="Language" value="Dutch" onChange={(v) => console.log(v)} items={["English", "Dutch"]} />
          <Toggle
            dir="vertical"
            label="Screenmode"
            value="Lightmode"
            onChange={(v) => console.log(v)}
            items={["Lightmode", "Darkmode", "Terminal"]}
          />
          <h3>Screenmode</h3>
          <p>switch</p>
        </section>
      </article>
    </nav>
  );
}
