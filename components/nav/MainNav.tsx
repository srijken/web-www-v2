import * as React from "react";
import styles from "./nav.module.scss";
import { Logo } from "./Logo";
import { MainNavItem } from "../../ui/nav/MainNavItem";
import { Button } from "../../ui/button/Button";
import { IconSearch, IconEmail } from "../../ui/icons";

import { SubNav } from "./SubNav";

export interface MainNavProps {}

export function MainNav({}: MainNavProps) {
  const [subNavOpen, setSubNavOpen] = React.useState(false);

  const toggle = () => {
    setSubNavOpen((b) => !b);
  };
  return (
    <>
      <nav className={styles.main}>
        <article>
          <section>
            <Logo className={styles.logo} />
          </section>
          <section>
            <MainNavItem href="/about" onClick={toggle} isActive={true}>
              About DIVD
            </MainNavItem>

            <MainNavItem href="/community" onClick={toggle} isActive={true}>
              DIVD Community
            </MainNavItem>

            <MainNavItem href="/security" onClick={toggle} isActive={true}>
              Security
            </MainNavItem>
          </section>
          <section>
            <Button size="md" isInverse leftIcon={<IconSearch />}>
              Search
            </Button>

            <Button size="md" isSecondary leftIcon={<IconEmail />}>
              Warning Email
            </Button>
          </section>
        </article>
      </nav>
      <SubNav isOpen={subNavOpen} />
    </>
  );
}
