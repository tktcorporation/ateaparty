import { TwitterTweetEmbed } from "react-twitter-embed";
import { TwitterRepository } from "../../repository/TwitterRepository";
const ACCOUNT_NAME = "ochakai_vrc";

const wrapPromise = <T,>(
  promise: Promise<T>
): {
  read(): T;
} => {
  let status = "pending";
  let result: T;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read: () => {
      console.log(status);
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
      throw new Error("Unexpected status");
    },
  };
};

const useTweetData = (accountName: string) => {
  const repository = new TwitterRepository();
  return wrapPromise(repository.getPinnedTweetId(accountName));
};

const SuspenseTwitterTweetEmbed = (): JSX.Element => {
  const pinnedTweetID = useTweetData(ACCOUNT_NAME).read();
  const repository = new TwitterRepository();
  console.log("getPinnedTweetId", repository.getPinnedTweetId(ACCOUNT_NAME));
  return <TwitterTweetEmbed tweetId={pinnedTweetID} />;
};

export default SuspenseTwitterTweetEmbed;
