import { TwitterTweetEmbed } from "react-twitter-embed";
import { TwitterRepository } from "../../repository/TwitterRepository";
import { createResource } from "../utils/helpers";
const ACCOUNT_NAME = "ochakai_vrc";

const useTweetData = (accountName: string) => {
  const repository = new TwitterRepository();
  return createResource(repository.getPinnedTweetId(accountName));
};

const resource = useTweetData(ACCOUNT_NAME);
export const SuspendedPinnedTweet = (): JSX.Element => {
  const pinnedTweetID = resource.read();
  return <TwitterTweetEmbed tweetId={pinnedTweetID} />;
};
