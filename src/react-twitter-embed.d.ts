declare module "react-twitter-embed" {
  export function TwitterTweetEmbed({
    tweetId,
  }: TwitterTweetEmbedProps): JSX.Element;
}

interface TwitterTweetEmbedProps {
  tweetId: string;
}
