import React from "react";
import { Flex } from "rebass/styled-components";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import Triangle from "../components/Triangle";
import { Timeline } from "../components/Timeline";

export const History: React.FC = () => {
  const items = [
    {
      label: "2022年8月?日",
      header: "？？？？",
    },
    {
      label: "2021年12月19日",
      header: "コンサート「雪灯りのお茶会」",
    },
    {
      label: "2021年8月21日",
      header: "コンサート「夏が終わるお茶会」",
    },
    {
      label: "2021年6月20日",
      header: "第1回ミニコンサート",
      children: <p>以降、2ヶ月に一度の頻度で定期開催</p>,
    },
    {
      label: "2021年2月28日",
      header: "クロスマーケット2コラボ",
      children: (
        <p>クロスマーケット2会場にて「絶望と闇のお茶会」の一部楽曲を再演</p>
      ),
    },
    {
      label: "2021年2月14日",
      header: "コンサート「絶望と闇のお茶会」",
    },
    {
      label: "2020年12月27日",
      header: "コンサート「雪景色のお茶会」",
    },
    {
      label: "2020年10月17日",
      header: "コンサート「星空のお茶会」",
      children: <p>天文仮想研究所様の1周年記念イベントの一環で開催</p>,
    },
    {
      label: "2020年8月23日",
      header: "お茶会",
      children: <p>演奏者を交えたお茶会が毎週日曜日に定期開催されるように</p>,
    },
    {
      label: "2020年8月",
      header: "あの子゜がお茶菓子を持ち寄るお茶会を開催",
    },
  ];
  const firstHalfItems = items.slice(0, Math.floor(items.length / 2));
  const secondHalfItems = items.slice(Math.floor(items.length / 2));
  return (
    <Section.Container Background={Background} id={SECTION.history}>
      <Section.Header name={"これまでの歩み"} icon="🦶" label="leg" />
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Flex width={[1, 1 / 2]} px={[0, 0, 0, 0, 3]}>
          <Timeline items={firstHalfItems} />
        </Flex>
        <Flex width={[1, 1 / 2]} px={[0, 0, 0, 0, 3]}>
          <Timeline items={secondHalfItems} />
        </Flex>
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
