import React, { Suspense } from "react";
import { Box, Flex } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import Triangle from "../components/Triangle";
import StyledReactMarkdown from "../components/MarkdownRenderer";

const vision = `## 演奏者に表現の場を
## 演奏者に交流の場を
## Questの世界に良き音楽を
`;

const purpose = `「題名のないお茶会」は [VRChat](https://hello.vrchat.com/) というVR空間内で活動する、演奏愛好家の集いです。

新しい世界で音楽の輪を広げることを目的に活動しています。
`;

import { TwitterTweetEmbed } from "react-twitter-embed";
import { TwitterRepository } from "../../repository/TwitterRepository";
const ACCOUNT_NAME = "ochakai_vrc";

const wrapPromise = <T,>(
  promise: Promise<T>
): {
  read(): T;
} => {
  let status = "pending";
  let result: T;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read: () => {
      console.log(status);
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
      throw new Error("Unexpected status");
    },
  };
};

const useTweetData = (accountName: string) => {
  const repository = new TwitterRepository();
  return wrapPromise(repository.getPinnedTweetId(accountName));
};

// const resource = useTweetData(ACCOUNT_NAME);

const About: React.FC = () => {
  // const pinnedTweetID = resource.read();
  return (
    <Section.Container Background={Background} id={SECTION.about}>
      <Section.Header name={"「題名のないお茶会」"} icon="" label="title" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 4]} mt={2}>
          <StyledReactMarkdown className={"mb-5"}>{vision}</StyledReactMarkdown>
          <StyledReactMarkdown>{purpose}</StyledReactMarkdown>
        </Box>
        <Box
          width={[1, 1, 2 / 5]}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {/* <TwitterTweetEmbed tweetId={pinnedTweetID} />; */}
          </Suspense>
        </Box>
      </Flex>
    </Section.Container>
  );
};

export default About;

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["35vh", "40vh"]}
      width={["95vw", "60vw"]}
      position="bottom-left"
    />
  </>
);
