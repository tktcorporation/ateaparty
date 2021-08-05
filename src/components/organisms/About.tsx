import React from "react";
import { Box, Flex } from "rebass/styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import markdownRenderer from "../components/MarkdownRenderer";
import { SECTION } from "../utils/constants";
import { Twemb } from "../molecules/TwitterWidget";

const vision = `## 演奏者に表現の場を
## 演奏者に交流の場を
## Questの世界に良き音楽を
`;

const purpose = `「題名のないお茶会」は [VRChat](https://vrchat.com/) というVR空間内で活動する音楽団体です。

新しい世界で音楽の輪を広げることを目的に活動しています。
`;

const About: React.FC = () => {
  return (
    <Section.Container id={SECTION.about}>
      <Section.Header name={"「題名のないお茶会」"} icon="" label="title" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={vision} renderers={markdownRenderer} />
          </Fade>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={purpose} renderers={markdownRenderer} />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 5]}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Fade direction="right" triggerOnce>
            <Twemb twitterHref={"https://twitter.com/ochakai_vrc"}></Twemb>
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default About;
