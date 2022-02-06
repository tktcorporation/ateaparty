import React from "react";
import { Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Triangle from "../components/Triangle";
import { TwitterRepository, Tweet } from "../../repository/twitterRepository";
import { usePromise } from "react-use";
import { useState, useEffect } from "react";

interface TweetBoxProps {
  tweets: Tweet[]
}
const TweetsBox = ({ tweets }: TweetBoxProps) => {
  const tweetsBox = tweets.map((tweet) => (
    <Fade direction="right" triggerOnce key={tweet.tweetId}>
      <TwitterTweetEmbed tweetId={tweet.tweetId} />
    </Fade>
  ));
  return (
    <Flex>
      { tweetsBox }
    </Flex>
  );
};

export const News: React.FC = () => {
  const mounted = usePromise();
  const [value, setValue] = useState<Tweet[]>([]);
  useEffect(() => {
    (async () => {
      const value = await mounted(new TwitterRepository().getAll());
      setValue(value);
    })();
  }, []);
  return (
    <Section.Container Background={Background} id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <TweetsBox tweets={value} />
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
