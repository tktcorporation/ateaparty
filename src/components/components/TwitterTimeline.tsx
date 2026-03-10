import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

type TwitterTimelineProps = {
  screenName?: string;
  tweetLimit?: number;
  height?: number;
};

export const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  screenName = "ochakai_vrc",
  tweetLimit = 3,
  height,
}) => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={screenName}
      options={{
        tweetLimit,
        ...(height ? { height } : {}),
      }}
      noHeader
      noFooter
      noBorders
      transparent
      lang="ja"
    />
  );
};
