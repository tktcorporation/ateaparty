import { TwitterTweetEmbed } from "react-twitter-embed";
import { TwitterRepository } from "../../repository/TwitterRepository";
const ACCOUNT_NAME = "ochakai_vrc";

const wrapPromise = <T,>(
  promise: Promise<T>
): {
  read(): T;
} => {
  let status = "pending";
  let result: T | undefined;
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
    read() {
      //console.log(status);
      if (status === "pending") {
        throw suspender;
      } else if (status === "success") {
        if (result === undefined) {
          throw result;
        }
        return result;
      }
      throw result;
    },
  };
};

const useTweetData = (accountName: string) => {
  const repository = new TwitterRepository();
  return wrapPromise(repository.getPinnedTweetId(accountName));
};

const SuspenseTwitterTweetEmbed = () => {
  const pinnedTweetID = useTweetData(ACCOUNT_NAME).read();
  return <TwitterTweetEmbed tweetId={pinnedTweetID} />;
};

export default SuspenseTwitterTweetEmbed;
