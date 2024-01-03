import React, { Suspense } from "react";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";

import Triangle from "../components/Triangle";
import { Spinner } from "../components/Spinner";
import { SuspendedTweets } from "../molecules/SuspendedTweets";

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
