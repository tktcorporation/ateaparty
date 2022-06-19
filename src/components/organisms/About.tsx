import React, { useEffect, useState } from "react";
import { Box, Flex } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import Triangle from "../components/Triangle";
import { TwitterTweetEmbed } from "react-twitter-embed";
import StyledReactMarkdown from "../components/MarkdownRenderer";
import { TwitterRepository } from "../../repository/TwitterRepository";
import { usePromise } from "react-use";

const vision = `## 演奏者に表現の場を
## 演奏者に交流の場を
## Questの世界に良き音楽を
`;

const purpose = `「題名のないお茶会」は [VRChat](https://hello.vrchat.com/) というVR空間内で活動する、演奏愛好家の集いです。

新しい世界で音楽の輪を広げることを目的に活動しています。
`;

const About: React.FC = () => {
  const repository = new TwitterRepository();
  const mounted = usePromise();
  const [pinnedTweetID, setValue] = useState<string | undefined>();
  useEffect(() => {
    (async () => {
      const id = await mounted(repository.getPinnedTweetId("ochakai_vrc"));
      setValue(id);
    })();
  }, []);
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
          {pinnedTweetID && <TwitterTweetEmbed tweetId={pinnedTweetID} />}
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
