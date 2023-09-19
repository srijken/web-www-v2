import * as React from "react";
import "./carousel.scss";

export interface CarouselSmallProps {
  children: React.ReactNode;
}

export function CarouselSmall({ children }: CarouselSmallProps) {
  return (
    <div className="smallousel">
      <div className="smallouselnav">L</div>
      <div className="smallouselcontent">{children}</div>
      <div className="smallouselnav">R</div>
    </div>
  );
}
