import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import { NextPageWithLayout } from "./_app";
import { MainLayout } from "../ui/layout/MainLayout";
import { Button } from "../ui/button/Button";
const HomePage: NextPageWithLayout = () => {
  let { title, cats } = attributes as any;
  return (
    <article>
      <h1>{title}</h1>
      <Button>Click me</Button>
      <HomeContent />
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
