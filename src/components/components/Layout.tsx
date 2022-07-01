import React, { FC } from "react";
import { Theme } from "@rebass/preset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Helmet from "./Helmet";
import "tippy.js/dist/tippy.css";
import type { NextPage } from "next";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    buttons: unknown;
  }
}

const GlobalStyle: any = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: ${(props) => props.theme.fonts.body};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

type Props = {
  children: React.ReactNode;
};

const T: any = ThemeProvider;
const Layout = ({ children }: Props) => {
  return (
    <div>
      <T theme={theme as Theme}>
        <GlobalStyle />
        <Helmet />
        {children}
      </T>
    </div>
  );
};

export default Layout;
