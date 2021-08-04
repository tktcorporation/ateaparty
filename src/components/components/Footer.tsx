import React from "react";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import SocialLink from "./SocialLink";
import { TITLE } from "../utils/constants";
import { SocialLink as SocialLinkTypes } from "../../types";

const Footer: React.FC = () => {
  const { name, socialLinks } = {
    name: TITLE,
    socialLinks: [
      {
        name: "Twitter",
        url: "https://twitter.com/ochakai_vrc",
        icon: "twitter",
      },
    ] as Array<SocialLinkTypes & { invert: boolean }>,
  };

  return (
    <Box p={[2, 3]} backgroundColor="primary" id="footer" as="footer">
      <FooterContainer>
        <Fade direction="left" triggerOnce>
          <Text fontSize={[2, 3]} color="background">
            <span>{`${name}`}</span>
          </Text>
        </Fade>
        <Flex>
          <Fade direction="right" triggerOnce cascade damping={0.5}>
            {socialLinks.map((sl) => (
              <Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
                <SocialLink {...sl} invert />
              </Box>
            ))}
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  );
};

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

export default Footer;
