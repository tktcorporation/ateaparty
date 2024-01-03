import React from "react";
import Tippy from "@tippyjs/react";
import "remixicon/fonts/remixicon.css";

type Props = {
  invert?: boolean;
  remixiconClassName: string;
  name: string;
  url: string;
};

const SocialLink: React.FC<Props> = ({
  remixiconClassName,
  name,
  url,
  invert,
}) => {
  // Tailwind CSSクラスを動的に適用
  const linkClasses = `transition-opacity duration-400 ${
    invert ? "text-background" : "text-primary"
  } no-underline hover:opacity-70`;

  return (
    <Tippy
      content={name}
      placement="bottom"
      trigger="mouseenter focus"
      arrow={false}
      className="bg-background text-primary p-1 rounded-md"
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
        className={linkClasses}
      >
        <i className={remixiconClassName}></i>
      </a>
    </Tippy>
  );
};

export default SocialLink;
