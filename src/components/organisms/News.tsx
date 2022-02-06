import React from "react";
import { Box, Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Triangle from "../components/Triangle";

export const News: React.FC = () => {
  return (
    <Section.Container Background={Background} id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 1 / 2]} px={[2, 3, 5]} mt={2}>
          <Fade direction="right" triggerOnce>
            <TwitterTweetEmbed tweetId={"1423580916098551811"} />
          </Fade>
        </Box>
        <Box width={[1, 1, 1 / 2]} px={[2, 3, 5]} mt={2}>
          <Fade direction="right" triggerOnce>
            <TwitterTweetEmbed tweetId={"1422834615576711168"} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);
