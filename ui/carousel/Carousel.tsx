import * as React from "react";
import "./carousel.scss";
import { IconButton } from "../button/IconButton";
import { IconChevronLeft, IconChevronRight } from "../icons";

export interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  //import carousel script here

  return (
    <div className="carousel">
      <div className="slides">{children}</div>
      <div className="pages">
        <IconButton icon={<IconChevronLeft />} isRound isInverse />
        <IconButton icon={<IconChevronRight />} isRound isInverse />
        <div className="page-count">1 / {React.Children.count(children)}</div>
      </div>
    </div>
  );
}
