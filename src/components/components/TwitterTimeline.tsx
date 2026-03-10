import React, { useEffect, useRef } from "react";

type TwitterTimelineProps = {
  screenName?: string;
  tweetLimit?: number;
  height?: number;
};

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

export const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  screenName = "ochakai_vrc",
  tweetLimit = 3,
  height,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const anchor = document.createElement("a");
    anchor.className = "twitter-timeline";
    anchor.setAttribute("data-tweet-limit", String(tweetLimit));
    anchor.setAttribute(
      "data-chrome",
      "noheader nofooter noborders transparent",
    );
    anchor.setAttribute("data-lang", "ja");
    if (height) {
      anchor.setAttribute("data-height", String(height));
    }
    anchor.href = `https://x.com/${screenName}`;
    anchor.textContent = `@${screenName} のツイート`;
    container.appendChild(anchor);

    if (window.twttr?.widgets) {
      window.twttr.widgets.load(container);
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, [screenName, tweetLimit, height]);

  return <div ref={containerRef} />;
};
