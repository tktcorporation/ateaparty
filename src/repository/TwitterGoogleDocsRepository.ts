import CSV from "comma-separated-values";
import axios from "axios";

export interface Tweet {
  name: string;
  tweetId: string;
}

export class TwitterGoogleDocsRepository {
  getAll = async (): Promise<Tweet[]> => {
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQuPJLzyXZYO7bXaSxfbO0MUlFYCBgKmXi541q5RmS5Mtaan-NhJb6_nIEPLywGpGSebPLwskWYnLS/pub?gid=0&single=true&output=csv";
    const { data } = await axios.get(url);
    const result: { name: string; tweetId: string }[] = new CSV(data, {
      header: true,
      cast: ["String", "String"],
    }).parse();
    return result;
  };
}
