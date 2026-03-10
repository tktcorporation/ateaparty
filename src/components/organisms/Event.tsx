import React, { useEffect, useRef } from "react";
import { Box } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import Triangle from "../components/Triangle";
import StyledReactMarkdown from "../components/MarkdownRenderer";

const TweetEmbed: React.FC<{ tweetId: string }> = ({ tweetId }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const blockquote = document.createElement("blockquote");
    blockquote.className = "twitter-tweet";
    blockquote.setAttribute("data-lang", "ja");
    const link = document.createElement("a");
    link.href = `https://x.com/x/status/${tweetId}`;
    blockquote.appendChild(link);
    container.appendChild(blockquote);

    if (window.twttr?.widgets) {
      window.twttr.widgets.load(container);
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [tweetId]);

  return <div ref={containerRef} />;
};

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
          <TweetEmbed tweetId="1673654071885017091" />
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
