declare module "react-twitter-embed" {
  // export function TwitterTweetEmbed({
  //   tweetId,
  // }: TwitterTweetEmbedProps): JSX.Element;
  export class TwitterTimelineEmbed extends React.Component<TwitterTimelineEmbedProps> {}
  export class TwitterFollowButton extends React.Component<TwitterFollowButtonProps> {}
  export class TwitterHashtagButton extends React.Component<TwitterHashtagButtonProps> {}
  export class TwitterShareButton extends React.Component<TwitterShareButtonProps> {}
  export class TwitterMentionButton extends React.Component<TwitterMentionButtonProps> {}
  export class TwitterTweetEmbed extends React.Component<TwitterTweetEmbedProps> {}
  export class TwitterMomentShare extends React.Component<TwitterMomentShareProps> {}
  export class TwitterDMButton extends React.Component<TwitterDMButtonProps> {}
  export class TwitterVideoEmbed extends React.Component<TwitterVideoEmbedProps> {}
  export class TwitterOnAirButton extends React.Component<TwitterOnAirButtonProps> {}
}

interface TwitterTweetEmbedProps {
  tweetId: string;
}

// import * as React from 'react'

type TwitterTimelineEmbedBaseProps = {
  options?: unknown;
  autoHeight?: boolean;
  theme?: "dark" | "light";
  linkColor?: string;
  borderColor?: string;
  noHeader?: boolean;
  noFooter?: boolean;
  noBorders?: boolean;
  noScrollbar?: boolean;
  transparent?: boolean;
  lang?: string;
};

type TwitterTimelineEmbedProps =
  | (TwitterTimelineEmbedBaseProps & {
      sourceType: "profile" | "likes";
      screenName: string;
    })
  | (TwitterTimelineEmbedBaseProps & {
      sourceType: "profile" | "likes";
      userId: number;
    })
  | (TwitterTimelineEmbedBaseProps & {
      sourceType: "list";
      ownerScreenName: string;
      slug: string;
    })
  | (TwitterTimelineEmbedBaseProps & { sourceType: "list"; id: number })
  | (TwitterTimelineEmbedBaseProps & { sourceType: "collection"; id: string })
  | (TwitterTimelineEmbedBaseProps & { sourceType: "url"; url: string })
  | (TwitterTimelineEmbedBaseProps & { sourceType: "widget"; widgetId: string })
  | (TwitterTimelineEmbedBaseProps & { sourceType: "timeline"; id: string });

type TwitterFollowButtonProps = {
  screenName: string;
  options?: unknown;
};

type TwitterHashtagButtonProps = {
  tag: string;
  options?: unknown;
};

type TwitterShareButtonProps = {
  url: string;
  options?: unknown;
};

type TwitterMentionButtonProps = {
  screenName: string;
  options?: unknown;
};

type TwitterTweetEmbedProps = {
  tweetId: string;
  options?: unknown;
  onLoaded?: (elm: unknown) => void;
};

type TwitterMomentShareProps = {
  momentId: string;
  options?: unknown;
};

type TwitterDMButtonProps = {
  id: number;
  options?: unknown;
};

type TwitterVideoEmbedProps = {
  id: string;
};

type TwitterOnAirButtonProps = {
  username: string;
  options?: unknown;
};
