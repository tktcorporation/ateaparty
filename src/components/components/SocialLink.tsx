import React from "react";
import { Link } from "rebass/styled-components";
import Tippy from "@tippy.js/react";
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";
import { theme } from "../../theme";

type Props = {
  invert?: boolean;
  remixiconClassName: string;
  name: string;
  url: string;
};

const SocialLink = ({
  remixiconClassName,
  name,
  url,
  invert,
}: Props): JSX.Element | null => {
  return (
    <Tippy
      content={name}
      placement="bottom"
      trigger="mouseenter focus"
      arrow={false}
    >
      <IconLink
        href={url}
        target="_blank"
        invert={invert}
        rel="noreferrer"
        aria-label={name}
      >
        <i className={remixiconClassName}></i>
      </IconLink>
    </Tippy>
  );
};

const IconLink = styled(Link)<{ invert?: boolean }>`
  transition: opacity 0.4s;
  color: ${({ invert }) =>
    invert ? theme.colors.background : theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export default SocialLink;
