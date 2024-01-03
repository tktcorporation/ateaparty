import React from "react";
import { TITLE } from "../utils/constants";
import SocialLink from "./SocialLink";

const Footer: React.FC = () => {
  const { name, socialLinks } = {
    name: TITLE,
    socialLinks: [
      {
        name: "Twitter",
        url: "https://twitter.com/ochakai_vrc",
        remixiconClassName: "ri-twitter-fill",
      },
    ] as Array<Parameters<typeof SocialLink>[0]>,
  };

  return (
    <footer className={`p-2 md:p-3 bg-primary`} id="footer">
      <div className="max-w-screen-lg flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base md:text-lg text-background">
          <span>{name}</span>
        </p>

        <div className="flex">
          {socialLinks.map((sl) => (
            <div className="mx-2 md:mx-3 text-xl md:text-2xl" key={sl.name}>
              <SocialLink {...sl} invert />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
