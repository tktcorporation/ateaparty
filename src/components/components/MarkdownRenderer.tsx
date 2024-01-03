import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { theme } from "../../theme";

const StyledLink = styled.a`
  display: inline-block;
  transition:
    color 250ms,
    text-shadow 250ms;
  color: ${theme.colors.text};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.secondary};
    transition: all 250ms;
  }

  &:hover {
    color: ${theme.colors.background};

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const components: Parameters<typeof ReactMarkdown>[0]["components"] = {
  a: ({ href, children, ...props }) => {
    const isInnerLink = href?.startsWith("#");

    return isInnerLink ? (
      <StyledLink href={href} {...props}>
        {children}
      </StyledLink>
    ) : (
      <StyledLink href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </StyledLink>
    );
  },
  h1: ({ children, ...props }) => (
    <h1 {...props} className={"text-xl font-bold"}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className={"text-lg font-bold"}>
      {children}
    </h2>
  ),
};
const StyledReactMarkdown = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}): JSX.Element => (
  <ReactMarkdown components={components} className={className}>
    {children}
  </ReactMarkdown>
);
export default StyledReactMarkdown;
