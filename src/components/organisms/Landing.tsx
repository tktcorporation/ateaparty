import Section from "../components/Section";
import ScrollIcon from "../components/ScrollIcon";
import Triangle from "../components/Triangle";
import { SECTION, BASE_URL } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import Image from "next/image";
import { Logo } from "../../domain/Logo";

const LandingPage = (): JSX.Element => {
  const { roles } = {
    roles: ["あ茶会", "あ茶"],
  };
  const hashTagText = roles[0];

  return (
    <Section.Container id={SECTION.home} Background={Background}>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className="basis-1/4 md:basis-1/6">
            <Image
              src={new Logo(BASE_URL).pcQuestIconUrl({ isPath: true })}
              alt="PC Quest 対応"
              width={120}
              height={60}
              className="flex-auto"
              sizes="100vw"
              style={{
                verticalAlign: "middle",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div>
          <Image
            src={new Logo(BASE_URL).yokogumiUrl({ isPath: true, ext: "png" })}
            alt="題名のないお茶会"
            width={1200}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="text-center flex items-center justify-center">
          <div className="text-2xl md:text-6xl">
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://twitter.com/hashtag/${hashTagText}`}
            >
              #{hashTagText}
            </a>
          </div>
        </div>
      </div>
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
