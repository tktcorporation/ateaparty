import React, { Suspense } from "react";
import { Flex, Box } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Triangle from "../components/Triangle";
import {
  TwitterGoogleDocsRepository,
  Tweet,
} from "../../repository/TwitterGoogleDocsRepository";
import { createResource } from "../utils/helpers";
import { Spinner } from "../components/Spinner";

const resource = createResource(new TwitterGoogleDocsRepository().getAll());
const SuspendedTweets = (): JSX.Element => {
  const tweets = resource.read();
  return (
    <>
      {tweets.map((tweet: Tweet) => (
        <Box
          width={[1, 1, 1 / tweets.length]}
          px={[2, 3, 5]}
          mt={2}
          key={tweet.tweetId}
        >
          <TwitterTweetEmbed tweetId={tweet.tweetId} />
        </Box>
      ))}
    </>
  );
};

export const News: React.FC = () => {
  return (
    <Section.Container Background={Background} id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Suspense fallback={Spinner()}>
          <SuspendedTweets />
        </Suspense>
      </div>
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
