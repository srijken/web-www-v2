import * as React from "react";
import "./carousel.scss";
//import { IconButton } from "../button/IconButton";
//import { IconChevronLeft, IconChevronRight } from "../icons";
import { CarouselController } from "./CarouselController";

export interface CarouselProps {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  //import carousel script here

  return (
    <div className="carousel">
      <div className="slides">{children}</div>
      <div className="pages">
        <CarouselController count={React.Children.count(children)} />
      </div>
    </div>
  );
}
