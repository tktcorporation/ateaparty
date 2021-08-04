import React from "react";
import { Box, Image, Flex } from "rebass/styled-components";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
// import Triangle from '../components/Triangle';
import markdownRenderer from "../components/MarkdownRenderer";
import { BASE_URL, SECTION, TITLE } from "../utils/constants";
import { Logo } from "../../domain/Logo";

const vision = `## 演奏者に表現の場を
## 演奏者に交流の場を
## Questの世界に良き音楽を
`;

const profile = {
  alt: TITLE,
  src: new Logo(BASE_URL).symbolUrl({isPath: true, ext: 'svg'}),
}

const About = () => {
  return (
    <Section.Container id={SECTION.about}>
      <Section.Header
        name={"「題名のないお茶会」とは"}
        icon="👀"
        label="person"
      />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={vision} renderers={markdownRenderer} />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Fade direction="right" triggerOnce>
            <Image mt={[4, 4, 0]} ml={[0, 0, 1]} src={profile.src} alt={profile.alt} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;
  &:hover {
    border-radius: 20%;
  }
`;

export default About;
