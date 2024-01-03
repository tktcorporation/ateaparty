import React from "react";
import Section from "../components/Section";
import { SECTION } from "../utils/constants";
import Triangle from "../components/Triangle";
import { Timeline } from "../components/Timeline";

export const History: React.FC = () => {
  const items: {
    label: string;
    header: string;
    children?: React.ReactNode;
  }[] = [
    {
      label: "2023年8月26日",
      header: "コンサート「響け！夏空のお茶会」",
    },
    {
      label: "2023年2月18日",
      header: "コンサート「涙と絶望のコンサート」",
    },
    {
      label: "2022年8月28日",
      header: "コンサート「夏が終わるお茶会【再】」",
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
  const firstHalfItems = items.slice(0, items.length / 2);
  const secondHalfItems = items.slice(items.length / 2);
  return (
    <Section.Container Background={Background} id={SECTION.history}>
      <Section.Header name={"これまでの歩み"} icon="🦶" label="leg" />
      <div className="flex flex-row flex-wrap items-center mt-8">
        <div className="basis-full md:basis-1/2">
          <Timeline items={firstHalfItems} />
        </div>
        <div className="basis-full md:basis-1/2">
          <Timeline items={secondHalfItems} />
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
      position="bottom-right"
    />
  </>
);
