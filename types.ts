export type Lang = "en" | "nl";

export type MarkdownImport<T> = {
  attributes: T;
  react: React.FC;
  slug: string;
};

export type MarkdownPage<T> = {
  en: T;
  nl: Partial<T>;
};

export type ArticleAttributes = {
  title: string;
  date: string;
  author: string;
};

export type CaseAttributes = {
  title: string;
  caseid: string;
  date: string;
  closed: boolean;
  link: string;
  caselead: string;
  image?: string;
  researchers: any;
};

export type PeopleAttributes = {
  name: string;
  image: string;
  role: string;
  bio: string;
  links: any;
  articles: string[];
  cases: string[];
};

export type FaqAttributes = {
  faqgroups: {
    heading: string;
    faqs: {
      title: string;
      description: string;
    }[];
  }[];
};

export type OptionItem = {
  label: string;
  value: string | number;
};
