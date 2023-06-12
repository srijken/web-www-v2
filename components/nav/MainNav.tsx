import * as React from "react";
import styles from "./mainnav.module.scss";
import { Logo } from "./Logo";
import { MainNavItem } from "../../ui/nav/MainNavItem";
import { Button } from "../../ui/button/Button";
import { IconSearch, IconEmail } from "../../ui/icons";

export interface MainNavProps {}

export function MainNav({}: MainNavProps) {
  return (
    <nav className={styles.main}>
      <Logo className={styles.logo} />

      <MainNavItem
        href="/about"
        onClick={() => {
          console.log("click");
        }}
        isActive={true}
      >
        About DIVD
      </MainNavItem>

      <MainNavItem
        href="/community"
        onClick={() => {
          console.log("click");
        }}
        isActive={true}
      >
        DIVD Community
      </MainNavItem>

      <MainNavItem
        href="/security"
        onClick={() => {
          console.log("click");
        }}
        isActive={true}
      >
        Security
      </MainNavItem>

      <Button size="md" isInverse leftIcon={<IconSearch />}>
        Search
      </Button>

      <Button size="md" isSecondary leftIcon={<IconEmail />}>
        Warning Email
      </Button>
    </nav>
  );
}
