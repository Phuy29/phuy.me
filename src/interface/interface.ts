export interface navLink {
  title: string;
  href: string;
}

export interface info {
  title: string;
  content: string;
}

type languageType = {
  name: string;
  icon: string;
};

export interface projectType {
  id: number;
  img: string;
  link: string;
  title: string;
  languages: languageType[];
  description: string;
}

export interface contactType {
  id: number;
  logo: string;
  link: string;
}
