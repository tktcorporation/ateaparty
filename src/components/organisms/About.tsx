import React from "react";
import { Box, Image, Flex } from "rebass/styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
// import Triangle from '../components/Triangle';
import markdownRenderer from "../components/MarkdownRenderer";
import { BASE_URL, SECTION, TITLE } from "../utils/constants";
import { Logo } from "../../domain/Logo";
import {Twemb} from "../molecules/TwitterWidget";

const vision = `## 演奏者に表現の場を
## 演奏者に交流の場を
## Questの世界に良き音楽を
`

const purpose = `「題名のないお茶会」は [VRChat](https://vrchat.com/) というVR空間内で活動する音楽団体です。

新しい世界で音楽の輪を広げることを目的に活動しています。
`;

const About: React.FC = () => {
  return (
    <Section.Container id={SECTION.about}>
      <Section.Header
        name={"「題名のないお茶会」"}
        icon=""
        label="title"
      />
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
            {/* <Image
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              src={profile.src}
              alt={profile.alt}
            /> */}
            <Twemb twitterHref={'https://twitter.com/ochakai_vrc'}></Twemb>
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

// const ProfilePicture = styled(Image)`
//   border-radius: 50%;
//   transition: all 0.4s ease-out;
//   &:hover {
//     border-radius: 20%;
//   }
// `;

export default About;
