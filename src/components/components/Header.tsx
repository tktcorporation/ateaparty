import React from "react";
import Headroom from "react-headroom";
import Link from "./Link";
import { capitalize } from "../utils/string";
import { BASE_URL, SECTION, TITLE } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import { Logo } from "../../domain/Logo";
import { theme } from "../../theme";
import Image from "next/image";

const props = {
  profile: {
    bigIcon: {
      alt: TITLE,
      src: new Logo(BASE_URL).symbolUrl({ isPath: true, ext: "svg" }),
    },
    pcQuestIcon: {
      alt: "PC Quest 対応",
      src: new Logo(BASE_URL).pcQuestIconUrl({ isPath: true }),
    },
  },
};

const Header = (): JSX.Element => {
  const { profile } = props;

  return (
    <Headroom
      className="absolute w-full transition-all"
      wrapperStyle={{ width: "100%" }}
      pinStart={0}
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div className="flex flex-wrap justify-between items-center px-3">
        <a
          href={`#${getSectionHref(SECTION.home)}`}
          className="flex justify-center"
        >
          <Image
            src={profile.bigIcon.src}
            height={80}
            width={80}
            alt="Logo Icon"
            className="h-[60px] md:h-[80px] w-[60px] md:w-[80px] p-2 rounded-lg cursor-pointer"
          />
        </a>
        <div className="flex mr-0 md:mr-3 lg:mr-5">
          {Object.keys(SECTION)
            .filter((id) => id !== "home")
            .map((id) => (
              <div
                key={id}
                className="ml-2 md:ml-3 text-background text-base md:text-lg"
              >
                <Link href={`#${id}`} tabIndex={0}>
                  {capitalize(id)}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
