import React, { ReactNode } from "react";
import styled from "styled-components";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";

type ContainerProps = {
  id?: SECTION;
  children: ReactNode;
  Background?: () => JSX.Element;
};

const Container = ({
  id,
  children,
  Background = DefaultBackground,
}: ContainerProps): JSX.Element => (
  <section id={id && getSectionHref(id)} style={{ position: "relative" }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </section>
);

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};

const Header = ({ name, icon, label }: HeaderProps): JSX.Element => (
  <div className="text-3xl mb-8">
    <span className="border-b-4 border-primary pb-1">
      {name}
      {icon && (
        <span role="img" aria-label={label} style={{ marginLeft: "10px" }}>
          {icon}
        </span>
      )}
    </span>
  </div>
);

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`;

const DefaultBackground = () => <div />;

export default {
  Container,
  Header,
};
