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
      ref.current.style.transform = `translateX(-${(page - 1) * 35}%)`;
    }
  }, [page, count]);

  const nextPage = () => {
    setPage((old) => page + 1);
  };

  const prevPage = () => {
    setPage((old) => page - 1);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.outer}>
        <div className={styles.inner} ref={ref}>
          {children}
        </div>
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
