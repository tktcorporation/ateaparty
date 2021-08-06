import React from "react";
import { Box, Image, Flex } from "rebass/styled-components";
import ReactMarkdown from "react-markdown";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
// import Triangle from '../components/Triangle';
import markdownRenderer from "../components/MarkdownRenderer";
import { BASE_URL, SECTION, TITLE } from "../utils/constants";
import { Logo } from "../../domain/Logo";
import Triangle from "../components/Triangle";

const teapartySunday = `# 毎週 日曜日のお茶会
毎週日曜日の14時30分からお茶会を開催しています。

お茶菓子を片手に、いっしょに音楽を楽しみましょう。

演奏したい方も、演奏を聴きたい方も、どちらも歓迎です。
`;

const miniConcert = `# ミニコンサート
偶数月の第3日曜日、14時30分からは、コンサートの時間です。

毎週のお茶会よりも少しかしこまった形で、音楽に耳を傾けられる場所。

参加者も随時募集しています。
`;

const profile = {
  alt: TITLE,
  src: new Logo(BASE_URL).symbolUrl({ isPath: true, ext: "svg" }),
};

export const Event: React.FC = () => {
  return (
    <Section.Container Background={Background} id={SECTION.event}>
      <Section.Header name={"何をやってるの？"} icon="👀" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 5]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown
              source={teapartySunday}
              renderers={markdownRenderer}
            />
          </Fade>
        </Box>

        <Box width={[1, 1, 3 / 5]} px={[2, 3, 5]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={miniConcert} renderers={markdownRenderer} />
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 5]}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Fade direction="right" triggerOnce>
            <Image
              mt={[4, 4, 0]}
              ml={[0, 0, 1]}
              src={profile.src}
              alt={profile.alt}
            />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      position="top-right"
    />
    <Triangle
      color="secondary"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-left"
    />
  </>
);
