import * as React from "react";
import "./rootlayout.scss";
import { MainNav } from "../../components/nav/MainNav";
import { Footer } from "../../components/footer/Footer";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className="rootlayout">
      <MainNav lang={"en"} />
      {children}
      <Footer />
    </main>
  );
}
