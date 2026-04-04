import React from "react";
import { Box } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import Triangle from "../components/Triangle";
import StyledReactMarkdown from "../components/MarkdownRenderer";
import { Tweet } from "react-tweet";

const teapartySunday = `# 毎週 日曜日のお茶会
毎週日曜日の14時30分からお茶会を開催しています。

お茶菓子を片手に、いっしょに音楽を楽しみましょう。

演奏したい方も、演奏を聴きたい方も、どちらも歓迎です。
`;

export const Event: React.FC = () => {
  return (
    <Section.Container Background={Background} id={SECTION.event}>
      <Section.Header name={"何をやってるの？"} icon="👀" label="person" />
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 5]} mt={2}>
          <StyledReactMarkdown>{teapartySunday}</StyledReactMarkdown>
        </Box>

        <Box
          width={[1, 1, 2 / 5]}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Tweet id="1673654071885017091" />
        </Box>
      </div>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-left"
    />
  </>
);
