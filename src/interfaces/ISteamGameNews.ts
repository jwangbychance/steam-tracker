export interface ISteamGameNews {
  appid: number;
  count: number;
  newsitems: NewsItems[];
}

interface NewsItems {
  appid: number;
  author: string;
  contents: string;
  date: number;
  feed_type: number;
  feedlabel: string;
  feedname: string;
  gid: string;
  is_external_url: boolean;
  title: string;
  url: string;
}
