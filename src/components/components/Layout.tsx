import React from "react";
import { Theme } from "@rebass/preset";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    buttons: unknown;
  }
}

// const GlobalStyle = createGlobalStyle`
//   *,
//   *::after,
//   *::before {
//     box-sizing: inherit;
//   }

//   html {
//     scroll-behavior: smooth;
//   }

//   body {
//     box-sizing: border-box;
//     margin: 0;
//     width: 100vw;
//     overflow-x: hidden;
//     font-family: ${theme.fonts.body};
//     background: ${theme.colors.background};
//     color: ${theme.colors.text};
//   }
// `;

type Props = {
  children: React.ReactNode;
};

// const T: any = ThemeProvider;
const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      {/* <T theme={theme as Theme}> */}
      {/* <GlobalStyle /> */}
      {/* <Helmet /> */}
      {children}
      {/* </T> */}
    </>
  );
};

export default Layout;
