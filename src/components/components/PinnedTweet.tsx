import { SuspendedTweets } from "../molecules/SuspendedTweets";

export const SuspendedPinnedTweet = (): JSX.Element => {
  return <SuspendedTweets limit={1} />;
};
