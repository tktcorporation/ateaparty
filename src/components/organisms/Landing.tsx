import React from "react";
import { Heading, Flex, Box, Text } from "rebass/styled-components";
import TextLoop from "react-text-loop";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";
import ScrollIcon from "../components/ScrollIcon";
import Triangle from "../components/Triangle";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import { Landing } from "../../types";
import Image from "next/image";

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

const LandingPage = () => {
  const { name, roles, socialLinks, deterministic } = {
    name: "あ茶会",
    roles: ["#あ茶会", "#あ茶", "#ChangeTheWorld"],
    socialLinks: [{ name: "girhub" }, { name: "girhub" }, { name: "girhub" }],
    deterministic: true,
  } as Landing & { deterministic: boolean };

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

      {/* <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm ${name}!`}
      </Heading> */}

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop interval={5000}>
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex>

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
