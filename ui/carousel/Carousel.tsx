"use client";

import * as React from "react";
import styles from "./carousel.module.scss";
import { IconButton } from "../button/IconButton";
import { IconChevronLeft, IconChevronRight } from "../icons";

export interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [page, setPage] = React.useState(1);
  const ref = React.useRef<HTMLDivElement>(null);
  let count = React.Children.count(children);

  React.useEffect(() => {
    if (ref.current) {
      let el: HTMLElement = ref.current.querySelector(`:nth-child(${page - 1})`);
      if (el) {
        let left = el.offsetLeft;
        ref.current.scrollTo({ left, behavior: "smooth" });
      } else {
        console.log("No element found");
      }
    }
  }, [page, count]);

  const nextPage = () => {
    if (page < count) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(count);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slides} ref={ref}>
        {children}
      </div>
      <div className={styles.pages}>
        <IconButton onClick={prevPage} icon={<IconChevronLeft />} isRound isInverse />
        <IconButton onClick={nextPage} icon={<IconChevronRight />} isRound isInverse />
        <div>
          {page} / {count}
        </div>
      </div>
    </div>
  );
}
