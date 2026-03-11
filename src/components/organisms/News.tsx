import React from "react";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";

import Triangle from "../components/Triangle";
import { TwitterTimeline } from "../components/TwitterTimeline";

export const News: React.FC = () => {
  return (
    <Section.Container Background={Background} id={SECTION.news}>
      <Section.Header name={"お知らせ"} icon="📰" label="person" />
      <div className="flex justify-center w-full px-4">
        <div className="w-full max-w-lg">
          <TwitterTimeline height={800} />
        </div>
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
