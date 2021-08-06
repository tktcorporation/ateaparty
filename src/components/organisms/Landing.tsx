import React from "react";
import { Heading, Flex, Text } from "rebass/styled-components";
import TextLoop from "react-text-loop";
import Section from "../components/Section";
import ScrollIcon from "../components/ScrollIcon";
import Triangle from "../components/Triangle";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import Image from "next/image";

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

const LandingPage = (): JSX.Element => {
  const { roles, deterministic } = {
    roles: ["あ茶会", "あ茶"], // 隠し要素？ "ChangeTheWorld"
    deterministic: true,
  };

  return (
    <Section.Container id={SECTION.home} Background={Background}>
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        <Image
          src="/logo_yokogumi.svg"
          alt="Ateapaty Logo"
          width={1200}
          height={300}
        />
      </Flex>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop interval={5000}>
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text width={[300, 500]} fontSize={[4, 7]} key={text}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://twitter.com/hashtag/${text}`}
                >
                  #{text}
                </a>
              </Text>
            ))}
        </TextLoop>
      </Heading>

      <ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["35vh", "80vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="secondary"
      height={["38vh", "80vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primary"
      height={["25vh", "35vh"]}
      width={["75vw", "60vw"]}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={["20vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
