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
  tag: "case" | "news" | "updates" | "culture";
  intro: string;
  image?: string;
  author?: string;
  case?: {
    caseid: string;
    closed: boolean;
    link: string;
    caselead: string;
    researchers: string[];
  };
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
  title: string;
  intro: string;
  faqgroups: {
    heading: string;
    faqs: {
      title: string;
      description: string;
    }[];
  }[];
};

export type PartnerAttributes = {
  title: string;
  intro: string;
  partnerstitle: string;
  partnersintro: string;
  partnerquote: {
    name: string;
    role: string;
    website: string;
    quote: string;
    image: string;
  };
  partnerlist: PartnerItem[];
};

export type PartnerItem = {
  name: string;
  description: string;
  website: string;
  image: string;
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

export type TestimonialAttributes = {
  title: string;
  testimonials: {
    name: string;
    role: string;
    quote: string;
    image: string;
  }[];
};

export type ProudestworkAttributes = {
  title: string;
  ourproudestwork: string[];
};

export type MissionAttributes = {
  title: string;
  description: string;
  members: string;
  totalcases: string;
  ips: string;
};

export type VolunteersAttributes = {
  title: string;
  intro: string;
  corevaluestitle: string;
  corevalues: {
    title: string;
    description: string;
  }[];
};

export type ContactAttributes = {
  title: string;
  intro: string;
  form: {
    title: string;
    description: string;
  };
};

export type NewsroomAttributes = {
  title: string;
  intro: string;
  newsletter: string;
  opener: {
    title: string;
    description: string;
  };
  highlight: string;
};

export type ContributeAttributes = {
  title: string;
  intro: string;
  becomevolunteer: {
    title: string;
    description: string;
  };
  becomepartner: {
    title: string;
    description: string;
  };
  appreciate: {
    title: string;
    description: string;
  };
  donatesupp: {
    title: string;
    description: string;
    links: {
      label: string;
      link: string;
    }[];
    customlink: string;
  };
  donatepaypal: {
    label: string;
    link: string;
  };
  donatebanktransfer: {
    label: string;
    link: string;
  };
};

export type WhatwedoAttributes = {
  title: string;
  intro: string;
  whatwedocontent: {
    title: string;
    description: string;
  };
  scouting: {
    title: string;
    description: string;
  };
  assessing: {
    title: string;
    description: string;
  };
  reporting: {
    title: string;
    description: string;
  };
};

export type EthicsAttributes = {
  title: string;
  intro: string;
};

export type OptionItem = {
  label: string;
  value: string | number;
};
