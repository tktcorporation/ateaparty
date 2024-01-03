import React from "react";
import { Box, Image, Flex } from "rebass/styled-components";
import Section from "../components/Section";
// import Triangle from '../components/Triangle';
import { BASE_URL, SECTION, TITLE } from "../utils/constants";
import { Logo } from "../../domain/Logo";
import Triangle from "../components/Triangle";
import StyledReactMarkdown from "../components/MarkdownRenderer";

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
      <div className="flex flex-row justify-center items-center flex-wrap">
        <Box width={[1, 1, 3 / 5]} px={[2, 3, 5]} mt={2}>
          <StyledReactMarkdown>{teapartySunday}</StyledReactMarkdown>
        </Box>

        <Box width={[1, 1, 3 / 5]} px={[2, 3, 5]} mt={2}>
          <StyledReactMarkdown>{miniConcert}</StyledReactMarkdown>
        </Box>

        <Box
          width={[1, 1, 2 / 5]}
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Image
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
            src={profile.src}
            alt={profile.alt}
          />
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
