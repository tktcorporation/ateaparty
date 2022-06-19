import axios from "axios";
export class TwitterRepository {
  getPinnedTweetId = async (accountId: string): Promise<string> => {
    const url = `/api/tweet/pinnedId?accountId=${accountId}`;
    const {
      data,
    }: {
      data: { pinnedTweetId: string };
    } = await axios.get(url);
    const pinnedTweetId = data.pinnedTweetId;
    return pinnedTweetId;
  };
}
