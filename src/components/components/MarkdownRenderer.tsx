import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${({ theme }) => theme.colors.text};
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
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.background};

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

type LinkProps = {
  href: string;
  children: ReactNode;
};

const MarkdownLink = ({ href, children }: LinkProps): JSX.Element => {
  const isInnerLink = href.startsWith("#");

  return isInnerLink ? (
    <StyledLink href={href}>{children}</StyledLink>
  ) : (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};
const components: Parameters<typeof ReactMarkdown>[0]["components"] = ({
    a: ({ href, children, ...props}) => {
      const isInnerLink = href?.startsWith("#");
    
      return isInnerLink ? (
        <StyledLink href={href} {...props}>{children}</StyledLink>
      ) : (
        <StyledLink href={href} target="_blank" rel="noreferrer" {...props}>
          {children}
        </StyledLink>
      );
    },
})
const StyledReactMarkdown = ({ children }: { children: string }) => (
  <ReactMarkdown children={children} components={components} />
)
export default StyledReactMarkdown
