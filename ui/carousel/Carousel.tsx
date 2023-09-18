import * as React from "react";
import styles from "./carousel.module.scss";
import { IconButton } from "../button/IconButton";
import { IconChevronLeft, IconChevronRight } from "../icons";

export interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  //import carousel script here

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>{children}</div>
      <div className={styles.pages}>
        <IconButton icon={<IconChevronLeft />} isRound isInverse />
        <IconButton icon={<IconChevronRight />} isRound isInverse />
        <div>1 / 4</div>
      </div>
    </div>
  );
}
