import { Box } from "rebass/styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import {
  TwitterGoogleDocsRepository,
  Tweet,
} from "../../repository/TwitterGoogleDocsRepository";
import { createResource } from "../utils/helpers";

const resource = createResource(new TwitterGoogleDocsRepository().getAll());
export const SuspendedTweets = (props: { limit?: number }): JSX.Element => {
  let tweets = resource.read();
  if (props.limit) {
    tweets = tweets.slice(0, props.limit);
  }
  return (
    <>
      {tweets.map((tweet: Tweet) => (
        <Box
          width={[1, 1, 1 / tweets.length]}
          px={[2, 3, 5]}
          mt={2}
          key={tweet.tweetId}
        >
          <TwitterTweetEmbed tweetId={tweet.tweetId} />
        </Box>
      ))}
    </>
  );
};
