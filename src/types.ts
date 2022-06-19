import { DefaultTheme } from "styled-components";
import { Theme as RebassTheme } from "@rebass/preset";

export type Theme = DefaultTheme & RebassTheme;

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Project = {
  name: string;
  description: string;
  homepage: string;
  repository: string;
  type: string;
  publishedDate: string;
  logo: Image;
};

export type AboutMe = {
  markdown: string;
  profile: Image;
};

export type MediumPost = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
};

export type MediumAuthor = {
  id: string;
  name: string;
  username: string;
};
