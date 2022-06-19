import React from "react";
import { Flex, Box } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Triangle from "../components/Triangle";
import {
  TwitterGoogleDocsRepository,
  Tweet,
} from "../../repository/TwitterGoogleDocsRepository";
import { usePromise } from "react-use";
import { useState, useEffect } from "react";

export const News: React.FC = () => {
  const mounted = usePromise();
  const [tweets, setValue] = useState<Tweet[]>([]);
  useEffect(() => {
    (async () => {
      const tweets = await mounted(new TwitterGoogleDocsRepository().getAll());
      setValue(tweets);
    })();
  }, []);
  return (
    <Section.Container Background={Background} id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        {tweets.map((tweet) => (
          <Box width={[1, 1, 1 / 2]} px={[2, 3, 5]} mt={2} key={tweet.tweetId}>
            <TwitterTweetEmbed tweetId={tweet.tweetId} />
          </Box>
        ))}
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
      position="bottom-left"
    />
  </>
);
