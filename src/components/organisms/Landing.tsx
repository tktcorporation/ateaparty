import React from "react";
import { Heading, Flex, Text } from "rebass/styled-components";
import Section from "../components/Section";
import ScrollIcon from "../components/ScrollIcon";
import Triangle from "../components/Triangle";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import Image from "next/image";

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

const LandingPage = (): JSX.Element => {
  const { roles } = {
    roles: ["あ茶会", "あ茶"],
  };
  const hashTagText = roles[0];

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
        <Text width={[300, 500]} fontSize={[4, 7]} key={hashTagText}>
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://twitter.com/hashtag/${hashTagText}`}
          >
            #{hashTagText}
          </a>
        </Text>
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
