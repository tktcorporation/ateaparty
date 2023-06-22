// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: {
    [key: string]: string;
  };
};
type ErrorResponse = {
  message: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
): Promise<void> => {
  res.status(200).json({ data: {} });
};
