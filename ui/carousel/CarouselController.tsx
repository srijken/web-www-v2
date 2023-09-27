"use client";

import * as React from "react";
import { IconButton } from "ui/button/IconButton";
import { IconChevronLeft, IconChevronRight } from "ui/icons";

export interface CarouselControllerProps {
  count: number;
}

export function CarouselController({ count }: CarouselControllerProps) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("click", () => {
        console.log("CLICKED;");
      });
    }
  }, [ref]);

  return (
    <>
      <button ref={ref}>A</button>
      <IconButton icon={<IconChevronLeft />} isRound isInverse />
      <IconButton icon={<IconChevronRight />} isRound isInverse />
      <div className="page-count">1 / {count}</div>
    </>
  );
}
