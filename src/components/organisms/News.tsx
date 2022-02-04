import React from "react";
import { Box, Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Triangle from "../components/Triangle";
import { TwitterRepository } from "../../repository/twitterRepository";
import {usePromise} from "react-use";
import {useState, useEffect, createElement} from "react";

export const News: React.FC = () => {
  const twitterBoxes = async () => {
    const tweets = await new TwitterRepository().getAll();
    return tweets.slice(0).map((tweet) => (
      <Fade direction="right" triggerOnce key={tweet.tweetId}>
        <TwitterTweetEmbed tweetId={tweet.tweetId} />
      </Fade>
    ));
  };
  const mounted = usePromise();
  const [value, setValue] = useState<JSX.Element[]>([]);
  useEffect(() => {
    (async () => {
      const value = await mounted(twitterBoxes());
      setValue(value);
    })();
  }, []);
  return (
    <Section.Container Background={Background} id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        {value}
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
