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

export type HomeAttributes = {
  title: string;
  intro: string;
  fold: {
    showcase: string;
    received: string;
    family: string;
  };
  whatwedo: {
    title: string;
    description: string;
    t1: string;
    t2: string;
    t3: string;
  };
  ourproudestwork: string[];
  ourmission: {
    title: string;
    description: string;
    members: string;
    totalcases: string;
    ips: string;
  };
  helpushelpyou: {
    title: string;
    description: string;
  };
  volunteer: {
    title: string;
    checklist: {
      item: string;
    }[];
  };
  partners: {
    description: string;
  };
};

export type OptionItem = {
  label: string;
  value: string | number;
};
