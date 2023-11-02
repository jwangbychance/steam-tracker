import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ISteamGameNews } from "../../src/interfaces/ISteamGameNews";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamGameNews>
) {
  const { appId } = req.query;
  const steamGameNewsURL = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=3&maxlength=300&format=json`;
  const response = await axios.get(steamGameNewsURL);
  res.status(200).json(response.data.appnews);
}
