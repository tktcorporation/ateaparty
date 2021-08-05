import React from "react";
import { Box, Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const News: React.FC = () => {
  return (
    <Section.Container id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 5]} mt={2}>
          <Fade direction="down" triggerOnce>
            <TwitterTweetEmbed tweetId={"1422834615576711168"} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};
