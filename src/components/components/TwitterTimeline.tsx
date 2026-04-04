import React from "react";

type TwitterTimelineProps = {
  screenName?: string;
  tweetLimit?: number;
  height?: number;
};

export const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  screenName = "ochakai_vrc",
  height = 600,
}) => {
  const src = `https://syndication.twitter.com/srv/timeline-profile/screen-name/${screenName}`;

  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
      }}
      sandbox="allow-scripts allow-same-origin allow-popups"
      loading="lazy"
      title={`@${screenName} のタイムライン`}
    />
  );
};
