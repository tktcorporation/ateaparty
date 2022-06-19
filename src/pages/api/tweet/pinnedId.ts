// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Payload = {
  accountId: string;
};
type Data = {
  pinnedTweetId: string;
};
type ErrorResponse = {
  message: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
): Promise<void> => {
  const { accountId } = req.query as Payload;
  if (!accountId) {
    res.status(400).json({ message: "accountId is required" });
    return;
  }
  const TOKEN = process.env.TWITTER_API_TOKEN;
  if (!TOKEN) {
    res.status(500).json({ message: "TWITTER_API_TOKEN is not set" });
    return;
  }

  const url = `https://api.twitter.com/2/users/by/username/${accountId}?expansions=pinned_tweet_id`;
  try {
    const {
      data,
    }: {
      data: {
        data: {
          id: string; // "1394097064011735040"
          name: string; // "題名のないお茶会";
          username: string; // "ochakai_vrc";
          pinned_tweet_id: string; // "1536980578276364294";
        };
        includes: { tweets: unknown };
      };
    } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const pinnedTweetId = data.data.pinned_tweet_id;
    res.status(200).json({ pinnedTweetId });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "failed to get pinned tweet id" });
    return;
  }
};
