import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import "dotenv/config";
import { ISteamUser } from "../../src/interfaces/ISteamUser";

const steamKey = process.env.STEAM_WEB_API;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISteamUser>
) {
  const { steamId } = req.query;
  const steamProfileURL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${steamKey}&steamids=${steamId}`;
  const response = await axios.get(steamProfileURL);
  res.status(200).json(response.data);
}
