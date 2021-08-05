import React from "react";

type Props = {
  twitterHref: string;
};

let isLoadwidgets = false;
export const Twemb = ({ twitterHref }: Props): JSX.Element => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <a
      className="twitter-timeline"
      data-width={450}
      data-height={600}
      // data-theme="dark"
      data-chrome="noheadernofooternoborders"
      href={twitterHref}
    ></a>
  );
};
