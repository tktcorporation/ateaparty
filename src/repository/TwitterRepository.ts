import axios from "axios";
export class TwitterRepository {
  getPinnedTweetId = async (accountId: string): Promise<string> => {
    const path = `/api/tweet/pinnedId?accountId=${accountId}`;
    const baseUrl = process.env.NEXT_API_LOCAL_URL;
    if (baseUrl) {
      axios.defaults.baseURL = baseUrl;
    }
    const {
      data,
    }: {
      data: { pinnedTweetId: string };
    } = await axios.get(path);
    const pinnedTweetId = data.pinnedTweetId;
    return pinnedTweetId;
  };
}
